"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Moon, Sun } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setIsDark(document.documentElement.classList.contains("dark"));
  }, []);

  const isActive = (path: string) => pathname === path;

  const toggleTheme = () => {
    const newState = !isDark;
    setIsDark(newState);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("theme", newState ? "dark" : "light");
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-mono font-bold text-lg text-accent hover:text-primary transition-colors"
          >
            {"# srinikethj"}
          </Link>

          <div className="flex items-center gap-8">
            <Link
              href="/"
              className={`font-mono text-sm transition-colors ${
                isActive("/")
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              home
            </Link>
            <Link
              href="/projects"
              className={`font-mono text-sm transition-colors ${
                isActive("/projects")
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              projects
            </Link>
            <Link
              href="/blogs"
              className={`font-mono text-sm transition-colors ${
                isActive("/blogs")
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              blogs
            </Link>
            <Link
              href="/about"
              className={`font-mono text-sm transition-colors ${
                isActive("/about")
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              about
            </Link>
            <Link
              href="/contact"
              className={`font-mono text-sm transition-colors ${
                isActive("/contact")
                  ? "text-accent"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              contact
            </Link>

            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded border border-border hover:border-accent transition-colors text-muted-foreground hover:text-accent"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
