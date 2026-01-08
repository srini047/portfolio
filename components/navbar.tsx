"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  const navLinks = [
    { href: "/", label: "home" },
    { href: "/projects", label: "projects" },
    { href: "/blogs", label: "blogs" },
    { href: "/about", label: "about" },
    { href: "/contact", label: "contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="font-mono font-bold text-base md:text-lg text-accent hover:text-primary transition-colors"
          >
            {"> sriniketh.j"}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 md:gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-mono text-xs md:text-sm transition-colors ${
                  isActive(link.href)
                    ? "text-accent"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}

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

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            {mounted && (
              <button
                onClick={toggleTheme}
                className="p-2 rounded border border-border hover:border-accent transition-colors text-muted-foreground hover:text-accent"
                aria-label="Toggle theme"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            )}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded border border-border hover:border-accent transition-colors text-muted-foreground hover:text-accent"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block font-mono text-sm px-4 py-2 rounded transition-colors ${
                  isActive(link.href)
                    ? "bg-primary/10 text-accent border border-primary"
                    : "text-muted-foreground hover:text-foreground hover:bg-card"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
