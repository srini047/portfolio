import { GithubIcon, LinkedInIcon, XIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-card py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <p className="font-mono text-sm text-muted-foreground">Location</p>
            <p className="text-foreground">Salem, Tamilnadu, India</p>
          </div>

          <div className="space-y-2">
            <p className="font-mono text-sm text-muted-foreground">Email</p>
            <a
              href="mailto:srinikethcr7@gmail.com"
              className="text-accent hover:text-primary transition-colors"
            >
              srinikethcr7@gmail.com
            </a>
          </div>

          <div className="flex gap-6">
            <a
              href="https://github.com/srini047"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <GithubIcon />
            </a>

            <a
              href="https://x.com/srini047"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <XIcon />
            </a>

            <a
              href="https://linkedin.com/in/sriniketh-jayasendil"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground font-mono">
          <p>© 2026 Sriniketh J. | Crafted with passion</p>
        </div>
      </div>
    </footer>
  );
}
