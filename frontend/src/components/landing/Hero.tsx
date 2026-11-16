import { motion } from "framer-motion";
import { ArrowRight, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const snippets = [
  { lang: "app.py", code: "@app.get(\"/health\")\nasync def health():\n    return {\"status\": \"ok\"}", top: "8%", left: "3%", rotate: -6 },
  { lang: "main.tsx", code: "createRoot(root).render(\n  <App />\n)", top: "62%", left: "1%", rotate: 4 },
  { lang: "Dockerfile", code: "FROM python:3.12-slim\nWORKDIR /app\nCMD [\"uvicorn\", \"app:app\"]", top: "14%", left: "78%", rotate: 5 },
  { lang: "compose.yml", code: "services:\n  backend:\n    build: ./backend", top: "66%", left: "80%", rotate: -4 },
];

function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-28 pt-20 sm:pt-28">
      <div className="pointer-events-none absolute inset-0 bg-grid mask-fade-bottom opacity-60" />
      <div
        className="pointer-events-none absolute left-1/2 top-[-10%] h-[560px] w-[560px] -translate-x-1/2 rounded-full opacity-30 blur-3xl animate-gradient-shift"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 50%, #6366F1, #A78BFA, #6366F1)",
          backgroundSize: "200% 200%",
        }}
      />

      <div className="container relative">
        <div className="hidden lg:block">
          {snippets.map((s, i) => (
            <motion.div
              key={s.lang}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + i * 0.15, duration: 0.7 }}
              className="absolute w-56 animate-float rounded-lg border border-border bg-card/80 p-3 shadow-soft backdrop-blur-sm"
              style={{ top: s.top, left: s.left, transform: `rotate(${s.rotate}deg)`, animationDelay: `${i * 0.8}s` }}
            >
              <div className="mb-2 flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-danger/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-warning/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
                <span className="ml-auto font-mono text-[10px] text-muted">{s.lang}</span>
              </div>
              <pre className="whitespace-pre-wrap font-mono text-[11px] leading-relaxed text-foreground/80">
                {s.code}
              </pre>
            </motion.div>
          ))}
        </div>

        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge>Phase 1 — Foundation now live</Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl font-bold tracking-tight text-foreground sm:text-6xl"
          >
            Code from anywhere.
            <br />
            <span className="text-gradient-primary">Ship in an instant.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-balance text-lg text-muted"
          >
            Sandbox is a cloud-native online IDE where you write, save and
            securely execute code inside isolated containers — no local setup
            required.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-9 flex flex-col items-center gap-4 sm:flex-row"
          >
            <Button size="lg">
              Start Coding <ArrowRight size={16} className="ml-1" />
            </Button>
            <Button size="lg" variant="outline">
              <Github size={16} className="mr-1" /> View on GitHub
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
