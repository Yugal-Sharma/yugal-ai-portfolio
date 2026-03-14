"use client";

import { motion, Variants } from "framer-motion";
import { Terminal, FileText, Share2, ArrowRight } from "lucide-react";
import { BentoCard } from "@/features/portfolio/BentoGrid";

export function ProjectCards() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-24 z-10">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-secondary inline-block">
          2025 AI Projects
        </h2>
        <p className="mt-4 text-foreground/70 max-w-2xl mx-auto text-lg">
          Orchestrating intelligent systems that automate complex workflows and reason over vast datasets.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[400px]"
      >
        {/* Project 1: X-Post Scraper (Spans 2 columns on large screens) */}
        <BentoCard delay={0.1} className="lg:col-span-2 group">
          <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="p-6 h-48 bg-black/50 border-b border-white/10 font-mono text-sm relative overflow-hidden flex flex-col justify-end">
            <div className="flex items-center gap-2 mb-auto pb-4 border-b border-white/10 w-full text-foreground/50">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <div className="w-3 h-3 rounded-full bg-green-400"></div>
              </div>
              <span className="text-xs">scraper-agent.sh</span>
            </div>
            
            <motion.div 
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.5, staggerChildren: 0.3 }}
               className="space-y-2 text-green-400/90 mt-4"
            >
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>$ Connecting to proxy pool...</motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0 }}>$ Target: @ai_updates (Limit: 500)</motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}>$ [OK] 500 posts extracted. Parsing context...</motion.div>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2.0, repeat: Infinity, repeatType: "reverse", duration: 1 }} className="w-2 h-4 bg-green-400 mt-1"></motion.div>
            </motion.div>
          </div>

          <div className="p-8 flex flex-col flex-grow relative z-10">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 rounded-xl bg-primary/20 flex items-center justify-center border border-primary/30">
                <Terminal className="text-primary w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">X-Post Scraper AI</h3>
            </div>
            <p className="text-foreground/70 mb-8 flex-grow">
              A high-concurrency scraping agent designed to bypass rate limits and extract structured data for sentiment timeline analysis.
            </p>
            <button className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors group/btn w-fit">
              View Agent Workflow
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </BentoCard>

        {/* Project 2: RAG Agent (Spans 1 column vertically) */}
        <BentoCard delay={0.3} className="group">
          <div className="absolute inset-0 bg-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="p-6 h-48 bg-secondary/5 border-b border-white/10 relative overflow-hidden flex items-center justify-center">
             <div className="relative w-full max-w-[200px] h-24 border-2 border-dashed border-secondary/30 rounded-xl flex items-center justify-center bg-secondary/5">
                <motion.div 
                  initial={{ y: 0, opacity: 0 }}
                  animate={{ y: [20, 0, 20], opacity: [0, 1, 0] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <FileText className="w-8 h-8 text-secondary/50" />
                </motion.div>
                <div className="text-secondary/50 text-xs font-semibold uppercase tracking-widest mt-12">Vectorizing</div>
                
                {/* Scanning line */}
                <motion.div 
                  initial={{ top: 0 }}
                  animate={{ top: "100%" }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                  className="absolute left-0 right-0 h-0.5 bg-secondary/50 shadow-[0_0_10px_2px_rgba(59,130,246,0.5)] z-10"
                />
             </div>
          </div>

          <div className="p-8 flex flex-col flex-grow relative z-10">
            <div className="flex items-center gap-4 mb-4">
               <div className="h-10 w-10 rounded-xl bg-secondary/20 flex items-center justify-center border border-secondary/30 shrink-0">
                 <FileText className="text-secondary w-5 h-5" />
               </div>
               <h3 className="text-xl font-bold">RAG Pipeline</h3>
            </div>
            <p className="text-foreground/70 text-sm flex-grow">
              Document-aware AI chatting using custom vector embeddings and similarity search for highly accurate, context-bound responses.
            </p>
            <button className="flex items-center mt-4 gap-2 text-xs font-semibold text-secondary hover:text-white transition-colors group/btn">
              View Agent Workflow
              <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </BentoCard>

        {/* Project 3: MCP Server (Spans 3 columns below, wide bento box) */}
        <BentoCard delay={0.5} className="md:col-span-2 lg:col-span-3 flex-row h-auto min-h-[250px] group">
          <div className="absolute inset-0 bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="w-1/3 min-w-[300px] hidden md:flex bg-purple-500/5 border-r border-white/10 relative overflow-hidden items-center justify-center">
             <div className="relative w-full h-full flex items-center justify-center scale-90">
               <motion.div 
                 animate={{ rotate: 360 }}
                 transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
                 className="relative w-32 h-32"
               >
                 {/* Central Node */}
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-purple-500/20 border border-purple-500/50 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.4)] z-20">
                   <div className="w-4 h-4 rounded-full bg-purple-400"></div>
                 </div>
                 
                 {/* Satellite Nodes */}
                 {[0, 1, 2].map((i) => (
                   <div key={i} className="absolute inset-0" style={{ transform: `rotate(${i * 120}deg)` }}>
                     {/* Connecting Line */}
                     <motion.div 
                        initial={{ opacity: 0.2 }}
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ repeat: Infinity, duration: 2, delay: i * 0.6 }}
                        className="absolute top-1/2 left-1/2 w-16 h-0.5 bg-gradient-to-r from-purple-500/50 to-transparent origin-left" 
                     />
                     {/* Node */}
                     <motion.div 
                        initial={{ scale: 0.8 }}
                        animate={{ scale: [0.8, 1.2, 0.8] }}
                        transition={{ repeat: Infinity, duration: 2, delay: i * 0.6 }}
                        className="absolute top-1/2 left-[calc(50%+4rem)] -translate-y-1/2 w-4 h-4 rounded-full bg-white/20 border border-white/50" 
                     />
                   </div>
                 ))}
               </motion.div>
             </div>
          </div>

          <div className="p-8 flex flex-col justify-center flex-grow relative z-10 w-full md:w-2/3">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-12 w-12 rounded-xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                <Share2 className="text-purple-400 w-6 h-6" />
              </div>
              <h3 className="text-2xl font-bold">MCP Server Engine</h3>
            </div>
            <p className="text-foreground/70 mb-6 max-w-xl">
              Custom Model Context Protocol implementation allowing autonomous LLMs to execute local machine tasks securely. It orchestrates parallel workflows, reads file streams, and modifies logic 10x faster than a human operator could ever execute.
            </p>
            <button className="flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-white transition-colors group/btn w-fit">
              Explore Protocol Architecture
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </BentoCard>
      </motion.div>
    </section>
  );
}
