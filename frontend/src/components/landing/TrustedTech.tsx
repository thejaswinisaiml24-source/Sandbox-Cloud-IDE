import { motion } from "framer-motion";

const techs = [
  "React", "FastAPI", "Docker", "PostgreSQL", "Tailwind CSS", "TypeScript",
];

function TrustedTech() {
  return (
    <section className="border-y border-border bg-background/50 py-14">
      <div className="container">
        <p className="text-center font-mono text-xs uppercase tracking-widest text-muted">
          Built on a modern, battle-tested stack
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {techs.map((tech, i) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              className="text-lg font-semibold text-muted/70 transition-colors duration-300 hover:text-foreground"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TrustedTech;
