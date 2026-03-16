import { motion } from 'framer-motion';
import type { Project } from '../model/types';

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project) => void;
}

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.article
      layoutId={project.id}
      whileHover={{
        scale: 1.03,
        transition: { type: 'spring', stiffness: 300, damping: 20 },
      }}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 300, damping: 25 }}
      className="min-h-[280px] rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-shadow duration-200 cursor-pointer"
      onClick={() => onClick(project)}
      tabIndex={0}
      role="button"
      aria-label={`${project.title} 상세 보기`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          onClick(project);
        }
      }}
    >
      <img
        src={project.thumbnail}
        alt={project.title}
        className="w-full aspect-video object-cover"
        loading="lazy"
        decoding="async"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{project.title}</h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="bg-blue-50 text-blue-700 rounded-full px-3 py-1 text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}
