---
title: Interest Rate Curve Construction
subtitle: OIS / IRS bootstrapping, interpolation, and sensitivity analysis
domain: Rates · Numerical Methods
summary: OIS와 IRS 호가에서 무위험 할인 곡선을 부트스트래핑하고, 보간법 선택이 곡선 형태에 미치는 영향을 분석합니다.
order: 1
status: in-progress
date: 2025-01-01
github:
related_posts: []
---

## Problem

금리 파생상품의 가격 결정과 리스크 관리에는 무위험 할인 곡선(discount curve)이 필요합니다. LIBOR 개혁 이후 OIS(Overnight Index Swap) 금리가 기준이 되었고, 시장 호가에서 연속적인 할인 곡선을 역산(bootstrap)하는 것이 첫 번째 과제입니다.

**핵심 질문:** 시장에서 관측되는 유한 개의 스왑 호가로부터 임의의 만기에 대한 할인 인자(discount factor)를 어떻게 추출하는가?

## Methodology

부트스트래핑의 핵심 아이디어는 순차적 역산입니다. 고정금리 $K$를 지급하고 변동금리를 수취하는 IRS의 현재가치가 0인 조건:

$$
K \sum_{i=1}^{n} \tau_i P(0, T_i) = \sum_{i=1}^{n} \tau_i F(T_{i-1}, T_i) P(0, T_i)
$$

여기서 $P(0, T)$는 $T$까지의 할인 인자, $F(T_{i-1}, T_i)$는 선도 금리입니다.

단기 구간부터 순서대로 $P(0, T_i)$를 역산하고, 호가 사이 구간은 보간법으로 채웁니다.

**보간법 비교:**
- Linear on zero rates
- Linear on log-discount factors (= constant forward rate)
- Cubic spline on zero rates
- Natural cubic spline

## Implementation

Python으로 구현 중입니다. 주요 구성요소:

- `Instrument`: DepositRate, FRA, IRS의 현금흐름 생성
- `Bootstrapper`: 순차 역산 루프
- `Interpolator`: 각 보간법 클래스
- `Curve`: 임의 만기에 대한 할인 인자·제로 금리·선도 금리 조회

## Status

현재 선형 보간 기반 OIS 부트스트래핑까지 구현 완료. 큐빅 스플라인 및 감도 분석(DV01) 작업 중입니다.
