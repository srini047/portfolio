"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code2, Mail } from "lucide-react";

export default function Home() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Software Engineer | ML Engineer | Data Science Enthusiast";
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText.length < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 50);
    } else if (isDeleting && displayText.length > 0) {
      timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length - 1));
      }, 30);
    } else if (!isDeleting && displayText.length === fullText.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText.length === 0) {
      timeout = setTimeout(() => setIsDeleting(false), 500);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, fullText]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <div className="max-w-4xl w-full space-y-8 md:space-y-12">
        {/* Header */}
        <div className="space-y-4 md:space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary">
            {"> _"}
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
            Sriniketh J.
          </h2>

          <div className="text-base md:text-xl lg:text-2xl text-muted-foreground font-mono min-h-7 md:min-h-8">
            <span>{displayText}</span>
            <span className="animate-pulse text-accent">_</span>
          </div>

          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0">
            Building intelligent systems and web experiences. Passionate about
            machine learning, networking, and open-source development.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 md:justify-start">
          <Link href="/projects" className="w-full sm:w-auto">
            <Button className="w-full font-mono bg-primary hover:bg-primary/90 text-foreground text-sm md:text-base">
              <Code2 className="w-4 h-4 mr-2" />
              {"$ view_projects()"}
            </Button>
          </Link>
          <Link href="/contact" className="w-full sm:w-auto">
            <Button
              variant="outline"
              className="w-full font-mono border-primary text-primary hover:bg-primary/10 hover:text-accent bg-transparent text-sm md:text-base"
            >
              <Mail className="w-4 h-4 mr-2" />
              {"$ contact_me()"}
            </Button>
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 pt-8 md:pt-12 border-t border-border">
          <div className="p-3 md:p-4 border border-border rounded-lg bg-card hover:border-primary transition-colors">
            <p className="text-primary font-mono text-xs md:text-sm">
              const projects
            </p>
            <p className="text-2xl md:text-3xl font-bold mt-2">10+</p>
            <p className="text-muted-foreground text-xs md:text-sm mt-1">
              Live projects
            </p>
          </div>
          <div className="p-3 md:p-4 border border-border rounded-lg bg-card hover:border-primary transition-colors">
            <p className="text-primary font-mono text-xs md:text-sm">
              const blogs
            </p>
            <p className="text-2xl md:text-3xl font-bold mt-2">25+</p>
            <p className="text-muted-foreground text-xs md:text-sm mt-1">
              Technical posts
            </p>
          </div>
          <div className="p-3 md:p-4 border border-border rounded-lg bg-card hover:border-primary transition-colors sm:col-span-2 lg:col-span-1">
            <p className="text-primary font-mono text-xs md:text-sm">
              const experience
            </p>
            <p className="text-2xl md:text-3xl font-bold mt-2">2+</p>
            <p className="text-muted-foreground text-xs md:text-sm mt-1">
              Years professional
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
