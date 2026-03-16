// GUESS-014: Error Boundary 미사용, 단순 상태 기반 에러 표시

export default function ErrorDisplay({ message, onRetry }: { message: string; onRetry: () => void }) {
  return (
    <div style={{ textAlign: "center", padding: "60px 20px" }}>
      <div style={{ fontSize: "48px", marginBottom: "16px" }}>😕</div>
      <div style={{ fontSize: "18px", fontWeight: "bold", color: "#1f2937" }}>
        문제가 발생했어요
      </div>
      <div style={{ fontSize: "14px", color: "#9ca3af", marginTop: "8px" }}>
        {message}
      </div>
      <button
        onClick={onRetry}
        style={{
          marginTop: "20px",
          padding: "10px 24px",
          background: "#3b82f6",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "14px",
        }}
      >
        다시 시도
      </button>
    </div>
  );
}
