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
    <div className="min-h-screen py-8 md:py-12">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 md:mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-3 md:mb-4">
            {"$ cat blogs/"}
          </h1>
          <p className="text-base md:text-lg text-muted-foreground font-mono">
            Technical articles on ML, Data Science, Web Development & more
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-6 md:mb-8 relative">
          <Search className="absolute left-3 top-3 w-4 md:w-5 h-4 md:h-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search blogs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 py-2 w-full bg-card border border-border rounded-lg focus:border-primary focus:outline-none transition-colors text-sm md:text-base"
          />
        </div>

        {/* Filter */}
        <div className="mb-6 md:mb-8">
          <p className="text-xs md:text-sm font-mono text-muted-foreground mb-2 md:mb-3">
            Filter by publication:
          </p>
          <div className="flex flex-wrap gap-2">
            {allPlatforms.map((platform) => (
              <button
                key={platform}
                onClick={() => togglePlatform(platform)}
                className={`px-2 md:px-3 py-1 rounded text-xs md:text-sm font-mono transition-colors ${
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
                className="px-2 md:px-3 py-1 rounded text-xs md:text-sm font-mono bg-card border border-border text-foreground hover:border-destructive flex items-center gap-1"
              >
                Clear <X className="w-3 h-3" />
              </button>
            )}
          </div>
        </div>

        {/* Results Count */}
        <p className="text-xs md:text-sm text-muted-foreground font-mono mb-4">
          Showing {filteredBlogs.length} of {blogsData.length} blogs
        </p>

        {/* Blogs List */}
        <div className="space-y-3 md:space-y-4">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog, index) => (
              <a
                key={index}
                href={blog.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 md:p-4 border border-border rounded-lg bg-card hover:border-primary hover:bg-card/50 transition-all duration-300 group"
              >
                <div className="flex flex-col gap-3">
                  <div>
                    <h3 className="text-base md:text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-2 line-clamp-2">
                      {blog.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <span className="px-2 py-1 bg-muted rounded text-muted-foreground font-mono text-xs md:text-sm w-fit">
                        {blog.platform}
                      </span>
                      <div className="text-primary font-mono text-xs md:text-sm group-hover:translate-x-1 transition-transform">
                        Read →
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {blog.tags.slice(0, 4).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 py-1 text-xs bg-primary/10 text-primary rounded font-mono border border-primary/20 hover:border-primary transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                    {blog.tags.length > 4 && (
                      <span className="px-2 py-1 text-xs bg-muted rounded text-muted-foreground font-mono">
                        +{blog.tags.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              </a>
            ))
          ) : (
            <div className="text-center py-8 md:py-12 border border-border rounded-lg bg-card">
              <p className="text-muted-foreground font-mono text-sm md:text-base">
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
