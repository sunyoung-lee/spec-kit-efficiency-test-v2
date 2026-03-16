import { useState, useEffect } from "react";
import { fetchProjects } from "./data";
import FilterBar from "./components/FilterBar";
import ProjectCard from "./components/ProjectCard";
import ProjectDetailModal from "./components/project-detail-modal";
import Spinner from "./components/Spinner";
import ErrorDisplay from "./components/ErrorDisplay";

// GUESS-001: useEffect + useState 패턴 (TanStack Query 미사용)
// GUESS-014: Error Boundary 미사용

function App() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const loadData = () => {
    setLoading(true);
    setError(null);
    fetchProjects()
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  };

  useEffect(() => {
    loadData();
  }, []);

  const filtered =
    filter === "All" ? projects : projects.filter((p) => p.category === filter);

  // GUESS-015: 스크롤 기반 카테고리 자동 하이라이트 — 구현 복잡해서 생략
  // spec에 "하이라이트되면 좋겠어"라고 되어 있어 선택사항으로 해석

  return (
    // GUESS-020: <main> 대신 <div> 사용
    <div>
      <div
        style={{
          textAlign: "center",
          padding: "32px 20px 16px",
        }}
      >
        <div style={{ fontSize: "28px", fontWeight: "bold", color: "#1f2937" }}>
          Project Gallery
        </div>
        <div style={{ fontSize: "14px", color: "#9ca3af", marginTop: "4px" }}>
          Explore amazing projects
        </div>
      </div>

      <FilterBar onFilter={setFilter} />

      {loading ? (
        // GUESS-004: 스피너 사용
        <Spinner />
      ) : error ? (
        <ErrorDisplay message={error} onRetry={loadData} />
      ) : (
        // GUESS-005: 그리드 레이아웃 — 300px minmax, gap 16px 추측
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: "16px",
            padding: "20px",
            // GUESS-006: max-width 추측
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {filtered.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      )}

      {selectedProject && (
        <ProjectDetailModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}

export default App;
