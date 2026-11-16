import { motion } from "framer-motion";
import {
  ShieldCheck, Cloud, Zap, Code2, FolderKanban, Box, Smartphone,
} from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import type { FeatureItem } from "@/types";

const features: (FeatureItem & { icon: keyof typeof icons })[] = [
  { title: "Secure Execution", description: "Every run happens inside a locked-down, isolated environment with no access to the host.", icon: "ShieldCheck" },
  { title: "Cloud Native", description: "Built to scale horizontally from day one, with stateless services behind a reverse proxy.", icon: "Cloud" },
  { title: "Fast Performance", description: "A lean React front end and an async FastAPI backend keep every interaction snappy.", icon: "Zap" },
  { title: "Multi Language", description: "A pluggable execution layer designed to support many languages as the platform grows.", icon: "Code2" },
  { title: "Project Workspace", description: "Organize files and projects in a workspace built for focus, not clutter.", icon: "FolderKanban" },
  { title: "Docker Isolation", description: "Container boundaries keep every workspace independent, reproducible and disposable.", icon: "Box" },
  { title: "Responsive", description: "A consistent, polished experience whether you're on a desktop, tablet or phone.", icon: "Smartphone" },
];

const icons = { ShieldCheck, Cloud, Zap, Code2, FolderKanban, Box, Smartphone };

function Features() {
  return (
    <section id="features" className="py-28">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono text-xs uppercase tracking-widest text-primary">Features</span>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything a workspace needs
          </h2>
          <p className="mt-4 text-muted">
            A foundation engineered for isolation, speed and reliability —
            so future phases can build on solid ground.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = icons[feature.icon];
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              >
                <Card className="group h-full transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow">
                  <CardHeader>
                    <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary/15">
                      <Icon size={20} />
                    </div>
                    <CardTitle className="mt-3">{feature.title}</CardTitle>
                    <CardDescription>{feature.description}</CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Features;
