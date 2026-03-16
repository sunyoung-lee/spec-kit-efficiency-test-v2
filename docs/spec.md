# Spec: 지능형 프로젝트 필터링 시스템

## ⚙️ Logic Specification: Filtering

### Schema
```typescript
type CategoryEnum = "All" | "Agentic" | "AI" | "Next.js" | "Tailwind" | "GitHub Actions" | "Web" | "React" | "Full Stack";
```

### State Machine
- **IDLE**: `projects.ts`의 전체 데이터 렌더링. 초기 `activeTag = "All"`.
- **TRANSITION**: 필터 변경 시 기존 리스트 `exit` 애니메이션 실행 (`duration: 0.2s`, `opacity: 0`, `scale: 0.95`).
- **RESULT**: 필터링된 결과 `enter` 애니메이션 (`duration: 0.3s`, `opacity: 1`, `scale: 1`).

### Edge Cases
- 검색 결과 0개: `components/EmptyState.tsx` 표시. 아이콘 + 메시지 + "전체 보기" 복귀 버튼 포함.
- 태그 중복 선택 불가 (Single Select 제약).
- 빠른 연속 클릭: `AnimatePresence mode="wait"`으로 이전 애니메이션 완료 후 전환.

## 🎨 UI Specification

### FilterBar
- 컨테이너: `flex flex-wrap gap-2 justify-center mb-8`
- 버튼 기본: `px-4 py-2 rounded-lg text-sm font-medium bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border)]`
- 버튼 활성: `bg-[var(--accent)] text-white border-[var(--accent)]`
- ARIA: `role="tablist"` (컨테이너), `role="tab"` + `aria-selected` (버튼)

### ProjectCard
- 컨테이너: `bg-[var(--bg-secondary)] border border-[var(--border)] rounded-xl p-6`
- Hover: `hover:border-[var(--accent)] transition-colors duration-200`
- `motion.div`에 `layout` prop 필수 (C2 준수)
- 태그 뱃지: `px-2 py-0.5 text-xs rounded bg-[var(--accent)]/10 text-[var(--accent)]`

### EmptyState
- 위치: 그리드 `col-span-full` 중앙 배치
- 구성: SVG 아이콘 (이모지 아님) + 제목 + 부제 + "전체 보기" 버튼
- 애니메이션: `initial={{ opacity: 0, y: 10 }}` → `animate={{ opacity: 1, y: 0 }}` (`duration: 0.3s`)

### Grid Layout
- 컨테이너: `grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[400px]` (C3 준수)
- `AnimatePresence mode="wait"` 적용

## 📁 파일 구조
```
src/
├── App.tsx                    # 메인 컴포넌트 (상태 관리)
├── components/
│   ├── FilterBar.tsx          # 필터 버튼 바
│   ├── ProjectCard.tsx        # 프로젝트 카드
│   └── EmptyState.tsx         # 빈 결과 상태
└── data/
    └── projects.ts            # 데이터 (기존)
```
