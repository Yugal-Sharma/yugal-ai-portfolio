"use client";

import { useEffect, useRef, useState } from "react";

export function useStreamingLog(text: string, speedMs: number = 30) {
  const [displayedText, setDisplayedText] = useState("");
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setDisplayedText("");
    
    if (!text) return;

    let i = 0;
    intervalRef.current = setInterval(() => {
      setDisplayedText(text.slice(0, i + 1));
      i++;
      if (i >= text.length && intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }, speedMs);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [text, speedMs]);

  return displayedText;
}
