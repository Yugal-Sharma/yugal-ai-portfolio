"use client";

import { motion } from "framer-motion";
import { Terminal, Database } from "lucide-react";

export default function TerminalPage() {
  const agentLogs = Array.from({ length: 30 }).map((_, i) => ({
    timestamp: new Date(Date.now() - (30 - i) * 60000).toISOString(),
    event: `Agent_Node_${Math.floor(Math.random() * 999)}`,
    status: Math.random() > 0.1 ? "SUCCESS" : "WARN",
    message: Math.random() > 0.5 ? "Resolved symbolic link in multi-agent routing." : "Awaiting user input parameters for tool execution."
  }));

  return (
    <div className="min-h-screen bg-black text-white p-8 md:p-16 lg:pl-32 xl:pl-48 pt-56 pb-8 flex flex-col">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto w-full flex-1 flex flex-col"
      >
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-12 border-b border-white/10 pb-8 gap-6 flex-shrink-0 mt-24">
          <div className="flex items-center gap-4">
             <div className="p-4 bg-primary/20 rounded-xl border border-primary/30">
               <Terminal className="w-8 h-8 text-primary" />
             </div>
             <div>
               <h1 className="text-4xl font-extrabold tracking-tight mb-1">Agent Telemetry</h1>
               <p className="text-foreground/60 font-mono text-sm">Multi-Agent system live execution logs.</p>
             </div>
          </div>
          
          <div className="flex gap-4">
            <div className="glass px-4 py-2 rounded-lg border border-green-500/20 flex flex-col items-center justify-center bg-green-500/5 min-w-[120px]">
              <span className="text-xs text-foreground/50 uppercase tracking-wider mb-1">Active Nodes</span>
              <span className="text-2xl font-bold font-mono text-green-400">42</span>
            </div>
            <div className="glass px-4 py-2 rounded-lg border border-primary/20 flex flex-col items-center justify-center bg-primary/5 min-w-[120px]">
              <span className="text-xs text-foreground/50 uppercase tracking-wider mb-1">Uptime</span>
              <span className="text-2xl font-bold font-mono text-primary">99.9%</span>
            </div>
          </div>
        </div>

        <div className="glass rounded-2xl border border-white/10 overflow-hidden bg-black/50 backdrop-blur-xl flex flex-col flex-1 min-h-[500px]">
          <div className="bg-white/5 border-b border-white/10 px-6 py-4 flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-foreground/50 flex-shrink-0">
             <div className="w-1/4">Timestamp</div>
             <div className="w-1/4">Origin Node</div>
             <div className="w-1/12">Status</div>
             <div className="flex-1">Task Details</div>
          </div>
          
          <div className="h-[60vh] overflow-y-auto scrollbar-hide flex-1">
             {agentLogs.reverse().map((log, i) => (
               <motion.div
                 key={i}
                 initial={{ opacity: 0, x: -10 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: i * 0.05 }}
                 className="flex flex-col sm:flex-row items-start sm:items-center gap-4 px-6 py-4 border-b border-white/5 text-sm font-mono hover:bg-white/5 transition-colors"
               >
                 <div className="w-full sm:w-1/4 text-foreground/50 text-xs">[{log.timestamp}]</div>
                 <div className="w-full sm:w-1/4 text-primary/80 flex items-center gap-2">
                    <Database className="w-3 h-3" /> {log.event}
                 </div>
                 <div className={`w-full sm:w-1/12 font-bold ${log.status === 'SUCCESS' ? 'text-green-500' : 'text-yellow-500'}`}>
                    {log.status}
                 </div>
                 <div className="flex-1 text-white/80">{log.message}</div>
               </motion.div>
             ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
