import { useState, useMemo } from "react";
import { AnimatePresence } from "framer-motion";
import { projects } from "./data/projects";
import { FilterBar } from "./components/FilterBar";
import { ProjectCard } from "./components/ProjectCard";
import { EmptyState } from "./components/EmptyState";

function App() {
  // C1: 클라이언트 사이드 useMemo 필터링
  const [activeTag, setActiveTag] = useState<string>("All");

  const filtered = useMemo(
    () =>
      activeTag === "All"
        ? projects
        : projects.filter((p) => p.tags.includes(activeTag)),
    [activeTag]
  );

  return (
    <div className="min-h-screen py-12">
      <h1 className="text-4xl font-bold text-center mb-2 text-[var(--text-primary)]">
        Projects
      </h1>
      <p className="text-center text-[var(--text-secondary)] mb-10">
        카테고리별로 프로젝트를 탐색하세요
      </p>

      {/* C4: ARIA role="tablist" 포함 */}
      <FilterBar activeTag={activeTag} onTagChange={setActiveTag} />

      {/* C3: min-h-[400px]로 CLS 방지 */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[400px]"
        role="tabpanel"
        aria-label={`${activeTag} 프로젝트 목록`}
      >
        {/* Edge Case: AnimatePresence mode="wait"으로 빠른 연속 클릭 처리 */}
        <AnimatePresence mode="wait">
          {filtered.length > 0 ? (
            filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))
          ) : (
            <EmptyState onReset={() => setActiveTag("All")} />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default App;
