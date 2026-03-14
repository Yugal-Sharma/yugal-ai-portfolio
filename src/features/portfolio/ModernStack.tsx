"use client";

import { motion, Variants } from "framer-motion";
import { Code2, Coffee, Database, Network } from "lucide-react";

export function ModernStack() {
  const stack = [
    { name: "C++", icon: <Code2 className="w-8 h-8 text-blue-500" />, level: "Expert" },
    { name: "Java", icon: <Coffee className="w-8 h-8 text-orange-500" />, level: "Expert" },
    { name: "RAG AI", icon: <Database className="w-8 h-8 text-emerald-400" />, level: "Specialist" },
    { name: "MCP Data", icon: <Network className="w-8 h-8 text-purple-500" />, level: "Specialist" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 150 } },
  };

  return (
    <section className="relative w-full max-w-7xl mx-auto px-6 py-24 z-10 text-center">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60">
          The Modern Stack
        </h2>
        <p className="mt-4 text-foreground/60 max-w-2xl mx-auto">
          Combining deep computer science foundations with edge-of-the-art orchestration protocols.
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-wrap justify-center gap-6"
      >
        {stack.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.05 }}
            className="glass rounded-2xl p-8 w-48 flex flex-col items-center justify-center gap-4 border border-white/5 shadow-2xl group cursor-pointer relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10 w-16 h-16 rounded-full bg-background border border-white/10 flex items-center justify-center group-hover:ring-2 ring-primary/30 transition-all">
               {item.icon}
            </div>
            
            <div className="relative z-10 space-y-1">
              <h3 className="font-bold text-lg text-white group-hover:text-primary transition-colors">{item.name}</h3>
              <p className="text-xs text-foreground/50 uppercase tracking-wider font-semibold">{item.level}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
