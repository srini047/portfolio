"use client";

import { useEffect } from "react";

type HotkeyHandler = (e: KeyboardEvent) => void;

export function useHotkeys(hotkey: string, handler: HotkeyHandler) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const isMac =
        typeof navigator !== "undefined" &&
        navigator.platform.toUpperCase().indexOf("MAC") >= 0;
      const meta = isMac ? e.metaKey : e.ctrlKey;

      if (hotkey === "cmd+k" && meta && e.key === "k") {
        e.preventDefault();
        handler(e);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [hotkey, handler]);
}
