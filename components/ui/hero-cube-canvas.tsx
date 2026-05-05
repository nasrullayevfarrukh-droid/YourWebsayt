"use client";

import { ContactShadows, Edges, OrbitControls, RoundedBox } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";
import type { Group } from "three";

type HeroCubeCanvasProps = {
  interactive: boolean;
  reducedMotion: boolean;
  onInteractionChange?: (active: boolean) => void;
};

function FloatingCube({ reducedMotion }: { reducedMotion: boolean }) {
  const groupRef = useRef<Group>(null);

  useFrame((state) => {
    if (!groupRef.current || reducedMotion) {
      return;
    }

    const elapsed = state.clock.getElapsedTime();
    groupRef.current.position.y = Math.sin(elapsed * 1.15) * 0.08;
    groupRef.current.rotation.z = Math.sin(elapsed * 0.85) * 0.06;
  });

  return (
    <group ref={groupRef}>
      <RoundedBox args={[1.56, 1.56, 1.56]} radius={0.22} smoothness={7}>
        <meshPhysicalMaterial
          color="#0b1f18"
          metalness={0.3}
          roughness={0.09}
          transmission={0.58}
          thickness={1.28}
          ior={1.18}
          reflectivity={0.9}
          clearcoat={1}
          clearcoatRoughness={0.08}
          emissive="#00e676"
          emissiveIntensity={0.18}
          attenuationColor="#a7f3d0"
          attenuationDistance={1.2}
        />
        <Edges color="#a7f3d0" />
      </RoundedBox>
    </group>
  );
}

export function HeroCubeCanvas({
  interactive,
  reducedMotion,
  onInteractionChange
}: HeroCubeCanvasProps) {
  return (
    <Canvas
      dpr={[1, 1.6]}
      camera={{ position: [0, 0.15, 4.6], fov: 29 }}
      gl={{ alpha: true, antialias: true, powerPreference: "high-performance" }}
    >
      <ambientLight intensity={1.15} color="#f8fafc" />
      <directionalLight position={[3.8, 4.2, 3.6]} intensity={2.3} color="#ffffff" />
      <pointLight position={[-2.4, 1.5, 2.6]} intensity={16} distance={8} decay={2} color="#00e676" />
      <spotLight
        position={[0, 4.5, 4]}
        intensity={20}
        angle={0.36}
        penumbra={0.7}
        distance={10}
        color="#14b8a6"
      />

      <FloatingCube reducedMotion={reducedMotion} />

      <ContactShadows
        position={[0, -1.08, 0]}
        opacity={0.42}
        scale={4.7}
        blur={2.6}
        far={2.8}
        color="#04110d"
      />

      <OrbitControls
        makeDefault
        enablePan={false}
        enableZoom={false}
        enableRotate={interactive}
        minDistance={4.6}
        maxDistance={4.6}
        minPolarAngle={0}
        maxPolarAngle={Math.PI}
        enableDamping
        dampingFactor={0.08}
        autoRotate={!reducedMotion}
        autoRotateSpeed={0.72}
        onStart={() => onInteractionChange?.(true)}
        onEnd={() => onInteractionChange?.(false)}
      />
    </Canvas>
  );
}
