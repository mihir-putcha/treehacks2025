"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

function HeartShape() {
  const shape = useMemo(() => {
    const heartShape = new THREE.Shape()

    heartShape.moveTo(0, 0)
    heartShape.bezierCurveTo(0, -1.5, -2, -1.5, -2, 0.5)
    heartShape.bezierCurveTo(-2, 2, 0, 3, 0, 3)
    heartShape.bezierCurveTo(0, 3, 2, 2, 2, 0.5)
    heartShape.bezierCurveTo(2, -1.5, 0, -1.5, 0, 0)

    return heartShape
  }, [])

  const extrudeSettings = useMemo(
    () => ({
      steps: 2,
      depth: 1,
      bevelEnabled: true,
      bevelThickness: 0.5,
      bevelSize: 0.5,
      bevelSegments: 32,
    }),
    [],
  )

  return (
    <mesh>
      <extrudeGeometry args={[shape, extrudeSettings]} />
      <meshPhongMaterial color="#ff4136" shininess={100} />
    </mesh>
  )
}

function RotatingHeart() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3
    }
  })

  return (
    <mesh ref={meshRef} scale={[1.2, 1.2, 1.2]} rotation={[0, 0, Math.PI]}>
      <HeartShape />
    </mesh>
  )
}

export function HeartAnimation() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <group position={[0, 1, 0]}>
          <RotatingHeart />
        </group>
      </Canvas>
    </div>
  )
}

