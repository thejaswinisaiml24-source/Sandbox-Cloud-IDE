import { Github, Twitter, Linkedin, TerminalSquare } from "lucide-react";
import { siteConfig } from "@/config/site";

const footerLinks = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "Architecture", href: "#architecture" },
    { label: "Roadmap", href: "#roadmap" },
  ],
  Resources: [
    { label: "Documentation", href: "#" },
    { label: "GitHub", href: siteConfig.githubUrl },
    { label: "Changelog", href: "#" },
  ],
  Company: [
    { label: "About", href: "#" },
    { label: "Contact", href: "#" },
  ],
};

function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-16">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          <div className="col-span-2">
            <a href="#top" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/15 text-primary">
                <TerminalSquare size={18} />
              </span>
              <span className="font-semibold text-foreground">{siteConfig.name}</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted">
              {siteConfig.description}
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer" className="text-muted hover:text-foreground">
                <Github size={18} />
              </a>
              <a href="#" className="text-muted hover:text-foreground">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-muted hover:text-foreground">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-sm font-semibold text-foreground">{section}</h4>
              <ul className="mt-4 space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="text-sm text-muted transition-colors hover:text-foreground">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <p className="font-mono text-xs text-muted">Phase 1 — Foundation</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
