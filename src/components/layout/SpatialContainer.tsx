"use client";

import { useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { AmbientParticles } from "@/features/portfolio/AmbientParticles";

export function SpatialContainer({ children }: { children: React.ReactNode }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="relative w-full h-full">
      
      {/* Global Ambient Intelligence Canvas (Pointer Events None to click through) */}
      {isClient && (
        <div className="fixed inset-0 z-0 pointer-events-none opacity-50 mix-blend-screen perspective-[1200px]">
          <Canvas camera={{ position: [0, 0, 50], fov: 60 }}>
            <ambientLight intensity={0.5} />
            <AmbientParticles count={300} />
          </Canvas>
        </div>
      )}

      {/* Main Content Wrapper (Pure 2D to prevent Z/Y-axis clipping) */}
      <div className="relative z-10 w-full h-full min-h-screen origin-top">
        {children}
      </div>
    </div>
  );
}
