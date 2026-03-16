import { useState, useEffect } from "react";
import { categories } from "../data";

// GUESS-011: 필터바 스타일 — 불투명 흰색 배경, 그림자 없이 border-bottom만
// GUESS-015: scroll 이벤트 + getBoundingClientRect 사용 (IntersectionObserver 대신)
// GUESS-020: div-soup — 시맨틱 태그 미사용

export default function FilterBar({ onFilter }: { onFilter: (cat: string) => void }) {
  const [active, setActive] = useState("All");
  // GUESS-015: scroll 이벤트로 sticky 상태 감지 (사용은 안 함)
  useEffect(() => {
    const handleScroll = () => {};
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (cat: string) => {
    setActive(cat);
    onFilter(cat);

    // GUESS-023: scrollTo 방식으로 섹션 이동
    if (cat !== "All") {
      const el = document.getElementById(cat);
      if (el) {
        const offset = el.offsetTop - 60;
        window.scrollTo({ top: offset, behavior: "smooth" });
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    // GUESS-020: <nav> 대신 <div> 사용, ARIA 속성 없음
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        background: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        padding: "12px 20px",
        display: "flex",
        gap: "8px",
        overflowX: "auto",
      }}
    >
      {["All", ...categories].map((cat) => (
        <div
          key={cat}
          onClick={() => handleClick(cat)}
          style={{
            padding: "8px 16px",
            borderRadius: "20px",
            cursor: "pointer",
            fontSize: "14px",
            // GUESS-010: 색상 하드코딩
            background: active === cat ? "#3b82f6" : "#f3f4f6",
            color: active === cat ? "#ffffff" : "#6b7280",
            transition: "all 0.2s ease",
            whiteSpace: "nowrap",
          }}
        >
          {cat}
        </div>
      ))}
    </div>
  );
}
