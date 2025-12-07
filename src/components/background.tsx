"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Float, Stars, PerspectiveCamera, Sparkles, Environment } from "@react-three/drei"
import { useRef, Suspense } from "react"
import * as THREE from "three"

function CrystalShape({ position, color, speed, type, scale = 1 }: { position: [number, number, number], color: string, speed: number, type: 'box' | 'sphere' | 'torus' | 'icosahedron' | 'octahedron', scale?: number }) {
  const meshRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3 * speed) * 0.2
    meshRef.current.rotation.y += 0.005 * speed
  })

  return (
    <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {type === 'box' && <boxGeometry args={[1, 1, 1]} />}
        {type === 'sphere' && <sphereGeometry args={[0.7, 32, 32]} />}
        {type === 'torus' && <torusGeometry args={[0.6, 0.2, 16, 32]} />}
        {type === 'icosahedron' && <icosahedronGeometry args={[0.8, 0]} />}
        {type === 'octahedron' && <octahedronGeometry args={[1, 0]} />}
        
        {/* Glass Material */}
        <meshPhysicalMaterial 
          color={color}
          roughness={0.1}
          metalness={0.1}
          transmission={0.6} // Glass effect
          thickness={0.5}
          clearcoat={1}
          clearcoatRoughness={0.1}
          ior={1.5}
          reflectivity={0.5}
          emissive={color}
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  )
}

function Scene() {
  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 0, 15]} />
      <Environment preset="city" />
      
      {/* Warm & Cool Lights for "Half-Half" feel */}
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1.5} color="#fbbf24" /> {/* Warm Gold */}
      <pointLight position={[-10, -10, -10]} intensity={1.5} color="#3b82f6" /> {/* Cool Blue */}
      <spotLight position={[0, 10, 0]} intensity={1} angle={0.5} penumbra={1} color="#ffffff" />

      <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={0.5} />
      
      <Sparkles 
        count={80}
        scale={15}
        size={3}
        speed={0.3}
        opacity={0.6}
        color="#ffffff"
      />

      {/* Floating Crystal Shapes - Balanced Composition */}
      <CrystalShape position={[-4, 2, -5]} color="#ef4444" speed={0.8} type="icosahedron" scale={1.2} /> {/* Red */}
      <CrystalShape position={[5, -1, -4]} color="#eab308" speed={0.6} type="torus" scale={1.5} /> {/* Gold */}
      <CrystalShape position={[0, 3, -8]} color="#ffffff" speed={0.4} type="sphere" scale={2} /> {/* White/Glass */}
      <CrystalShape position={[-5, -3, -6]} color="#3b82f6" speed={0.7} type="octahedron" scale={1.1} /> {/* Blue Accent */}
      <CrystalShape position={[6, 4, -10]} color="#ef4444" speed={0.5} type="box" scale={1} />
      
      {/* Background Fog for Depth - Dark Blue/Slate */}
      <fog attach="fog" args={['#0f172a', 5, 25]} />
    </>
  )
}

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#0f172a]">
      {/* Gradient Overlay for "Pleasant" look */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-[#1e1b4b] to-slate-900 opacity-90 z-0" />
      
      {/* Light glow spots */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-amber-500/10 rounded-full blur-[120px]" />
      </div>

      <Canvas dpr={[1, 2]} className="z-10">
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
      </Canvas>
    </div>
  )
}

export const LandingBackground = Background;
export const DashboardBackground = Background;
