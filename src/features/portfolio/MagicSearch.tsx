"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sparkles, TerminalSquare } from "lucide-react";
import { useStreamingLog } from "@/hooks/useStreamingLog";

export function MagicSearch() {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [response, setResponse] = useState<string | null>(null);
  
  // Use the custom streaming log hook
  const displayedResponse = useStreamingLog(response || "", 30);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsSearching(true);
    setResponse(null);

    // Mock RAG retrieval latency
    setTimeout(() => {
      const q = query.toLowerCase();
      let res = "I couldn't find specific context for that in my memory vectors. Try asking about my 'degree', 'projects', or 'experience'.";

      if (q.includes("degree") || q.includes("education") || q.includes("college") || q.includes("university")) {
        res = "Locating context... [RAG Node]: Yugal holds a B.Tech in Computer Science and Engineering from Chitkara University, where he built a foundation in C++ and Data Structures.";
      } else if (q.includes("project") || q.includes("work") || q.includes("build")) {
        res = "Retrieving... [RAG Node]: Notable projects include a high-concurrency X-Post Scraper, a custom RAG Pipeline for document chat, and an autonomous MCP Server Engine.";
      } else if (q.includes("stack") || q.includes("skills") || q.includes("tech")) {
        res = "Scanning vectors... [RAG Node]: Core stack includes C++, Java, Next.js, and specialized AI Orchestration protocols like RAG and MCP.";
      }

      setResponse(res);
      setIsSearching(false);
    }, 1500);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-6 z-20 relative -mt-6 mb-12">
      <form onSubmit={handleSearch} className="relative group">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-2xl blur-xl transition-all duration-500 opacity-50 group-hover:opacity-100" />
        
        <motion.div 
          animate={{ boxShadow: ["0px 0px 10px rgba(168,85,247,0.1)", "0px 0px 30px rgba(168,85,247,0.5)", "0px 0px 10px rgba(168,85,247,0.1)"] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="relative glass rounded-2xl p-2 border border-white/10 flex items-center shadow-2xl bg-black/40 xl:bg-background"
        >
          <div className="p-3">
            <Search className="w-5 h-5 text-foreground/50 group-focus-within:text-primary transition-colors" />
          </div>
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Ask my RAG agent about my experience..."
            className="flex-grow bg-transparent border-none outline-none text-white placeholder-white/40 font-medium px-2"
          />
          <button
            type="submit"
            disabled={isSearching || !query.trim()}
            className="px-6 py-3 rounded-xl bg-white text-black font-bold text-sm tracking-wide hover:bg-white/90 transition-colors disabled:opacity-50 flex items-center gap-2"
          >
            {isSearching ? (
              <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
            ) : (
              <>
                 <Sparkles className="w-4 h-4" /> Ask
              </>
            )}
          </button>
        </motion.div>
      </form>

      <AnimatePresence>
        {(isSearching || response) && (
          <motion.div
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            className="mt-4 glass border border-primary/20 rounded-xl p-6 bg-black/60 backdrop-blur-md overflow-hidden"
          >
            <div className="flex items-start gap-3">
               <TerminalSquare className="w-5 h-5 text-primary shrink-0 mt-0.5" />
               <div className="font-mono text-sm leading-relaxed text-green-400">
                 {isSearching ? (
                   <span className="animate-pulse opacity-70">Vectorizing query and searching memory chunks...</span>
                 ) : (
                   <>
                     {displayedResponse}
                     {displayedResponse.length < response!.length && (
                       <span className="inline-block w-2 h-4 bg-green-400 ml-1 animate-pulse align-middle" />
                     )}
                   </>
                 )}
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
