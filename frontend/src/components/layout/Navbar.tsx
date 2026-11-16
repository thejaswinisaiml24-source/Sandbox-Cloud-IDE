import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Github, TerminalSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-colors duration-300",
        scrolled
          ? "border-border bg-background/70 backdrop-blur-xl"
          : "border-transparent bg-transparent",
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/15 text-primary">
            <TerminalSquare className="h-4.5 w-4.5" size={18} />
          </span>
          <span className="font-semibold tracking-tight text-foreground">
            {siteConfig.name}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer">
            <Button variant="ghost" size="icon" aria-label="View source on GitHub">
              <Github size={18} />
            </Button>
          </a>
          <Button size="sm">Get Started</Button>
        </div>

        <button
          className="text-foreground md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="border-t border-border bg-background/95 backdrop-blur-xl md:hidden"
        >
          <div className="container flex flex-col gap-4 py-6">
            {siteConfig.nav.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-muted hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="flex items-center gap-3 pt-2">
              <a href={siteConfig.githubUrl} target="_blank" rel="noreferrer" className="flex-1">
                <Button variant="outline" className="w-full">
                  <Github size={16} className="mr-2" /> GitHub
                </Button>
              </a>
              <Button className="flex-1">Get Started</Button>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}

export default Navbar;
