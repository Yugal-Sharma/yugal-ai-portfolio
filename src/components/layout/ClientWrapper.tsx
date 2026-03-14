"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";

const SpatialContainer = dynamic(
  () => import("@/components/layout/SpatialContainer").then((mod) => mod.SpatialContainer),
  { ssr: false }
);

const TerminalBio = dynamic(
  () => import("@/components/ui/TerminalBio").then((mod) => mod.TerminalBio),
  { ssr: false }
);

const AgentTooltipDynamic = dynamic(
  () => import("@/components/ui/AgentTooltip").then((mod) => mod.AgentTooltip),
  { ssr: false }
);

export function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);
  const pathname = usePathname();

  // Prevent hydration "addEventListener" null errors by ensuring the browser paints first
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <>
      <TerminalBio />
      <AgentTooltipDynamic />
      <div className="flex-grow overflow-y-auto w-full relative h-full">
        <SpatialContainer>
           <AnimatePresence mode="wait" initial={false}>
             <motion.div
               key={pathname}
               initial={{ opacity: 0, filter: "blur(10px)" }}
               animate={{ opacity: 1, filter: "blur(0px)" }}
               exit={{ opacity: 0, filter: "blur(10px)" }}
               transition={{ duration: 0.4 }}
               className="w-full h-full"
             >
               {children}
             </motion.div>
           </AnimatePresence>
        </SpatialContainer>
      </div>
    </>
  );
}
