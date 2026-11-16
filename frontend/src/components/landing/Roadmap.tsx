import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import type { RoadmapPhase } from "@/types";

const phases: RoadmapPhase[] = [
  {
    phase: "Phase 1",
    title: "Foundation",
    status: "current",
    items: ["Landing page", "Project scaffolding", "Health API", "Docker & CI setup"],
  },
  {
    phase: "Phase 2",
    title: "Authentication & Workspaces",
    status: "upcoming",
    items: ["User accounts", "Project management", "File storage"],
  },
  {
    phase: "Phase 3",
    title: "Code Execution",
    status: "planned",
    items: ["Monaco editor", "Docker execution engine", "Multi-language runtimes"],
  },
  {
    phase: "Phase 4",
    title: "Platform & Insights",
    status: "planned",
    items: ["AI assistance", "Monitoring & analytics", "Admin panel"],
  },
];

const statusStyles: Record<RoadmapPhase["status"], string> = {
  current: "border-primary bg-primary text-primary-foreground",
  upcoming: "border-primary/50 bg-background text-primary",
  planned: "border-border bg-background text-muted",
};

function Roadmap() {
  return (
    <section id="roadmap" className="py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">Roadmap</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Where Sandbox is headed
          </h2>
          <p className="mt-4 text-muted">
            Each phase builds on the last without ever needing a rewrite.
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute left-4 top-2 h-[calc(100%-1rem)] w-px bg-border sm:left-1/2" />
          <div className="space-y-10">
            {phases.map((p, i) => (
              <motion.div
                key={p.phase}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={cn(
                  "relative flex flex-col gap-4 pl-12 sm:w-1/2 sm:pl-0 sm:pr-10",
                  i % 2 === 1 && "sm:ml-auto sm:pl-10 sm:pr-0 sm:text-left",
                )}
              >
                <span
                  className={cn(
                    "absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border-2 font-mono text-[10px] font-bold sm:left-auto",
                    i % 2 === 0 ? "sm:-right-4" : "sm:-left-4",
                    statusStyles[p.status],
                  )}
                >
                  {i + 1}
                </span>
                <div className="rounded-lg border border-border bg-card p-5 shadow-soft">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs text-primary">{p.phase}</span>
                    {p.status === "current" && (
                      <span className="rounded-full bg-success/10 px-2 py-0.5 text-[10px] font-medium text-success">
                        In progress
                      </span>
                    )}
                  </div>
                  <h3 className="mt-1 text-lg font-semibold text-foreground">{p.title}</h3>
                  <ul className="mt-3 space-y-1.5">
                    {p.items.map((item) => (
                      <li key={item} className="text-sm text-muted">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Roadmap;
