// GUESS-012: 단순 오버레이 + 중앙 박스, X 버튼만 구현
// GUESS-021: 포커스 트랩 미구현, ESC 키 닫기 미구현
// GUESS-019: 파일명 케밥케이스 (다른 파일은 PascalCase — 비일관적)

export default function ProjectDetailModal({ project, onClose }: { project: any; onClose: () => void }) {
  if (!project) return null;

  return (
    // GUESS-020: div-soup, 시맨틱 태그 없음
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 100,
      }}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "12px",
          maxWidth: "500px",
          width: "90%",
          maxHeight: "80vh",
          overflow: "auto",
          position: "relative",
        }}
      >
        {/* GUESS-012: X 버튼만 — 오버레이 클릭 닫기 미구현 */}
        <div
          onClick={onClose}
          style={{
            position: "absolute",
            top: "12px",
            right: "12px",
            cursor: "pointer",
            fontSize: "20px",
            color: "#9ca3af",
            width: "28px",
            height: "28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          ✕
        </div>

        <img
          src={project.image}
          alt={project.title}
          style={{ width: "100%", borderRadius: "12px 12px 0 0" }}
        />

        <div style={{ padding: "24px" }}>
          <div style={{ fontSize: "24px", fontWeight: "bold", color: "#1f2937" }}>
            {project.title}
          </div>
          <div style={{ fontSize: "14px", color: "#6b7280", marginTop: "8px" }}>
            {project.description}
          </div>
          <div style={{ marginTop: "16px", fontSize: "13px", color: "#9ca3af" }}>
            Category: {project.category}
          </div>
          <div style={{ display: "flex", gap: "6px", marginTop: "12px", flexWrap: "wrap" }}>
            {project.tags.map((tag: string) => (
              <div
                key={tag}
                style={{
                  fontSize: "12px",
                  padding: "4px 12px",
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
    </div>
  );
}
