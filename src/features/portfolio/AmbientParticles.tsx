"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export function AmbientParticles({ count = 500 }: { count?: number }) {
  const mesh = useRef<THREE.InstancedMesh>(null);
  const dummy = new THREE.Object3D();
  
  // Initialize random positions and velocities
  const particles = useRef(
    Array.from({ length: count }, () => {
      return {
        t: Math.random() * 100,
        factor: 20 + Math.random() * 100,
        speed: 0.01 + Math.random() / 200,
        xFactor: -50 + Math.random() * 100,
        yFactor: -50 + Math.random() * 100,
        zFactor: -50 + Math.random() * 100,
      };
    })
  );

  useFrame((state) => {
    if (!mesh.current) return;
    
    // Mouse tracking for "Ambient Intelligence" 
    const mouseX = (state.pointer.x * state.viewport.width) / 2;
    const mouseY = (state.pointer.y * state.viewport.height) / 2;

    particles.current.forEach((particle, i) => {
      let { t, factor, speed, xFactor, yFactor, zFactor } = particle;
      t = particle.t += speed / 2;
      const a = Math.cos(t) + Math.sin(t * 1) / 10;
      const b = Math.sin(t) + Math.cos(t * 2) / 10;
      const s = Math.cos(t);

      // Particles loosely follow the mouse but float around
      dummy.position.set(
         (mouseX / 10) + (particle.xFactor) + Math.cos((t / 10) * factor) + (Math.sin(t * 1) * factor) / 10,
         (mouseY / 10) + (particle.yFactor) + Math.sin((t / 10) * factor) + (Math.cos(t * 2) * factor) / 10,
         (particle.zFactor) + Math.cos((t / 10) * factor) + (Math.sin(t * 3) * factor) / 10
      );
      
      dummy.scale.set(s, s, s);
      dummy.rotation.set(s * 5, s * 5, s * 5);
      dummy.updateMatrix();
      
      mesh.current?.setMatrixAt(i, dummy.matrix);
    });
    
    mesh.current.instanceMatrix.needsUpdate = true;
  });

  return (
    <instancedMesh ref={mesh} args={[undefined, undefined, count]}>
      <dodecahedronGeometry args={[0.2, 0]} />
      <meshPhysicalMaterial 
         color="#a855f7" // Neon Purple
         emissive="#3b82f6" // Electric Blue 
         emissiveIntensity={0.5}
         transparent 
         opacity={0.6}
         roughness={0}
      />
    </instancedMesh>
  );
}
