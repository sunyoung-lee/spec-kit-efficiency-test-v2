import { motion } from "framer-motion";

interface EmptyStateProps {
  onReset: () => void;
}

export function EmptyState({ onReset }: EmptyStateProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="col-span-full flex flex-col items-center justify-center py-16"
      role="status"
      aria-label="검색 결과 없음"
    >
      <svg
        width="64"
        height="64"
        viewBox="0 0 24 24"
        fill="none"
        stroke="var(--text-secondary)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mb-4 opacity-50"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
        <path d="M8 11h6" />
      </svg>
      <h3 className="text-lg font-semibold text-[var(--text-primary)] mb-1">
        일치하는 프로젝트가 없습니다
      </h3>
      <p className="text-[var(--text-secondary)] text-sm mb-4">
        선택한 카테고리에 해당하는 프로젝트가 없습니다.
      </p>
      <button
        onClick={onReset}
        aria-label="전체 프로젝트 보기"
        className="px-4 py-2 rounded-lg text-sm font-medium bg-[var(--accent)] text-white hover:opacity-90 transition-opacity cursor-pointer"
      >
        전체 보기
      </button>
    </motion.div>
  );
}
