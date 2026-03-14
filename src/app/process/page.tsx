"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, GraduationCap, Code2, Cpu } from "lucide-react";

export default function ProcessPage() {
  const timeline = [
    {
      year: "2022",
      title: "Chitkara University",
      subtitle: "B.Tech CSE Initiated",
      description: "Started the journey with core fundamentals: Data Structures, Algorithms, and C++/Java mastery. Built extreme low-level system understanding.",
      icon: <GraduationCap className="w-5 h-5 text-blue-400" />,
      color: "bg-blue-500/10 border-blue-500/30",
    },
    {
      year: "2024",
      title: "Full-Stack Development",
      subtitle: "Scaling Systems",
      description: "Transitioned to modern web architectures. Mastered Next.js, React, and Node.js to build scalable, high-performance user interfaces and robust backends.",
      icon: <Code2 className="w-5 h-5 text-purple-400" />,
      color: "bg-purple-500/10 border-purple-500/30",
    },
    {
      year: "2025 - Present",
      title: "AI Orchestration",
      subtitle: "The Antigravity Framework",
      description: "Specialized in Multi-Agent Systems, RAG Pipelines, and Model Context Protocol (MCP). Developing autonomous software swarms capable of reasoning and executing complex software engineering tasks 10x faster.",
      icon: <Cpu className="w-5 h-5 text-primary" />,
      color: "bg-primary/10 border-primary/30",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-y-auto w-full pt-56 pb-8">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 py-8 relative z-10 w-full h-full">
        <Link href="/" className="inline-flex items-center gap-2 text-foreground/50 hover:text-white transition-colors mb-16 w-fit glass px-4 py-2 rounded-full border border-white/10">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>

        <motion.div
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           className="mb-16"
        >
           <h1 className="text-5xl font-extrabold tracking-tight mb-4">The Initialization Process</h1>
           <p className="text-xl text-foreground/70 leading-relaxed max-w-2xl">
              Tracing the compile path from raw Compute Science fundamentals to autonomous AI architecture.
           </p>
        </motion.div>

        <div className="relative pl-8 md:pl-0">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2" />

          <div className="space-y-16">
            {timeline.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`flex flex-col md:flex-row items-start md:items-center justify-between w-full group ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Connecting Line & Node (Mobile Absolute, Desktop Flex) */}
                <div className="absolute left-8 md:static md:w-2/12 flex justify-center z-10 -translate-x-[15px] md:translate-x-0 mt-6 md:mt-0">
                  <div className={`w-8 h-8 rounded-full border-2 bg-background flex items-center justify-center transition-transform group-hover:scale-125 duration-300 ${card.color}`}>
                     <div className="w-2 h-2 rounded-full bg-current opacity-70" />
                  </div>
                </div>

                <div className={`w-full md:w-5/12 ml-8 md:ml-0 glass p-8 rounded-3xl border ${card.color} hover:-translate-y-2 transition-transform duration-300 relative`}>
                  <div className="flex items-center gap-4 mb-4">
                     <div className="p-3 bg-black/50 rounded-xl border border-white/10 backdrop-blur-md">
                        {card.icon}
                     </div>
                     <div>
                       <span className="text-primary font-bold tracking-tight text-sm font-mono">{card.year}</span>
                       <h3 className="text-2xl font-bold text-white leading-tight">{card.title}</h3>
                     </div>
                  </div>
                  <h4 className="text-foreground/80 font-medium mb-4 text-sm uppercase tracking-widest">{card.subtitle}</h4>
                  <p className="text-foreground/60 leading-relaxed text-sm">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
