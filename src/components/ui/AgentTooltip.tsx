"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { TerminalSquare } from "lucide-react";

export function AgentTooltip() {
  const [isVisible, setIsVisible] = useState(false);
  
  // High-performance spring tracking for the mouse
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      // Sniff the DOM to see if we are actively hovering over a BentoCard target
      const target = e.target as HTMLElement;
      if (target.closest('[data-agent-tooltip="true"]')) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      style={{
        x: smoothX,
        y: smoothY,
        translateX: "15px", // Offset slightly from pointer
        translateY: "15px",
      }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0.8
      }}
      transition={{ duration: 0.2 }}
      className="fixed top-0 left-0 z-[10000] pointer-events-none"
    >
      <div className="glass px-3 py-1.5 rounded-md border border-primary/30 bg-black/80 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.3)] flex items-center gap-2">
         <TerminalSquare className="w-3 h-3 text-primary animate-pulse" />
         <span className="font-mono text-[10px] text-primary/90 font-bold uppercase tracking-widest whitespace-nowrap">
           [ANALYZING_CORE]: STATUS_OPTIMIZED
         </span>
      </div>
    </motion.div>
  );
}
