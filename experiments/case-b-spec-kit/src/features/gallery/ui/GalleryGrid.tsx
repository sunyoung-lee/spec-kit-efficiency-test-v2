import { useState, useMemo, useCallback } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useProjects } from '../api/queries';
import { CATEGORIES } from '../model/constants';
import type { Project } from '../model/types';
import { useFilterNavigation } from '../lib/useFilterNavigation';
import { FilterBar } from './FilterBar';
import { ProjectCard } from './ProjectCard';
import { SkeletonCard } from './SkeletonCard';
import { DetailModal } from './DetailModal';

export function GalleryGrid() {
  const { data: projects, isLoading } = useProjects();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const sectionIds = useMemo(() => CATEGORIES.map((c) => c.slug), []);
  const { navigateTo, activeSection } = useFilterNavigation({ sectionIds });

  const groupedProjects = useMemo(() => {
    if (!projects) return {};
    const grouped: Record<string, Project[]> = {};
    for (const cat of CATEGORIES) {
      grouped[cat.slug] = projects.filter((p) => p.category === cat.slug);
    }
    return grouped;
  }, [projects]);

  const handleCardClick = useCallback((project: Project) => {
    setSelectedProject(project);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  if (isLoading) {
    return (
      <>
        <FilterBar activeSection={null} onNavigate={navigateTo} />
        <div className="px-6 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }, (_, i) => (
              <SkeletonCard key={i} index={i} />
            ))}
          </div>
        </div>
      </>
    );
  }

  if (!projects || projects.length === 0) {
    return (
      <>
        <FilterBar activeSection={null} onNavigate={navigateTo} />
        <div className="flex items-center justify-center min-h-[50vh]">
          <p className="text-gray-500 text-lg">표시할 프로젝트가 없습니다</p>
        </div>
      </>
    );
  }

  return (
    <>
      <FilterBar activeSection={activeSection} onNavigate={navigateTo} />
      <div className="px-6 py-8">
        <AnimatePresence mode="sync">
          {CATEGORIES.map((cat) => {
            const catProjects = groupedProjects[cat.slug] ?? [];
            if (catProjects.length === 0) return null;

            return (
              <section
                key={cat.slug}
                id={cat.slug}
                className="mb-10 scroll-mt-20"
                aria-label={cat.label}
              >
                <h2 className="text-xl font-bold text-gray-900 mb-4">{cat.label}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {catProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onClick={handleCardClick}
                    />
                  ))}
                </div>
              </section>
            );
          })}
        </AnimatePresence>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <DetailModal project={selectedProject} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </>
  );
}
