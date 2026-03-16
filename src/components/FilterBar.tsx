import { allTags } from "../data/projects";

interface FilterBarProps {
  activeTag: string;
  onTagChange: (tag: string) => void;
}

export function FilterBar({ activeTag, onTagChange }: FilterBarProps) {
  const tags = ["All", ...allTags];

  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => onTagChange(tag)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer ${
            activeTag === tag
              ? "bg-indigo-500 text-white shadow-lg shadow-indigo-500/25"
              : "bg-slate-800 text-slate-300 hover:bg-slate-700"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
