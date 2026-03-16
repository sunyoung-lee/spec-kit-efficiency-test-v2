import { useState, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import { projects } from "./data/projects";
import { FilterBar } from "./components/FilterBar";
import { ProjectCard } from "./components/ProjectCard";
import { EmptyState } from "./components/EmptyState";

function App() {
  const [activeTag, setActiveTag] = useState("All");

  const filtered = useMemo(
    () =>
      activeTag === "All"
        ? projects
        : projects.filter((p) => p.tags.includes(activeTag)),
    [activeTag]
  );

  return (
    <div className="min-h-screen py-12">
      <h1 className="text-4xl font-bold text-center mb-2">Projects</h1>
      <p className="text-center text-slate-400 mb-10">
        카테고리별로 프로젝트를 탐색하세요
      </p>

      <FilterBar activeTag={activeTag} onTagChange={setActiveTag} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.length > 0 ? (
            filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <div className="col-span-full">
              <EmptyState />
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
