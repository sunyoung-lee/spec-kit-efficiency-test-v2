import { memo } from 'react';
import { CATEGORIES } from '../model/constants';

interface FilterBarProps {
  activeSection: string | null;
  onNavigate: (sectionId: string) => void;
}

export const FilterBar = memo(function FilterBar({ activeSection, onNavigate }: FilterBarProps) {
  return (
    <nav
      className="sticky top-0 z-40 backdrop-blur-md bg-white/80 border-b border-gray-200"
      role="tablist"
      aria-label="카테고리 필터"
    >
      <div className="flex gap-2 overflow-x-auto scrollbar-hide px-6 py-3">
        {CATEGORIES.map((cat) => {
          const isActive = activeSection === cat.slug;
          return (
            <button
              key={cat.slug}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onNavigate(cat.slug)}
              className={`whitespace-nowrap px-4 py-2 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded-sm ${
                isActive
                  ? 'border-b-2 border-blue-500 text-blue-600 font-medium'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>
    </nav>
  );
});
