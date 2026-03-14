"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, MeshTransmissionMaterial, RoundedBox } from "@react-three/drei";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import * as THREE from "three";

// The 3D Glass Object Refracting behind the HTML content
function GlassBox({ isHovered }: { isHovered: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      if (isHovered) {
        meshRef.current.rotation.x += delta * 0.5;
        meshRef.current.rotation.y += delta * 0.5;
        meshRef.current.scale.lerp(new THREE.Vector3(1.2, 1.2, 1.2), 0.1);
      } else {
        meshRef.current.rotation.x += delta * 0.1;
        meshRef.current.rotation.y += delta * 0.1;
        meshRef.current.scale.lerp(new THREE.Vector3(1, 1, 1), 0.1);
      }
    }
  });

  return (
    <RoundedBox ref={meshRef} args={[3, 3, 3]} radius={0.2} smoothness={4}>
      <MeshTransmissionMaterial
        backside
        thickness={0.5}
        roughness={0.1}
        transmission={1}
        ior={1.5}
        chromaticAberration={0.06}
        anisotropy={0.1}
        color="#a855f7" // Neon Purple base refraction
      />
    </RoundedBox>
  );
}

// Reusable Bento Card Container Wrapper with 3D Tilt & Holographic Glare
export function BentoCard({ children, className, delay = 0 }: { children: React.ReactNode, className?: string, delay?: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const [show3D, setShow3D] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Buttery smooth spring physics for the tilt
  const rotateX = useSpring(0, { stiffness: 300, damping: 30 });
  const rotateY = useSpring(0, { stiffness: 300, damping: 30 });

  // Defer heavy WebGL Canvas initialization so we don't block the React layout transitions
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow3D(true);
    }, 400 + delay * 1000); // 400ms base layout transition + individual stagger delay
    return () => clearTimeout(timer);
  }, [delay]);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    mouseX.set(x);
    mouseY.set(y);

    // Calculate tilt angles based on mouse position relative to center
    const xPct = (x / rect.width - 0.5) * 2;
    const yPct = (y / rect.height - 0.5) * 2;
    
    rotateX.set(-yPct * 5); // 5 degree max tilt
    rotateY.set(xPct * 5);
  }

  function handleMouseLeave() {
    setIsHovered(false);
    rotateX.set(0);
    rotateY.set(0);
  }

  // Dynamic glare overlay tracking the mouse
  const glareBackground = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(168,85,247,0.15), transparent 80%)`;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay, duration: 0.6, type: "spring", stiffness: 100 }}
      viewport={{ once: true, margin: "-50px" }}
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      data-agent-tooltip="true"
      className={`relative rounded-3xl overflow-hidden glass border border-white/5 flex flex-col group/bento ${className}`}
      style={{ 
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000
      }}
    >
      {/* Dynamic Cursor Glare */}
      <motion.div
        className="absolute inset-0 z-0 pointer-events-none opacity-0 group-hover/bento:opacity-100 transition-opacity duration-500 rounded-3xl"
        style={{ background: glareBackground }}
      />

      {/* 3D Glass Refraction Canvas Background (Lazy Loaded to prevent route lag) */}
      <div className="absolute inset-0 -z-10 pointer-events-none opacity-40 mix-blend-screen overflow-hidden">
        {show3D && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }} className="w-full h-full">
            <Canvas eventSource={containerRef as any} camera={{ position: [0, 0, 8], fov: 40 }}>
              <ambientLight intensity={0.5} />
              <Environment preset="city" />
              <GlassBox isHovered={isHovered} />
            </Canvas>
          </motion.div>
        )}
      </div>
      
      {/* Front Content */}
      <div className="relative z-10 w-full h-full flex flex-col" style={{ transform: "translateZ(30px)" }}>
        {children}
      </div>
    </motion.div>
  );
}
