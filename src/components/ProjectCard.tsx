import { motion } from "framer-motion";
import type { Project } from "../data/projects";

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{
        layout: { duration: 0.3 },
        opacity: { duration: 0.2 },
        scale: { duration: 0.2 },
      }}
      className="bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-6 hover:border-[var(--accent)] transition-colors duration-200"
    >
      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-2">
        {project.title}
      </h3>
      <p className="text-[var(--text-secondary)] text-sm mb-4 leading-relaxed">
        {project.description}
      </p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="px-2 py-0.5 text-xs rounded bg-[var(--accent)]/10 text-[var(--accent)]"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-3">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} GitHub 저장소`}
            className="text-sm text-[var(--accent)] hover:underline"
          >
            GitHub →
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} 데모 사이트`}
            className="text-sm text-emerald-400 hover:underline"
          >
            Demo →
          </a>
        )}
      </div>
    </motion.div>
  );
}
