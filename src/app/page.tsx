"use client";

import { motion } from "framer-motion";

import { MagicSearch } from "@/features/portfolio/MagicSearch";
import { LabSection } from "@/features/portfolio/LabSection";
import { ModernStack } from "@/features/portfolio/ModernStack";
import { BioPulse } from "@/features/portfolio/BioPulse";
import { ProjectCardsWrapper } from "@/features/portfolio/ProjectCardsWrapper";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-hidden relative selection:bg-primary/30 pt-56 pb-8">
      {/* Background gradients for neon accents */}
      <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-primary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[40rem] h-[40rem] bg-secondary/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center p-6 space-y-12 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 max-w-4xl"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm font-medium tracking-wide text-primary shadow-lg shadow-primary/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            2026 Availability: Open for Orchestration
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight">
            Yugal Kaushal
          </h1>
          <p className="text-xl md:text-3xl text-foreground/80 font-light leading-relaxed max-w-2xl mx-auto">
            CSE Graduate specialized in <span className="text-primary font-medium">Multi-Agent Systems</span> & <span className="text-secondary font-medium">AI Orchestration</span>. Building software 10x faster.
          </p>
        </motion.div>

        {/* Floating Glassmorphic Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 100 }}
          whileHover={{ y: -5, scale: 1.02 }}
          className="glass rounded-3xl p-8 max-w-md w-full relative overflow-hidden group cursor-pointer border border-white/10 shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          <div className="relative z-10 space-y-6 flex flex-col items-center">
            <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center border border-white/5 ring-1 ring-primary/20 group-hover:ring-primary/50 transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-primary group-hover:scale-110 transition-transform duration-300">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
            </div>
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              AI Orchestrator
            </h2>
            <p className="text-foreground/70 text-base leading-relaxed text-center">
              Architecting state-of-the-art MCP servers, RAG pipelines, and autonomous agents for the 2026 tech frontier.
            </p>
          </div>
        </motion.div>
      </section>

      {/* RAG Magic Search Section */}
      <MagicSearch />

      {/* Projects Section */}
      <ProjectCardsWrapper />

      {/* The Antigravity Lab Section */}
      <LabSection />

      {/* Bio Pulse Connecting Node */}
      <BioPulse />

      {/* Modern Stack Section */}
      <ModernStack />

    </main>
  );
}
