"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Activity, Route, Terminal } from "lucide-react";
import { motion } from "framer-motion";

export function Navigation() {
  const pathname = usePathname();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const links = [
    { name: "Dashboard", href: "/", icon: <Home className="w-5 h-5" /> },
    { name: "Lab Telemetry", href: "/lab", icon: <Activity className="w-5 h-5" /> },
    { name: "Process", href: "/process", icon: <Route className="w-5 h-5" /> },
    { name: "Agent Logs", href: "/terminal", icon: <Terminal className="w-5 h-5" /> },
  ];

  if (!isMounted) return null;

  return (
    <div className="fixed top-8 left-1/2 -translate-x-1/2 z-[9999] glass rounded-full px-10 py-5 border border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.2)] backdrop-blur-xl bg-black/60 transition-all duration-300 flex items-center gap-10 lg:ml-40">
      {links.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            prefetch={true}
            className={`relative flex items-center gap-2 text-base font-semibold transition-colors ${
              isActive ? "text-primary" : "text-foreground/50 hover:text-white"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-x-0 -bottom-3 h-1 bg-primary rounded-t-lg"
              />
            )}
            {link.icon}
            <span className="hidden sm:inline">{link.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
