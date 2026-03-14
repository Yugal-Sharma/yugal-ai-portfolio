"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { AlertTriangle, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-red-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="glass rounded-3xl p-12 max-w-lg w-full relative z-10 border border-red-500/20 shadow-2xl text-center"
      >
        <div className="flex justify-center mb-6">
          <div className="p-4 bg-red-500/10 rounded-full border border-red-500/30">
            <AlertTriangle className="w-12 h-12 text-red-400" />
          </div>
        </div>
        
        <h1 className="text-6xl font-extrabold tracking-tight text-white mb-2 font-mono">404</h1>
        <h2 className="text-2xl font-bold text-red-400 mb-6">Sector Not Found</h2>
        
        <p className="text-foreground/70 mb-8 leading-relaxed font-mono text-sm">
           The agent orchestration node you are looking for does not exist in this spatial coordinate. It may have been re-routed or terminated.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 w-full px-6 py-4 rounded-xl bg-white text-black font-bold tracking-wide hover:bg-white/90 transition-colors"
        >
          <Home className="w-5 h-5" /> Return to Dashboard
        </Link>
      </motion.div>
    </div>
  );
}
