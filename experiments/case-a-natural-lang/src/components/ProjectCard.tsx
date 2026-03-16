import { useState } from "react";

// GUESS-002: CSS transition ease 사용 (Framer Motion spring 대신)
// GUESS-003: hover scale 1.05, 0.3s ease
// GUESS-017: box-shadow 추측
// GUESS-018: border-radius 8px 추측
// GUESS-020: div-soup

export default function ProjectCard({ project, onClick }: { project: any; onClick: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        // GUESS-018: border-radius 8px
        borderRadius: "8px",
        overflow: "hidden",
        cursor: "pointer",
        background: "#ffffff",
        // GUESS-002, GUESS-003: CSS ease transition
        transition: "all 0.3s ease",
        transform: hovered ? "scale(1.05)" : "scale(1)",
        // GUESS-017: 그림자 추측
        boxShadow: hovered
          ? "0 8px 24px rgba(0,0,0,0.15)"
          : "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
      {/* GUESS-022: loading="lazy" 미적용 */}
      <img
        src={project.image}
        alt={project.title}
        style={{ width: "100%", height: "180px", objectFit: "cover" }}
      />
      <div style={{ padding: "16px" }}>
        {/* GUESS-016: 폰트 크기 추측 */}
        <div style={{ fontSize: "20px", fontWeight: "bold", color: "#1f2937" }}>
          {project.title}
        </div>
        <div style={{ fontSize: "14px", color: "#6b7280", marginTop: "4px" }}>
          {project.description}
        </div>
        <div style={{ display: "flex", gap: "6px", marginTop: "12px", flexWrap: "wrap" }}>
          {project.tags.map((tag: string) => (
            <div
              key={tag}
              style={{
                fontSize: "12px",
                padding: "2px 10px",
                borderRadius: "12px",
                background: "#eff6ff",
                color: "#3b82f6",
              }}
            >
              {tag}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
