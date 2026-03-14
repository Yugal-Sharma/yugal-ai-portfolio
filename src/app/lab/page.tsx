"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Activity } from "lucide-react";

export default function LabPage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Make canvas full screen behind content
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const letters = "01ABCDEFGHIJKLMNOPQRSTUVWXYZ01";
    const fontSize = 14;
    const columns = canvas.width / fontSize;

    const drops: number[] = [];
    for (let x = 0; x < columns; x++) {
      drops[x] = 1;
    }

    const draw = () => {
      // Black BG for the canvas
      // translucent BG to show trail
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "#22c55e"; // Tailwind green-500
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = letters.charAt(Math.floor(Math.random() * letters.length));
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 50);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Matrix Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
      />

      <div className="relative z-10 w-full h-full p-8 flex flex-col pt-56 pb-8">
        <Link href="/" className="inline-flex items-center gap-2 text-foreground/50 hover:text-white transition-colors mb-8 w-fit glass px-4 py-2 rounded-full border border-white/10">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>

        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           className="max-w-4xl mx-auto w-full space-y-8"
        >
          <div className="flex items-center gap-4 border-b border-white/10 pb-6">
            <div className="p-3 bg-green-500/20 rounded-xl border border-green-500/30">
               <Activity className="w-8 h-8 text-green-400" />
            </div>
            <div>
              <h1 className="text-4xl font-bold font-mono tracking-tight text-green-400">X-POST SCRAPER LAB</h1>
              <p className="text-foreground/60 font-mono mt-1">Live data extraction telemetry visualization.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {/* Data Card */}
             <div className="glass p-6 rounded-2xl border border-green-500/20 bg-black/50 backdrop-blur-md">
               <div className="text-xs uppercase tracking-widest text-green-500/70 mb-2 font-mono">Total Nodes Active</div>
               <div className="text-5xl font-bold font-mono text-white">1,024</div>
               <div className="mt-4 text-xs font-mono text-green-400">Status: Fully Operational [Bypassing Rate Limits]</div>
             </div>

             {/* Data Card */}
             <div className="glass p-6 rounded-2xl border border-green-500/20 bg-black/50 backdrop-blur-md">
               <div className="text-xs uppercase tracking-widest text-green-500/70 mb-2 font-mono">Ingestion Rate</div>
               <div className="text-5xl font-bold font-mono text-white">45.2k<span className="text-2xl text-foreground/50">/s</span></div>
               <div className="mt-4 text-xs font-mono text-green-400">Target: @ai_orchestration</div>
             </div>
          </div>

          <div className="glass p-8 rounded-2xl border border-green-500/20 bg-black/50 backdrop-blur-md">
             <h3 className="text-xl font-bold font-mono text-white mb-4">Live Extraction Feed</h3>
             <div className="h-64 overflow-hidden relative">
               <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black to-transparent z-10 pointer-events-none" />
               <motion.div
                 animate={{ y: [0, -400] }}
                 transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                 className="space-y-4 font-mono text-xs text-green-400/80"
               >
                 {Array.from({ length: 20 }).map((_, i) => (
                   <div key={i} className="flex gap-4 border-b border-white/5 pb-2">
                     <span className="opacity-50">[{new Date().toISOString()}]</span>
                     <span className="text-white">Extracted payload:</span>
                     <span className="truncate flex-1 opacity-70">{"{"} "author": "agent_${Math.floor(Math.random() * 9999)}", "sentiment": ${(Math.random() > 0.5 ? 0.9 : 0.1).toFixed(2)} {"}"}</span>
                   </div>
                 ))}
               </motion.div>
             </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
