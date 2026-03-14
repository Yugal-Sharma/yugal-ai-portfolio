"use client";

import { motion } from "framer-motion";
import { Cpu, GitMerge, Zap } from "lucide-react";

export function LabSection() {
  const steps = [
    {
      title: "Context Injection",
      description: "Agents are primed with my CSE domain knowledge and active codebase state via Model Context Protocol.",
      icon: <Cpu className="w-5 h-5 text-secondary" />,
      color: "from-secondary/20 to-transparent",
      borderColor: "border-secondary/30",
    },
    {
      title: "Parallel Execution",
      description: "Autonomous reasoning nodes split complex features into modular, concurrent tasks (RAG, Scraping, etc.).",
      icon: <GitMerge className="w-5 h-5 text-primary" />,
      color: "from-primary/20 to-transparent",
      borderColor: "border-primary/30",
    },
    {
      title: "Rapid Synthesis",
      description: "Seamlessly merging verified artifacts into a cohesive, high-performance product 10x faster.",
      icon: <Zap className="w-5 h-5 text-yellow-500" />,
      color: "from-yellow-500/20 to-transparent",
      borderColor: "border-yellow-500/30",
    },
  ];

  return (
    <section className="relative w-full border-t border-white/5 bg-black/20 py-24 z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          
          {/* Left Side: Content */}
          <div className="w-full md:w-1/2 space-y-6">
            <motion.div
              initial={{ opacity: 0, inlineSize: "0%" }}
              whileInView={{ opacity: 1, inlineSize: "100%" }}
              viewport={{ once: true }}
              className="inline-block px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-2"
            >
              Google Antigravity Lab
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-bold">
              Multi-Agent <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary to-primary">
                Development Workflow
              </span>
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed">
              I don&apos;t just write code. I design autonomous swarms that write, test, and deploy architectures. Welcome to the lab where <strong>human creativity</strong> meets <strong>machine execution</strong>.
            </p>
          </div>

          {/* Right Side: Timeline */}
          <div className="w-full md:w-1/2 relative">
            {/* Timeline Line */}
            <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-gradient-to-b from-secondary via-primary to-yellow-500 opacity-20 hidden md:block" />

            <div className="space-y-8 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2, type: "spring", stiffness: 100 }}
                  viewport={{ once: true, margin: "-50px" }}
                  className="flex gap-6 group"
                >
                  {/* Timeline Node */}
                  <div className={`relative shrink-0 w-12 h-12 rounded-xl border flex items-center justify-center bg-background/50 glass z-10 transition-transform duration-300 group-hover:scale-110 ${step.borderColor}`}>
                    <div className={`absolute inset-0 rounded-xl bg-gradient-to-br opacity-50 ${step.color}`} />
                    <div className="relative z-10">
                       {step.icon}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 glass rounded-2xl p-6 border transition-all duration-300 group-hover:-translate-y-1 ${step.borderColor}`}>
                    <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                    <p className="text-foreground/60 leading-relaxed text-sm">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
