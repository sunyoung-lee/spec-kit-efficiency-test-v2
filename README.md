# Spec-kit Efficiency Test

> AI 코드 생성에서 **자연어 지시** vs **구조화된 [Spec-kit](https://github.com/github/spec-kit) 명세**의 효율성 차이를 정량 측정하는 실험

## 실험 결과 요약

| 지표 | Case A (자연어) | Case B (Spec-kit) |
|---|---|---|
| AI 추측 건수 | **24건** | **0건** |
| `any` 타입 사용 | 5건 | 0건 |
| ARIA 접근성 속성 | 0건 | 13건 |
| 에지 케이스 커버 | 1/8 (12.5%) | 8/8 (100%) |
| 종합 점수 | 3.5/10 | 9.8/10 |

> 상세 분석은 [REPORT.md](./REPORT.md) 참조

## 실험 대상

**Agentic Dynamic Showcase** — 스크롤 반응형 필터 + 데이터 로딩 상태(Skeleton) + 에러 핸들링이 결합된 지능형 프로젝트 갤러리

## 저장소 구조

```
experiments/
├── case-a-natural-lang/   # "부드러운 애니메이션 넣어줘" 식의 모호한 지시
│   ├── spec.md            # 자연어 명세
│   ├── guess.log          # AI가 추측한 24건의 기록
│   └── src/               # AI 생성 코드 (9파일, 481줄)
└── case-b-spec-kit/       # "spring, stiffness: 300, damping: 20" 식의 정밀 명세
    ├── spec.md            # Spec-kit 구조화 명세
    └── src/               # AI 생성 코드 (18파일, 903줄)
```

## 실험 환경

- **AI**: Claude Opus 4.6 (Claude Code)
- **스택**: React 18 + TypeScript + Vite 5 + Framer Motion + TanStack Query + Tailwind CSS
- **날짜**: 2026-03-16

## 로컬 실행

```bash
# Case A
cd experiments/case-a-natural-lang && npm install && npm run dev

# Case B
cd experiments/case-b-spec-kit && npm install && npm run dev
```
