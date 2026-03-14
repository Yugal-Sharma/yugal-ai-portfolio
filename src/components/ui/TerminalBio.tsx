"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Terminal } from "lucide-react";
import { useStreamingLog } from "@/hooks/useStreamingLog";

const initialLogs = [
  "Initializing Antigravity Engine v2.0...",
  "[OK] Kernel loaded.",
  "Est. Connection to MCP Client...",
  "[SUCCESS] Connected on port 4040",
  "Retrieving RAG Knowledge Base...",
  "[READY] 1,024 vectors indexed.",
  "Awaiting orchestration commands...",
  "// Human Operator Detected.",
  "// Initializing Bio-Sync...",
  "Name: Yugal Kaushal",
  "Role: Full-Stack Engineer & AI Architect",
  "Status: Online",
  "// Type 'help' to view available protocols."
];

export function TerminalBio() {
  const pathname = usePathname();
  const [logs, setLogs] = useState<string[]>(initialLogs);
  const [displayedLogs, setDisplayedLogs] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Context-Aware Terminal Hook
  const prevPathRef = useRef(pathname);
  useEffect(() => {
    if (prevPathRef.current !== pathname) {
       let contextualLog = `[SYS]: Route reassignment -> ${pathname}`;
       if (pathname === '/lab') contextualLog = "[LOG]: Visitor exploring Lab... Booting telemetry visuals.";
       else if (pathname === '/terminal') contextualLog = "[LOG]: Terminal access granted... Streaming MCP events.";
       else if (pathname === '/process') contextualLog = "[LOG]: Timeline requested... Loading Chitkara CSE memory vectors.";
       else if (pathname === '/') contextualLog = "[LOG]: Visitor returned to Main Hub.";

       // Intrude upon the current streaming queue
       setLogs((prev) => [...prev, contextualLog]);
       prevPathRef.current = pathname;
    }
  }, [pathname]);

  // We are streaming one log at a time. useStreamingLog handles strings, so we map the current string
  const currentTextToStream = currentIndex < logs.length ? logs[currentIndex] : "";
  const streamedLine = useStreamingLog(currentTextToStream, 20);

  useEffect(() => {
    // When the streamed line finishes typing the entire log string, push it to displayedLogs and move to next
    if (currentIndex < logs.length && streamedLine === logs[currentIndex]) {
       // Small delay before pushing the next line
       const timer = setTimeout(() => {
         setDisplayedLogs((prev) => [...prev, logs[currentIndex]]);
         setCurrentIndex((prev) => prev + 1);
       }, 200);
       return () => clearTimeout(timer);
    }

    if (currentIndex >= logs.length) {
       // Loop the terminal after a delay
       const loopTimer = setTimeout(() => {
         setDisplayedLogs([]);
         setCurrentIndex(0);
       }, 10000);
       return () => clearTimeout(loopTimer);
    }
  }, [streamedLine, currentIndex]);

  return (
    <div className="hidden lg:flex flex-col w-80 h-full border-r border-white/10 bg-black/40 glass relative overflow-hidden shrink-0">
      {/* Sidebar Header */}
      <div className="p-6 border-b border-white/10 flex items-center gap-3">
        <div className="p-2 rounded-lg bg-primary/20 border border-primary/30">
          <Terminal className="w-5 h-5 text-primary" />
        </div>
        <div>
          <h2 className="font-bold text-white tracking-wide">antigravity.exe</h2>
          <p className="text-xs text-primary font-mono select-none">v2.0.26 / connected</p>
        </div>
      </div>

      {/* Terminal View */}
      <div className="p-6 pb-24 flex-grow overflow-y-auto font-mono text-sm leading-relaxed scrollbar-hide">
        {displayedLogs.map((log, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={`mb-2 ${
              log.includes("[OK]") || log.includes("[SUCCESS]") || log.includes("[READY]")
                ? "text-green-400"
                : log.includes("// Human")
                ? "text-blue-400"
                : log.includes("Error")
                ? "text-red-400"
                : "text-foreground/70"
            }`}
          >
            <span className="opacity-50 select-none mr-2">{"❯"}</span>
            {log}
          </motion.div>
        ))}
        {/* Currently Streaming Line */}
        {currentIndex < logs.length && streamedLine && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className={`mb-2 ${
              streamedLine.includes("[OK]") || streamedLine.includes("[SUCCESS]") || streamedLine.includes("[READY]")
                ? "text-green-400"
                : streamedLine.includes("// Human")
                ? "text-blue-400"
                : streamedLine.includes("Error")
                ? "text-red-400"
                : "text-foreground/70"
            }`}
          >
            <span className="opacity-50 select-none mr-2">{"❯"}</span>
            {streamedLine}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ repeat: Infinity, duration: 0.8, repeatType: "reverse" }}
              className="w-2.5 h-4 bg-primary inline-block ml-4 align-middle"
            />
          </motion.div>
        )}

        {/* Blinking Cursor waiting for next loop */}
        {currentIndex >= logs.length && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ repeat: Infinity, duration: 0.8, repeatType: "reverse" }}
            className="w-2.5 h-4 bg-primary inline-block ml-4 align-middle mt-2"
          />
        )}
      </div>

      {/* Sidebar Footer */}
      <div className="p-6 border-t border-white/10 bg-white/5">
        <div className="flex gap-2 text-xs font-mono text-foreground/50">
          <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span> ONLINE</span>
          <span className="ml-auto">MEM: 32MB</span>
        </div>
      </div>
    </div>
  );
}
