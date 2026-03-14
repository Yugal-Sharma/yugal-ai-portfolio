"use client";

import { motion } from "framer-motion";
import { Activity, Cpu, Code } from "lucide-react";

export function BioPulse() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 mb-24 relative z-20">
      <div className="glass p-8 rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl relative overflow-hidden group">
        
        {/* Glowing Background Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-primary/5 to-purple-500/5 opacity-50 transition-opacity group-hover:opacity-100" />

        <div className="relative flex flex-col md:flex-row items-center gap-8 justify-between z-10">
          
          {/* Left Node: C++ / Low Level */}
          <div className="flex flex-col items-center gap-2 text-foreground/70">
            <div className="w-16 h-16 rounded-full glass flex items-center justify-center border border-white/10 relative">
               <div className="absolute inset-0 rounded-full border border-blue-500/50 animate-ping opacity-20" />
               <Code className="w-6 h-6 text-blue-400" />
            </div>
            <span className="font-mono text-xs uppercase tracking-widest font-bold text-blue-400">Low-Level C++</span>
          </div>

          {/* Center Connector: Animated SVG Wave */}
          <div className="flex-1 w-full h-24 relative flex items-center justify-center hidden md:flex">
             <div className="absolute top-1/2 left-0 right-0 h-px bg-white/5" />
             
             {/* Dynamic Sine Wave Path */}
             <svg width="100%" height="100" className="absolute" style={{ overflow: "visible" }}>
               <motion.path
                 d="M 0 50 Q 80 10, 160 50 T 320 50 T 480 50 T 640 50" // Base path stretching between nodes
                 fill="transparent"
                 stroke="currentColor"
                 strokeWidth="2"
                 className="text-primary/50"
                 animate={{
                   d: [
                     "M 0 50 Q 80 10, 160 50 T 320 50 T 480 50 T 640 50",
                     "M 0 50 Q 80 90, 160 50 T 320 50 T 480 50 T 640 50",
                     "M 0 50 Q 80 10, 160 50 T 320 50 T 480 50 T 640 50",
                   ],
                 }}
                 transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
               />
               
               {/* Heartbeat pulse traveling the line */}
               <motion.circle
                 r="4"
                 fill="#a855f7" // Neon Purple dot
                 className="shadow-[0_0_10px_#a855f7]"
                 animate={{
                   cx: ["0%", "100%"],
                   cy: ["50%", "50%"], // Follows a flat line approximation for simplicity of the pulse
                 }}
                 transition={{
                   repeat: Infinity,
                   duration: 2,
                   ease: "linear",
                 }}
               />
             </svg>

             {/* Center HUD */}
             <div className="absolute bg-background/80 border border-primary/30 px-4 py-2 rounded-full backdrop-blur-md flex items-center gap-2 shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                <Activity className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-xs font-mono font-bold text-white tracking-wider">DEVELOPER PULSE : ACTIVE</span>
             </div>
          </div>

          {/* Right Node: IoT / Hardware */}
          <div className="flex flex-col items-center gap-2 text-foreground/70">
            <div className="w-16 h-16 rounded-full glass flex items-center justify-center border border-white/10 relative">
               <div className="absolute inset-0 rounded-full border border-purple-500/50 animate-ping opacity-20" style={{ animationDelay: "1s" }}/>
               <Cpu className="w-6 h-6 text-purple-400" />
            </div>
            <span className="font-mono text-xs uppercase tracking-widest font-bold text-purple-400">IoT Hardware</span>
          </div>

        </div>
        
        <p className="text-center text-sm font-mono text-foreground/50 mt-8 max-w-xl mx-auto leading-relaxed">
           Bridging the gap between raw hardware manipulation and high-level autonomous AI orchestration ecosystems.
        </p>

      </div>
    </div>
  );
}
