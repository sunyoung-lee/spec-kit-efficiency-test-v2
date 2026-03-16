// GUESS-007: 데이터 구조를 추측. 타입 정의 없이 인라인 사용
// GUESS-008: 카테고리 4개를 임의로 설정
// GUESS-009: 8개 프로젝트를 임의로 생성

export const categories = ["Web", "Mobile", "AI", "Design"];

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A modern online shopping experience",
    image: "https://picsum.photos/seed/proj1/400/250",
    category: "Web",
    tags: ["React", "Node.js"],
  },
  {
    id: 2,
    title: "Fitness Tracker",
    description: "Track your daily workouts and health metrics",
    image: "https://picsum.photos/seed/proj2/400/250",
    category: "Mobile",
    tags: ["React Native", "Firebase"],
  },
  {
    id: 3,
    title: "ChatBot Assistant",
    description: "AI-powered customer service chatbot",
    image: "https://picsum.photos/seed/proj3/400/250",
    category: "AI",
    tags: ["Python", "GPT"],
  },
  {
    id: 4,
    title: "Brand Identity Kit",
    description: "Complete branding package for startups",
    image: "https://picsum.photos/seed/proj4/400/250",
    category: "Design",
    tags: ["Figma", "Illustrator"],
  },
  {
    id: 5,
    title: "Task Management App",
    description: "Organize your team's workflow efficiently",
    image: "https://picsum.photos/seed/proj5/400/250",
    category: "Web",
    tags: ["Vue.js", "Supabase"],
  },
  {
    id: 6,
    title: "Food Delivery App",
    description: "Order food from your favorite restaurants",
    image: "https://picsum.photos/seed/proj6/400/250",
    category: "Mobile",
    tags: ["Flutter", "Stripe"],
  },
  {
    id: 7,
    title: "Image Classifier",
    description: "Classify images using deep learning models",
    image: "https://picsum.photos/seed/proj7/400/250",
    category: "AI",
    tags: ["TensorFlow", "Python"],
  },
  {
    id: 8,
    title: "Dashboard UI Kit",
    description: "Pre-built dashboard components and layouts",
    image: "https://picsum.photos/seed/proj8/400/250",
    category: "Design",
    tags: ["Sketch", "Tailwind"],
  },
];

// GUESS-001: useEffect + useState 패턴으로 데이터 페칭 시뮬레이션
// GUESS-024: 지연 시간 1000ms로 추측
export function fetchProjects(): Promise<any[]> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // 10% 확률로 에러 시뮬레이션
      if (Math.random() < 0.1) {
        reject(new Error("네트워크 오류가 발생했습니다"));
      }
      resolve(projects);
    }, 1000);
  });
}
