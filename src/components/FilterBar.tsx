import { allTags } from "../data/projects";

interface FilterBarProps {
  activeTag: string;
  onTagChange: (tag: string) => void;
}

export function FilterBar({ activeTag, onTagChange }: FilterBarProps) {
  const tags = ["All", ...allTags];

  return (
    <div
      role="tablist"
      aria-label="프로젝트 카테고리 필터"
      className="flex flex-wrap gap-2 justify-center mb-8"
    >
      {tags.map((tag) => (
        <button
          key={tag}
          role="tab"
          aria-selected={activeTag === tag}
          aria-label={`${tag} 카테고리 필터`}
          onClick={() => onTagChange(tag)}
          className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors duration-200 cursor-pointer ${
            activeTag === tag
              ? "bg-[var(--accent)] text-white border-[var(--accent)]"
              : "bg-[var(--bg-secondary)] text-[var(--text-secondary)] border-[var(--border)] hover:border-[var(--accent)]"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
