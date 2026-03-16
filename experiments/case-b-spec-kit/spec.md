# Case B: Spec-kit 구조화 명세 — Agentic Dynamic Showcase

## 1. 프로젝트 메타

| 항목 | 값 |
|---|---|
| 프로젝트명 | Agentic Dynamic Showcase |
| 버전 | v1.0.0 |
| 기술 스택 | React 18, TypeScript 5, Framer Motion 11, TanStack Query v5, Tailwind CSS 3.4 |
| 빌드 도구 | Vite 5 |
| 패키지 매니저 | npm |

## 2. 디렉토리 구조 (FSD-Lite)

```
src/
├── app/                    # App 엔트리, 프로바이더, 글로벌 스타일
│   ├── App.tsx
│   ├── providers.tsx       # QueryClientProvider, ErrorBoundary 래핑
│   └── global.css
├── features/
│   └── gallery/
│       ├── ui/
│       │   ├── GalleryGrid.tsx
│       │   ├── ProjectCard.tsx
│       │   ├── FilterBar.tsx
│       │   ├── SkeletonCard.tsx
│       │   ├── ErrorFallback.tsx
│       │   └── DetailModal.tsx
│       ├── model/
│       │   ├── types.ts        # Project, Category, FilterState 타입 정의
│       │   └── constants.ts    # 카테고리 목록, 브레이크포인트
│       ├── api/
│       │   ├── mockData.ts     # 20개 프로젝트 목데이터 (시드 고정)
│       │   └── queries.ts      # useProjects, useProjectById 훅
│       └── lib/
│           ├── useScrollSpy.ts       # IntersectionObserver 기반 스크롤 감지
│           └── useFilterNavigation.ts # 필터 클릭 → 스크롤 이동
├── shared/
│   └── ui/
│       └── Portal.tsx
└── index.tsx
```

## 3. 컴포넌트 명세

### 3.1 GalleryGrid

| 속성 | 명세 |
|---|---|
| 레이아웃 | CSS Grid, `grid-template-columns: repeat(auto-fill, minmax(320px, 1fr))` |
| 간격 | `gap: 24px`, 컨테이너 패딩 `px: 24px`, `py: 32px` |
| 반응형 | `< 640px`: 1열, `640-1024px`: 2열, `> 1024px`: 3열 |
| 섹션 분리 | 카테고리별 `<section id={category-slug}>` 래핑, `scroll-margin-top: 80px` |

### 3.2 ProjectCard

| 속성 | 명세 |
|---|---|
| 크기 | `min-height: 280px`, `border-radius: 12px` |
| 호버 애니메이션 | Framer Motion `whileHover`: `scale: 1.03`, `transition: { type: "spring", stiffness: 300, damping: 20 }` |
| 그림자 | 기본: `shadow-md`, 호버: `shadow-xl`, `transition-duration: 200ms` |
| 내용 | 썸네일(aspect-ratio: 16/9), 프로젝트명(text-lg, font-semibold), 설명(text-sm, text-gray-600, line-clamp-2), 태그(최대 3개, bg-blue-50, text-blue-700, rounded-full, px-3, py-1) |
| 클릭 | `onClick` → DetailModal 오픈, `layoutId={project.id}` 공유 레이아웃 트랜지션 |

### 3.3 FilterBar

| 속성 | 명세 |
|---|---|
| 고정 | `position: sticky`, `top: 0`, `z-index: 40`, `backdrop-blur-md`, `bg-white/80` |
| 활성 표시 | 현재 뷰포트 섹션의 카테고리 버튼에 `border-b-2 border-blue-500 text-blue-600 font-medium` |
| 비활성 | `text-gray-500 hover:text-gray-700` |
| 클릭 동작 | `element.scrollIntoView({ behavior: 'smooth', block: 'start' })` |
| 레이아웃 | `flex`, `gap: 8px`, `overflow-x: auto`, `scrollbar-hide`, 패딩 `px: 24px`, `py: 12px` |

### 3.4 SkeletonCard

| 속성 | 명세 |
|---|---|
| 구조 | ProjectCard와 동일한 레이아웃, 내용 영역을 `bg-gray-200 rounded animate-pulse`로 대체 |
| 개수 | 로딩 시 6개 렌더링 |
| 애니메이션 | `animate-pulse`, 각 카드별 `animation-delay: index * 100ms` (순차 펄스) |

### 3.5 ErrorFallback

| 속성 | 명세 |
|---|---|
| 레이아웃 | 중앙 정렬, `max-width: 400px`, `padding: 48px` |
| 아이콘 | `⚠️` 이모지 or Heroicons `ExclamationTriangleIcon`, 크기 48px, `text-red-500` |
| 메시지 | 제목: "데이터를 불러올 수 없습니다" (text-lg, font-semibold), 부제: `error.message` (text-sm, text-gray-500) |
| 재시도 | `<button>` "다시 시도", `bg-blue-500 text-white rounded-lg px-6 py-2`, onClick → `queryClient.refetchQueries()` |

### 3.6 DetailModal

| 속성 | 명세 |
|---|---|
| 오버레이 | `bg-black/50`, Framer Motion `animate={{ opacity: 1 }}`, 클릭 시 닫기 |
| 모달 | `max-width: 640px`, `max-height: 80vh`, `border-radius: 16px`, `overflow-y: auto` |
| 진입 애니메이션 | `layoutId` 공유 트랜지션 + `initial={{ opacity: 0, y: 20 }}`, `animate={{ opacity: 1, y: 0 }}`, `transition: { type: "spring", stiffness: 200, damping: 25 }` |
| 닫기 | ESC 키 + 오버레이 클릭 + X 버튼(우상단, 크기 32px) |
| 내용 | 썸네일(전체 폭), 프로젝트명, 상세 설명, 전체 태그 목록, 기술 스택 뱃지, 외부 링크 버튼 |
| 포커스 트랩 | 모달 내부로 Tab 키 포커스 제한 |
| 스크롤 잠금 | 모달 오픈 시 `document.body.style.overflow = 'hidden'` |

## 4. 커스텀 훅 명세

### 4.1 useScrollSpy

```typescript
interface UseScrollSpyOptions {
  sectionIds: string[];
  rootMargin?: string;   // 기본값: "-80px 0px -60% 0px"
  threshold?: number;    // 기본값: 0.1
}

function useScrollSpy(options: UseScrollSpyOptions): string | null;
// 반환: 현재 뷰포트에 가장 많이 보이는 섹션의 ID
```

| 항목 | 명세 |
|---|---|
| 구현 | `IntersectionObserver` API 사용 |
| 디바운스 | 없음 (IO 자체가 효율적) |
| 클린업 | `useEffect` return에서 `observer.disconnect()` 필수 |

### 4.2 useFilterNavigation

```typescript
function useFilterNavigation(): {
  navigateTo: (sectionId: string) => void;
  activeSection: string | null;
};
```

| 항목 | 명세 |
|---|---|
| navigateTo | `document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })` |
| activeSection | `useScrollSpy` 결과를 그대로 반환 |

## 5. 데이터 명세

### 5.1 타입 정의

```typescript
interface Project {
  id: string;                  // nanoid(8)
  title: string;               // 최대 60자
  description: string;         // 최대 200자
  thumbnail: string;           // placeholder 이미지 URL (picsum.photos/640/360)
  category: Category;
  tags: string[];              // 최대 5개
  techStack: string[];         // 최대 8개
  externalUrl: string;
  createdAt: string;           // ISO 8601
}

type Category = 'web-app' | 'mobile' | 'ai-ml' | 'devops' | 'design';

interface FilterState {
  activeCategory: Category | null;
}
```

### 5.2 목데이터

- 총 20개 프로젝트, 카테고리당 4개씩 균등 분배
- 시드 고정: 동일 입력 → 동일 출력 보장
- 썸네일: `https://picsum.photos/seed/{project.id}/640/360`

## 6. API / 쿼리 명세

### useProjects

```typescript
const useProjects = () => useQuery({
  queryKey: ['projects'],
  queryFn: async () => {
    await new Promise(r => setTimeout(r, 1500)); // 네트워크 지연 시뮬레이션
    return mockProjects;
  },
  staleTime: Infinity,
});
```

### useProjectById

```typescript
const useProjectById = (id: string) => useQuery({
  queryKey: ['project', id],
  queryFn: async () => {
    await new Promise(r => setTimeout(r, 500));
    const project = mockProjects.find(p => p.id === id);
    if (!project) throw new Error('프로젝트를 찾을 수 없습니다.');
    return project;
  },
  enabled: !!id,
});
```

## 7. 상태 UX 매트릭스

| 상태 | UI | 전환 애니메이션 |
|---|---|---|
| 로딩 (초기) | SkeletonCard × 6 | `animate={{ opacity: 1 }}` fade-in |
| 성공 | GalleryGrid + ProjectCard[] | Framer `AnimatePresence` stagger `0.05s` |
| 에러 | ErrorFallback (중앙) | `animate={{ opacity: 1, scale: 1 }}` from `scale: 0.95` |
| 빈 결과 | "표시할 프로젝트가 없습니다" + 일러스트 | fade-in |
| 상세 보기 | DetailModal | `layoutId` 공유 트랜지션 |

## 8. 접근성 (a11y)

| 항목 | 명세 |
|---|---|
| 시맨틱 | `<main>`, `<section>`, `<nav>`, `<article>` 적절히 사용 |
| ARIA | FilterBar: `role="tablist"`, 각 필터: `role="tab"`, `aria-selected` |
| 키보드 | 모든 인터랙티브 요소 Tab 접근 가능, Enter/Space로 활성화 |
| 포커스 | 모달 열림 시 포커스 트랩, 닫힘 시 트리거 요소로 포커스 복원 |
| 색상 대비 | WCAG AA 기준 (최소 4.5:1) 충족 |

## 9. 성능 제약

| 항목 | 목표 |
|---|---|
| LCP | < 2.5s |
| CLS | < 0.1 |
| 번들 크기 | < 200KB (gzipped) |
| 이미지 | `loading="lazy"`, `decoding="async"` |
| 리렌더링 | FilterBar 클릭 시 해당 섹션만 리렌더 (React.memo 적용) |

## 10. Constraints (위반 시 실패 판정)

1. **TypeScript strict 모드**: `any` 타입 사용 금지, 모든 props에 인터페이스 명시
2. **Framer Motion spring 필수**: 모든 애니메이션은 `type: "spring"` 사용, `ease` 커브 금지
3. **TanStack Query 필수**: 데이터 페칭은 반드시 `useQuery` 사용, `useEffect + fetch` 금지
4. **에러 바운더리 필수**: `QueryErrorResetBoundary` + React `ErrorBoundary` 조합
5. **스켈레톤 필수**: 로딩 시 spinner 사용 금지, 반드시 SkeletonCard 렌더링
6. **포커스 관리 필수**: 모달 포커스 트랩 + 복원 미구현 시 실패
7. **시맨틱 HTML 필수**: div-soup 금지, 적절한 시맨틱 태그 사용
8. **반응형 필수**: 3단계 브레이크포인트(640/1024) 구현
