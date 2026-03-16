export type Category = 'web-app' | 'mobile' | 'ai-ml' | 'devops' | 'design';

export interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: Category;
  tags: string[];
  techStack: string[];
  externalUrl: string;
  createdAt: string;
}

export interface FilterState {
  activeCategory: Category | null;
}
