# Spec-kit Efficiency Test v2

자연어 지시 vs Spec-kit 제약 조건 기반 AI 코딩의 효율성을 비교하는 실험 레포.

## 실험 과제

**"지능형 프로젝트 필터링 시스템"** — 카테고리 필터링 + Framer Motion 애니메이션 + Empty State 처리

## 브랜치 구조

| 브랜치 | 설명 |
|:---|:---|
| `main` | 공통 기반 (Vite + React + TS + Tailwind) + REPORT.md |
| `experiment/natural-lang` | **Case A** — 모호한 자연어 지시로 구현 |
| `experiment/spec-kit` | **Case B** — Constitution + Logic Spec 기반 정밀 구현 |

## 핵심 결과

| 항목 | Case A (자연어) | Case B (Spec-kit) |
|:---|:---:|:---:|
| AI 추측 횟수 | 11건 | 0건 |
| 접근성 (ARIA) | 미구현 | 완비 |
| CLS 방지 | 미구현 | 구현 |
| Empty State | 이모지 + 텍스트 | SVG + 복귀 버튼 |
| 1차 성공률 | ~60% | ~100% |

> Spec-kit 문서 +41줄 투자로 수정 루프 0회 + 할루시네이션 0건 달성.

상세 분석은 [REPORT.md](./REPORT.md) 참조.

## 데이터 출처

[agentic-portfolio](https://github.com/sunyoung-lee/agentic-portfolio) 프로젝트 데이터 기반

## Tech Stack

Vite + React 19 + TypeScript + Tailwind CSS 4 + Framer Motion
