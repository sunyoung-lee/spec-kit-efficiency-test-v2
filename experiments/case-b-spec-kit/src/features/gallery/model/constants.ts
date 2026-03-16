import type { Category } from './types';

export interface CategoryInfo {
  slug: Category;
  label: string;
}

export const CATEGORIES: CategoryInfo[] = [
  { slug: 'web-app', label: 'Web App' },
  { slug: 'mobile', label: 'Mobile' },
  { slug: 'ai-ml', label: 'AI / ML' },
  { slug: 'devops', label: 'DevOps' },
  { slug: 'design', label: 'Design' },
];

export const BREAKPOINTS = {
  sm: 640,
  lg: 1024,
} as const;
