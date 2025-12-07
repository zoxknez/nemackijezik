'use client'

import Link from 'next/link'
import { useAuth } from '@/components/providers/AuthProvider'
import { useRouter } from 'next/navigation'
import { BookOpen, User, LogOut, Home } from 'lucide-react'
import { Button } from '../ui/Button'

export function Navbar() {
  const { user, isAuthenticated, logout } = useAuth()
  const router = useRouter()

  const handleLogout = () => {
    logout()
    router.push('/')
  }

  return (
    <nav className="border-b border-dark-border bg-dark-surface">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 text-xl font-bold">
            <BookOpen className="w-6 h-6 text-der-blue" />
            <span>Nemački Jezik</span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-4">
            <Link
              href="/lessons"
              className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
            >
              <Home className="w-5 h-5" />
              Lekcije
            </Link>

            {isAuthenticated ? (
              <>
                <Link
                  href="/dashboard"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <User className="w-5 h-5" />
                  {user?.name}
                </Link>
                <Button variant="ghost" size="sm" onClick={handleLogout}>
                  <LogOut className="w-4 h-4" />
                  Odjavi Se
                </Button>
              </>
            ) : (
              <>
                <Link href="/auth/login">
                  <Button variant="ghost" size="sm">Prijavi Se</Button>
                </Link>
                <Link href="/auth/register">
                  <Button variant="primary" size="sm">Registruj Se</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

