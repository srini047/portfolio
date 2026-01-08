"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Code2, Mail } from "lucide-react";

export default function Home() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Software Engineer | ML Engineer";
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
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="max-w-4xl space-y-12">
        {/* Header */}
        <div className="space-y-6 text-center md:text-left">
          <h1 className="text-5xl md:text-7xl font-bold text-primary">
            {"> root@_"}
          </h1>
          <h2 className="text-4xl md:text-5xl font-bold">Sriniketh J.</h2>

          <div className="text-xl md:text-2xl text-muted-foreground font-mono min-h-8">
            <span>{displayText}</span>
            <span className="animate-pulse text-accent">_</span>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl">
            Building systems and web experiences. Passionate about machine
            learning and open-source development.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 md:justify-start">
          <Link href="/projects">
            <Button className="w-full md:w-auto font-mono bg-primary hover:bg-primary/90 text-foreground">
              <Code2 className="w-4 h-4 mr-2" />
              {"$ view_projects()"}
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              variant="outline"
              className="w-full md:w-auto font-mono border-primary text-primary hover:bg-primary/10 hover:text-accent bg-transparent"
            >
              <Mail className="w-4 h-4 mr-2" />
              {"$ contact_me()"}
            </Button>
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-12 border-t border-border">
          <div className="p-4 border border-border rounded-lg bg-card hover:border-primary transition-colors">
            <p className="text-primary font-mono text-sm">const projects</p>
            <p className="text-3xl font-bold mt-2">10+</p>
            <p className="text-muted-foreground text-sm mt-1">Projects</p>
          </div>
          <div className="p-4 border border-border rounded-lg bg-card hover:border-primary transition-colors">
            <p className="text-primary font-mono text-sm">const blogs</p>
            <p className="text-3xl font-bold mt-2">25+</p>
            <p className="text-muted-foreground text-sm mt-1">
              Technical blog posts
            </p>
          </div>
          <div className="p-4 border border-border rounded-lg bg-card hover:border-primary transition-colors">
            <p className="text-primary font-mono text-sm">const experience</p>
            <p className="text-3xl font-bold mt-2">2+</p>
            <p className="text-muted-foreground text-sm mt-1">
              Years professional
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
