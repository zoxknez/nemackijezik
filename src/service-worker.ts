/// <reference lib="webworker" />

import { clientsClaim } from "workbox-core"
import { ExpirationPlugin } from "workbox-expiration"
import { precacheAndRoute, createHandlerBoundToURL } from "workbox-precaching"
import { registerRoute, NavigationRoute } from "workbox-routing"
import { StaleWhileRevalidate, CacheFirst, NetworkFirst } from "workbox-strategies"
import { CacheableResponsePlugin } from "workbox-cacheable-response"

declare const self: ServiceWorkerGlobalScope & {
  __WB_MANIFEST: Array<{ url: string; revision: string | null }>
}

interface SyncEvent extends ExtendableEvent {
  tag: string
}

interface PeriodicSyncEvent extends ExtendableEvent {
  tag: string
}

// Extend global to include sync event listeners
declare global {
  interface ServiceWorkerGlobalScopeEventMap {
    sync: SyncEvent
    periodicsync: PeriodicSyncEvent
  }
}

// Take control immediately
clientsClaim()

// Precache all static assets
precacheAndRoute(self.__WB_MANIFEST)

// App shell - serve cached version while revalidating
const appShellHandler = createHandlerBoundToURL("/dashboard")
const navigationRoute = new NavigationRoute(appShellHandler, {
  denylist: [
    /^\/api\//,
    /^\/auth\//,
    /^\/_next\//,
  ],
})
registerRoute(navigationRoute)

// Cache Next.js static assets
registerRoute(
  ({ url }) =>
    url.pathname.startsWith("/_next/static/") ||
    url.pathname.startsWith("/static/"),
  new CacheFirst({
    cacheName: "static-assets",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 100,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
      }),
    ],
  })
)

// Cache images
registerRoute(
  ({ request }) => request.destination === "image",
  new CacheFirst({
    cacheName: "images",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 60,
        maxAgeSeconds: 7 * 24 * 60 * 60, // 7 days
      }),
    ],
  })
)

// Cache audio files for vocabulary
registerRoute(
  ({ request }) => request.destination === "audio",
  new CacheFirst({
    cacheName: "audio",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 200,
        maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
      }),
    ],
  })
)

// Cache fonts
registerRoute(
  ({ request }) => request.destination === "font",
  new CacheFirst({
    cacheName: "fonts",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 10,
        maxAgeSeconds: 365 * 24 * 60 * 60, // 1 year
      }),
    ],
  })
)

// Cache API responses for offline mode (lessons, vocabulary)
registerRoute(
  ({ url }) =>
    url.pathname.startsWith("/api/lessons") ||
    url.pathname.startsWith("/api/vocabulary"),
  new StaleWhileRevalidate({
    cacheName: "api-lessons",
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 50,
        maxAgeSeconds: 24 * 60 * 60, // 24 hours
      }),
    ],
  })
)

// Network first for user data
registerRoute(
  ({ url }) =>
    url.pathname.startsWith("/api/user") ||
    url.pathname.startsWith("/api/progress"),
  new NetworkFirst({
    cacheName: "api-user",
    networkTimeoutSeconds: 5,
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxEntries: 10,
        maxAgeSeconds: 60 * 60, // 1 hour
      }),
    ],
  })
)

// Background sync for exercise submissions when offline
self.addEventListener("sync", (event: SyncEvent) => {
  if (event.tag === "sync-exercises") {
    event.waitUntil(syncExercises())
  }
  if (event.tag === "sync-progress") {
    event.waitUntil(syncProgress())
  }
})

async function syncExercises() {
  const cache = await caches.open("offline-queue")
  const requests = await cache.keys()

  for (const request of requests) {
    if (request.url.includes("/api/exercises")) {
      try {
        const response = await fetch(request.clone())
        if (response.ok) {
          await cache.delete(request)
        }
      } catch {
        console.error("Sync failed for:", request.url)
      }
    }
  }
}

async function syncProgress() {
  const cache = await caches.open("offline-queue")
  const requests = await cache.keys()

  for (const request of requests) {
    if (request.url.includes("/api/progress")) {
      try {
        const response = await fetch(request.clone())
        if (response.ok) {
          await cache.delete(request)
        }
      } catch {
        console.error("Sync failed for:", request.url)
      }
    }
  }
}

// Push notifications for streak reminders
self.addEventListener("push", (event) => {
  const data = event.data?.json() ?? {}

  const options: NotificationOptions = {
    body: data.body || "Vreme je za učenje! 📚",
    icon: "/icons/icon-192x192.png",
    badge: "/icons/badge-72x72.png",
    data: {
      url: data.url || "/dashboard",
    },
  }

  event.waitUntil(
    self.registration.showNotification(
      data.title || "DeutschMaster",
      options
    )
  )
})

self.addEventListener("notificationclick", (event) => {
  event.notification.close()

  if (event.action === "learn" || !event.action) {
    const url = event.notification.data?.url || "/dashboard"
    event.waitUntil(
      self.clients.matchAll({ type: "window" }).then((clients) => {
        // Focus existing window or open new one
        for (const client of clients) {
          if (client.url.includes(url) && "focus" in client) {
            return client.focus()
          }
        }
        return self.clients.openWindow(url)
      })
    )
  }
})

// Periodic sync for vocabulary review reminders
self.addEventListener("periodicsync", (event) => {
  if (event.tag === "check-reviews") {
    event.waitUntil(checkPendingReviews())
  }
})

async function checkPendingReviews() {
  try {
    const response = await fetch("/api/vocabulary/due-count")
    const data = await response.json()

    if (data.count > 0) {
      await self.registration.showNotification("DeutschMaster", {
        body: `Imaš ${data.count} reči za ponavljanje! 🎯`,
        icon: "/icons/icon-192x192.png",
        badge: "/icons/badge-72x72.png",
        tag: "vocab-reminder",
        data: { url: "/vokabular/ponavljanje" },
      })
    }
  } catch (error) {
    console.error("Failed to check reviews:", error)
  }
}

// Skip waiting and update immediately
self.addEventListener("message", (event) => {
  if (event.data?.type === "SKIP_WAITING") {
    self.skipWaiting()
  }
})

export {}
