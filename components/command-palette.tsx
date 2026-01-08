"use client";

import type React from "react";

import { useState, useRef, useEffect } from "react";
import { useHotkeys } from "@/hooks/use-hotkeys";
import { useRouter } from "next/navigation";
import { Command, Home, BookOpen, User, Mail, Moon } from "lucide-react";

interface CommandItem {
  id: string;
  title: string;
  description: string;
  action?: () => void;
  href?: string;
  category: string;
  icon?: React.ReactNode;
}

const COMMANDS: CommandItem[] = [
  {
    id: "home",
    title: "Go to Home",
    description: "Navigate to the home page",
    href: "/",
    category: "Navigation",
    icon: <Home size={16} />,
  },
  {
    id: "projects",
    title: "View Projects",
    description: "See all projects and portfolio work",
    href: "/projects",
    category: "Navigation",
    icon: <Command size={16} />,
  },
  {
    id: "blogs",
    title: "Read Blogs",
    description: "Explore technical blog posts",
    href: "/blogs",
    category: "Navigation",
    icon: <BookOpen size={16} />,
  },
  {
    id: "about",
    title: "About Me",
    description: "Learn more about my background",
    href: "/about",
    category: "Navigation",
    icon: <User size={16} />,
  },
  {
    id: "contact",
    title: "Get In Touch",
    description: "Send me a message",
    href: "/contact",
    category: "Navigation",
    icon: <Mail size={16} />,
  },
  {
    id: "theme",
    title: "Toggle Dark Mode",
    description: "Switch between light and dark theme",
    category: "Settings",
    icon: <Moon size={16} />,
    action: () => {
      document.documentElement.classList.toggle("dark");
      localStorage.setItem(
        "theme",
        document.documentElement.classList.contains("dark") ? "dark" : "light"
      );
    },
  },
];

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useHotkeys("cmd+k", (e) => {
    e.preventDefault();
    setIsOpen(true);
  });

  const filtered = COMMANDS.filter(
    (cmd) =>
      cmd.title.toLowerCase().includes(query.toLowerCase()) ||
      cmd.description.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (cmd: CommandItem) => {
    if (cmd.href) {
      router.push(cmd.href);
    } else if (cmd.action) {
      cmd.action();
    }
    setIsOpen(false);
    setQuery("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false);
      setQuery("");
    }
  };

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div
          className="command-palette-backdrop"
          onClick={() => setIsOpen(false)}
        />
      )}

      {isOpen && (
        <div className="command-palette">
          <div className="w-full max-w-md bg-card border border-border rounded-lg shadow-lg">
            {/* Search Input */}
            <div className="p-4 border-b border-border">
              <input
                ref={inputRef}
                type="text"
                placeholder="$ search commands..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full bg-input border border-border rounded px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <p className="text-xs text-muted-foreground mt-2">
                Press ESC to close
              </p>
            </div>

            {/* Results */}
            <div className="max-h-64 overflow-y-auto">
              {filtered.length > 0 ? (
                filtered.map((cmd, index) => (
                  <button
                    key={cmd.id}
                    onClick={() => handleSelect(cmd)}
                    className={`w-full px-4 py-3 text-left border-b border-border hover:bg-primary/10 transition-colors ${
                      index === 0 ? "bg-primary/5" : ""
                    }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 flex-1">
                        {cmd.icon && (
                          <span className="text-primary">{cmd.icon}</span>
                        )}
                        <div>
                          <p className="font-mono text-sm font-semibold text-foreground">
                            {cmd.title}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {cmd.description}
                          </p>
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground bg-border rounded px-2 py-1">
                        {cmd.category}
                      </span>
                    </div>
                  </button>
                ))
              ) : (
                <div className="p-4 text-center text-sm text-muted-foreground">
                  No commands found
                </div>
              )}
            </div>

            {/* Footer Hint */}
            <div className="p-3 border-t border-border text-xs text-muted-foreground text-center font-mono">
              $ {query || "use ↑↓ to navigate"} — Enter to select
            </div>
          </div>
        </div>
      )}
    </>
  );
}
