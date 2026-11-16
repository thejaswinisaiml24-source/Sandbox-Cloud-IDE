import { motion } from "framer-motion";
import { ArrowDown, Globe2, LayoutTemplate, Server, Boxes, Database } from "lucide-react";

const layers = [
  { label: "Browser", detail: "React SPA served to the user", icon: Globe2 },
  { label: "React", detail: "Vite-built UI, calls the API over HTTPS", icon: LayoutTemplate },
  { label: "FastAPI", detail: "Async Python API behind Nginx", icon: Server },
  { label: "Execution Engine", detail: "Orchestrates isolated runs (Phase 2)", icon: Boxes },
  { label: "Docker", detail: "Sandboxed containers, one per run", icon: Boxes },
  { label: "Database", detail: "PostgreSQL for durable state", icon: Database },
];

function Architecture() {
  return (
    <section id="architecture" className="border-t border-border bg-card/20 py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">Architecture</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A request's journey
          </h2>
          <p className="mt-4 text-muted">
            Every request flows through a clean, layered path — each layer
            owning exactly one responsibility.
          </p>
        </div>

        <div className="mx-auto mt-16 flex max-w-md flex-col items-center">
          {layers.map((layer, i) => (
            <motion.div key={layer.label} className="w-full">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                className="flex w-full items-center gap-4 rounded-lg border border-border bg-card px-5 py-4 shadow-soft"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <layer.icon size={18} />
                </div>
                <div>
                  <p className="font-mono text-sm font-medium text-foreground">{layer.label}</p>
                  <p className="text-xs text-muted">{layer.detail}</p>
                </div>
              </motion.div>
              {i < layers.length - 1 && (
                <div className="flex justify-center py-2 text-muted/50">
                  <ArrowDown size={16} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Architecture;
