"use client";

import { Suspense, useState, useMemo } from "react";
import { blogsData } from "@/lib/data";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";

function BlogsContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedPlatforms, setSelectedPlatforms] = useState<string[]>([]);

  const allPlatforms = useMemo(() => {
    const platforms = new Set<string>();
    blogsData.forEach((blog) => {
      platforms.add(blog.platform);
    });
    return Array.from(platforms).sort();
  }, []);

  const filteredBlogs = useMemo(() => {
    return blogsData.filter((blog) => {
      const matchesSearch =
        searchQuery === "" ||
        blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        blog.platform.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesPlatforms =
        selectedPlatforms.length === 0 ||
        selectedPlatforms.includes(blog.platform);

      return matchesSearch && matchesPlatforms;
    });
  }, [searchQuery, selectedPlatforms]);

  const togglePlatform = (platform: string) => {
    setSelectedPlatforms((prev) =>
      prev.includes(platform)
        ? prev.filter((p) => p !== platform)
        : [...prev, platform]
    );
  };

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {"$ cat blogs/"}
          </h1>
          <p className="text-lg text-muted-foreground font-mono">
            Technical articles on ML, Data Science, Web Development & more
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 py-2 w-full bg-card border border-border rounded-lg focus:border-primary focus:outline-none transition-colors"
          />
        </div>

        <div className="mb-8">
          <p className="text-sm font-mono text-muted-foreground mb-3">
            Filter by publication:
          </p>
          <div className="flex flex-wrap gap-2">
            {allPlatforms.map((platform) => (
              <button
                key={platform}
                onClick={() => togglePlatform(platform)}
                className={`px-3 py-1 rounded text-sm font-mono transition-colors ${
                  selectedPlatforms.includes(platform)
                    ? "bg-primary text-foreground"
                    : "bg-card border border-border text-foreground hover:border-primary"
                }`}
              >
                {platform}
              </button>
            ))}
            {selectedPlatforms.length > 0 && (
              <button
                onClick={() => setSelectedPlatforms([])}
                className="px-3 py-1 rounded text-sm font-mono bg-card border border-border text-foreground hover:border-destructive flex items-center gap-1"
              >
                Clear <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <p className="text-sm text-muted-foreground font-mono mb-4">
          Showing {filteredBlogs.length} of {blogsData.length} blogs
        </p>

        {/* Blogs List */}
        <div className="space-y-4">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog, index) => (
              <a
                key={index}
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 border border-border rounded-lg bg-card hover:border-primary hover:bg-card/50 transition-all duration-300 group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                      {blog.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm">
                      <span className="px-2 py-1 bg-muted rounded text-muted-foreground font-mono">
                        {blog.platform}
                      </span>
                    </div>
                  </div>
                  <div className="text-primary font-mono text-sm group-hover:translate-x-1 transition-transform">
                    Read →
                  </div>
                </div>
              </a>
            ))
          ) : (
            <div className="text-center py-12 border border-border rounded-lg bg-card">
              <p className="text-muted-foreground font-mono">
                No blogs found matching your criteria
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function BlogsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen" />}>
      <BlogsContent />
    </Suspense>
  );
}
