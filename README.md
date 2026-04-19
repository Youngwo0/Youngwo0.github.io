# Youngwo0.github.io

정량금융, 파생상품, 확률과정, 시장 해석, 프로젝트 로그를 축적하는 Jekyll 기반 블로그 저장소.

이 저장소는 단순한 개인 블로그가 아니라 다음 목적을 가진 공개 지식 베이스를 지향한다.

- 공부한 내용을 다시 설명할 수 있을 정도로 구조화하기
- 시장과 개념을 해석하는 사고 과정을 남기기
- 인터뷰, 프로젝트, 발표에 다시 활용할 수 있는 포트폴리오 만들기

## 콘텐츠 구조

- `_posts`
  - 발행된 글
- `_drafts`
  - 발행 전 원고
- `notes`
  - 원시 메모, 분류 초안, 발행 전 소스 노트

## 현재 카테고리 원칙

- `Quant Notes`
  - `Mathematical Foundations`
  - `Derivatives & Stochastic Calculus`
- `Market Notes`
  - `Macro & Rates`
  - `FX & Cross-Asset`
  - `Credit & Structured Products`
- `Project Logs`
  - `Research Notes`
- `Reading Notes`
  - `Books & Papers`

## 글 작성 워크플로우

1. 아이디어와 자료는 `notes/`에 모은다.
2. 발행 후보는 `_drafts/`에서 구조를 잡는다.
3. 검토가 끝난 글만 `_posts/`로 옮긴다.

## 글쓰기 원칙

- 기본 언어는 한국어
- 영어는 필요한 경우에만 짧게 보조적으로 사용
- 직관을 먼저 설명하고, 수식과 형식화를 뒤에 둔다
- 기술적 모호성은 감추지 않고 명시한다
- 시장 글은 기사 요약보다 해석과 의미를 남긴다

## 로컬 실행

```bash
bundle exec jekyll serve
```

## 테마

테마는 `jekyll-theme-chirpy`를 기반으로 사용한다. 다만 저장소의 정보구조, 카테고리, 홈 화면, 소개 페이지는 블로그 목적에 맞게 커스터마이즈한다.
