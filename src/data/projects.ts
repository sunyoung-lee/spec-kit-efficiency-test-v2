export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  image?: string;
  github?: string;
  demo?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "agentic-portfolio",
    title: "Agentic Portfolio",
    description:
      "AI-SDLC 방법론으로 구축한 개인 포트폴리오. Claude Code가 기획부터 배포까지 전 과정을 에이전틱하게 수행.",
    tags: ["Agentic", "AI", "Next.js", "Tailwind"],
    github: "https://github.com/sunyoung-lee/agentic-portfolio",
    demo: "https://agentic-portfolio.vercel.app",
    featured: true,
  },
  {
    id: "ai-code-review",
    title: "AI Code Review Bot",
    description:
      "GitHub PR에 자동으로 코드 리뷰를 달아주는 AI 봇. Claude API + GitHub Actions 기반.",
    tags: ["AI", "Agentic", "GitHub Actions"],
    github: "https://github.com/sunyoung-lee/ai-code-review",
    featured: true,
  },
  {
    id: "prompt-library",
    title: "Prompt Engineering Library",
    description:
      "실무에서 검증된 프롬프트 패턴을 모아둔 웹 라이브러리. 카테고리별 검색과 복사 기능 제공.",
    tags: ["AI", "Web", "React"],
    github: "https://github.com/sunyoung-lee/prompt-library",
    featured: false,
  },
  {
    id: "vibe-todo",
    title: "Vibe Todo App",
    description:
      "감성적인 UI와 AI 기반 우선순위 추천이 결합된 할일 관리 앱. Vibe Coding으로 제작.",
    tags: ["Web", "AI", "Full Stack"],
    demo: "https://vibe-todo.vercel.app",
    featured: false,
  },
];

export const allTags = Array.from(
  new Set(projects.flatMap((p) => p.tags))
);
