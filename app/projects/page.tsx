"use client";
import { projectsData } from "@/lib/data";
import { GithubIcon } from "@/components/icons";
import { ExternalLink } from "lucide-react";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 md:mb-4">
            {"$ ls projects/"}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground font-mono">
            A collection of my personal and professional projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="border border-border rounded-lg p-4 md:p-6 bg-card hover:border-primary hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3 line-clamp-2">
                {project.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4 flex-grow line-clamp-4">
                {project.text}
              </p>
              <div className="flex gap-2 md:gap-3 pt-4 border-t border-border">
                <a
                  href={project.view}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-2 md:px-3 py-2 bg-primary text-primary-foreground rounded hover:opacity-90 transition-opacity font-mono text-xs md:text-sm"
                >
                  <ExternalLink className="w-3 md:w-4 h-3 md:h-4" />
                  <span className="hidden sm:inline">View</span>
                </a>
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-2 md:px-3 py-2 border border-primary text-primary rounded hover:bg-primary/10 transition-colors font-mono text-xs md:text-sm"
                >
                  <GithubIcon />
                  <span className="hidden sm:inline">Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
