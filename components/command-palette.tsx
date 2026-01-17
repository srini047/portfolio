"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { useHotkeys } from "@/hooks/use-hotkeys"
import { useRouter } from "next/navigation"
import { Command, Home, BookOpen, User, Mail, Moon } from "lucide-react"

interface CommandItem {
  id: string
  title: string
  description: string
  action?: () => void
  href?: string
  category: string
  icon?: React.ReactNode
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
      document.documentElement.classList.toggle("dark")
      localStorage.setItem("theme", document.documentElement.classList.contains("dark") ? "dark" : "light")
    },
  },
]

export function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState("")
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)
  const router = useRouter()

  useHotkeys("cmd+k", (e) => {
    e.preventDefault()
    setIsOpen(true)
  })

  const filtered = COMMANDS.filter(
    (cmd) =>
      cmd.title.toLowerCase().includes(query.toLowerCase()) ||
      cmd.description.toLowerCase().includes(query.toLowerCase()),
  )

  const handleSelect = (cmd: CommandItem) => {
    if (cmd.href) {
      router.push(cmd.href)
    } else if (cmd.action) {
      cmd.action()
    }
    setIsOpen(false)
    setQuery("")
    setSelectedIndex(0)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setIsOpen(false)
      setQuery("")
      setSelectedIndex(0)
    } else if (e.key === "ArrowDown") {
      e.preventDefault()
      setSelectedIndex((prev) => (prev + 1) % filtered.length)
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setSelectedIndex((prev) => (prev - 1 + filtered.length) % filtered.length)
    } else if (e.key === "Enter" && filtered.length > 0) {
      e.preventDefault()
      handleSelect(filtered[selectedIndex])
    }
  }

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus()
    }
  }, [isOpen])

  return (
    <>
      {isOpen && <div className="command-palette-backdrop" onClick={() => setIsOpen(false)} />}

      {isOpen && (
        <div className="command-palette">
          <div className="w-full max-w-2xl bg-card border border-border rounded-lg shadow-xl overflow-hidden">
            <div className="p-4 border-b border-border bg-background">
              <div className="flex items-center gap-2 font-mono text-sm">
                <span className="text-primary">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="search commands..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent border-0 text-foreground placeholder:text-muted-foreground focus:outline-none"
                />
              </div>
              <p className="text-xs text-muted-foreground mt-2 font-mono">↑↓ navigate • Enter select • ESC close</p>
            </div>

            <div className="max-h-96 overflow-y-auto">
              {filtered.length > 0 ? (
                filtered.map((cmd, index) => (
                  <button
                    key={cmd.id}
                    onClick={() => handleSelect(cmd)}
                    className={`w-full px-4 py-3 text-left border-b border-border transition-colors ${index === selectedIndex ? "bg-primary/20" : "hover:bg-primary/10"
                      }`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-3 flex-1">
                        {cmd.icon && <span className="text-primary">{cmd.icon}</span>}
                        <div>
                          <p className="font-mono text-sm font-semibold text-foreground">{cmd.title}</p>
                          <p className="text-xs text-muted-foreground">{cmd.description}</p>
                        </div>
                      </div>
                      <span className="text-xs text-muted-foreground bg-border rounded px-2 py-1 font-mono">
                        {cmd.category}
                      </span>
                    </div>
                  </button>
                ))
              ) : (
                <div className="p-4 text-center text-sm text-muted-foreground font-mono">
                  No commands found for "{query}"
                </div>
              )}
            </div>

            {/* Footer hint */}
            <div className="p-3 border-t border-border text-xs text-muted-foreground font-mono bg-background/50">
              {filtered.length} results • Press Enter to select
            </div>
          </div>
        </div>
      )}
    </>
  )
}
