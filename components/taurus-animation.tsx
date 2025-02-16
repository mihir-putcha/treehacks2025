"use client"

import { useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Torus } from "@react-three/drei"
import type * as THREE from "three"

function RotatingTaurus() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.2
      meshRef.current.rotation.y += delta * 0.3
    }
  })

  return (
    <Torus args={[3, 1, 16, 100]} ref={meshRef}>
      <meshNormalMaterial />
    </Torus>
  )
}

export function TaurusAnimation() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 10] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <RotatingTaurus />
      </Canvas>
    </div>
  )
}

