# Spec-kit Efficiency Test

## 실험 목적

AI 코드 생성에서 **자연어 지시(Case A)** vs **구조화된 Spec-kit 명세(Case B)**의 효율성 차이를 정량적으로 측정한다.

## 실험 가설

> 구조화된 제약 조건 명세(Spec-kit)를 사용하면, 모호한 자연어 지시 대비 **첫 실행 성공률**, **할루시네이션 감소**, **코드-의도 일치도**에서 유의미한 개선이 발생한다.

## 실험 대상

**Agentic Dynamic Showcase** — 스크롤 반응형 필터, 데이터 로딩 상태(Skeleton), 에러 핸들링이 결합된 지능형 프로젝트 갤러리.

## 저장소 구조

```
.
├── experiments/
│   ├── case-a-natural-lang/      # 자연어 중심 spec.md + AI 생성 코드
│   │   ├── spec.md
│   │   └── src/
│   └── case-b-spec-kit/          # Spec-kit 구조화 명세 + AI 생성 코드
│       ├── spec.md
│       └── src/
├── metrics/
│   ├── log-a.json                # Case A 측정 로그
│   └── log-b.json                # Case B 측정 로그
├── REPORT.md                     # 실험 결과 분석 보고서
└── README.md                     # 이 파일
```

## 측정 지표

| 지표 | 설명 |
|---|---|
| 첫 실행 성공률 | 추가 수정 없이 첫 생성 코드가 정상 동작하는지 |
| 재수정 횟수 | 의도대로 동작할 때까지 필요한 수정 횟수 |
| 할루시네이션 건수 | AI가 명세에 없는 내용을 임의 추가/변경한 횟수 |
| 코드-의도 일치도 | 생성된 코드가 원래 의도와 얼마나 일치하는지 (%) |
| 인터랙션 정밀도 | 애니메이션/UX 동작이 의도한 수치/동작과 일치하는 정도 |

## 실험 환경

- **AI 모델**: Claude Opus 4.6 (Claude Code)
- **프레임워크**: React 18 + TypeScript
- **날짜**: 2026-03-16

## 실험 진행 방법

1. **Case A 먼저 실행**: `case-a-natural-lang/spec.md`를 읽고 구현. 추측 발생 시 `guess.log`에 기록.
2. **Case B 실행**: `case-b-spec-kit/spec.md`를 읽고 구현. 명세 부족 시 추측하지 않고 질문.
3. **교차 검증**: 두 결과물을 비교하고 `REPORT.md`에 분석 결과 작성.
