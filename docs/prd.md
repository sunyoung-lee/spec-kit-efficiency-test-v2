# PRD: 지능형 프로젝트 필터링 시스템

## 개요
포트폴리오 사이트에 카테고리 기반 프로젝트 필터링 시스템을 구축한다.
사용자가 직관적으로 프로젝트를 탐색할 수 있는 인터랙티브 UI를 제공한다.

## 요구사항
- 카테고리 버튼 클릭 시 해당 카테고리 프로젝트만 표시
- "All" 버튼으로 전체 프로젝트 복귀
- Framer Motion 기반 전환 애니메이션
- 빈 결과 상태(Empty State) 처리

## ⚖️ Constitution (불변의 원칙)
- **C1:** 모든 필터링 로직은 클라이언트 사이드에서 `useMemo`로 처리한다.
- **C2:** 애니메이션은 `framer-motion`의 `layout` prop을 필수 사용한다.
- **C3:** 타겟 브라우저에서 CLS(Layout Shift)가 발생하지 않도록 그리드 컨테이너 `min-height: 400px`을 고정한다.
- **C4:** 모든 인터랙티브 요소는 ARIA 속성(`role`, `aria-selected`, `aria-label`)을 포함한다.
- **C5:** 컴포넌트는 단일 책임 원칙에 따라 `FilterBar`, `ProjectCard`, `EmptyState`로 분리한다.
