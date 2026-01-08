"use client";
import { projectsData } from "@/lib/data";
import { GithubIcon } from "@/components/icons";
import { ExternalLink } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {"$ ls projects/"}
          </h1>
          <p className="text-lg text-muted-foreground font-mono">
            A collection of my personal and professional projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="border border-border rounded-lg p-6 bg-card hover:border-primary hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <h3 className="text-xl font-bold text-foreground mb-3 line-clamp-2">
                {project.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 flex-grow line-clamp-4">
                {project.text}
              </p>
              <div className="flex gap-3 pt-4 border-t border-border">
                <a
                  href={project.view}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity font-mono text-sm"
                >
                  <ExternalLink className="w-4 h-4" />
                  View
                </a>
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border border-primary text-primary rounded hover:bg-primary/10 transition-colors font-mono text-sm"
                >
                  <GithubIcon />
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
