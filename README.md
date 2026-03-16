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

## 실험 요약

동일한 기능("프로젝트 필터링 시스템")을 두 가지 방식으로 AI에게 지시하고 결과를 비교했다.

- **Case A** — `"카테고리 버튼을 누르면 부드럽게 필터링되어야 함"` 수준의 자연어 지시. AI는 애니메이션 속도(0.3s), 전환 모드(popLayout), 색상(indigo-500) 등 **11가지 값을 임의로 결정**했고, 접근성(ARIA)과 CLS 방지는 아예 누락됨.
- **Case B** — prd.md에 Constitution(불변 원칙 5개), spec.md에 State Machine(exit 0.2s/enter 0.3s), UI Spec(정확한 Tailwind 클래스), Edge Case(빠른 연속 클릭, 빈 결과 복귀 버튼)를 사전 정의. **AI 추측 0건**, 첫 구현에서 프로덕션 수준 달성.

문서 작성에 +41줄(30줄→71줄)을 투자한 결과, 수정 요청 0회 + 할루시네이션 0건을 달성. 이 결과를 바탕으로 spec-kit 방법론을 [글로벌 AI-SDLC 설정](https://github.com/sunyoung-lee/global-configs)의 12번째 Background Skill로 통합했다.

## 데이터 출처

[agentic-portfolio](https://github.com/sunyoung-lee/agentic-portfolio) 프로젝트 데이터 기반

## 참고

- [Spec-kit](https://github.com/github/spec-kit) — 이 실험의 Case B에서 사용한 제약 기반 명세 방법론

## Tech Stack

Vite + React 19 + TypeScript + Tailwind CSS 4 + Framer Motion
