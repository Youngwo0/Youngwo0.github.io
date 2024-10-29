---
title: Log Normal Distribution
date: 2024-10-29 21:00:39 +09:00
categories: [Math&Stat]
tags: [Log Normal Distribution]
math: true
---

금융공학에 관련하여 공부했던 것들을 천천히 정리해나가고자 합니다.

수학적인 부분이 나올때마다 정리하기 보다는, 하나의 카테고리를 만들어 자주 사용되는 개념들을 미리 작성해두고자 합니다.

이번 글에서는 Log Normal Distribution에 관하여 이야기해보고자 합니다.

---

# Log Normal Distribution(로그노말분포, 대수정규분포)


어떤 확률변수 X가 로그노말분포를 따른다는 것은 기호로 다음과 같이 씁니다.

$$X \sim LN(\mu,\sigma^2)$$


어떤 확률변수 $X$가 로그노말분포를 따를때, 확률변수 $X$는 다음을 만족합니다.

$$\ln(X) \sim N(\mu,\sigma^2)$$

즉, 어떤 확률변수에 자연로그를 취한 것이 정규분포를 따를 때 우리는 그 확률변수를 "로그노말분포를 따른다"고 이야기 할 수 있습니다.

로그의 성질로 인해, 로그노말분포를 따르는 확률변수 $X$는 항상 양수값을 갖게됩니다. 따라서 정규분포가 음수값을 가짐으로 인해 발생하는 문제에 대한 좋은 대안이 될 수 있습니다.

또한, CLT의 또다른 형태인 Mutiplicative CLT에도 활용될 수 있습니다.

핵심적으로, 로그함수는 다음과 같이 쓸 수 있다는 점을 떠올려볼 수 있습니다.

$$\frac{\Delta \ln x}{\Delta x} = \frac{1}{x}$$

$$\Delta \ln x = \frac{\Delta x}{x}$$

즉, 어떤 변수 $x$의 변화율을 우리는 $\ln x$로 쓸 수 있으며, $x$가 로그노말분포를 따른다고 가정하면 그 변화율은 정규분포를 따르는 것으로 생각할 수 있습니다.

이를 금융공학의 영역에서 생각한다면, 주가의 분포를 로그노말분포로 가정함으로써 음수 주가의 가능성을 제거하는 한변, 주가의 변화율인 수익률이 합리적으로, 정규분포를 따른다는 가정까지 함께 가져갈 수 있게 되는 것입니다.

이제 $\ln(X)$를 표준화하고, 식을 정리하면 표준정규분포를 따르는 $Z$ 또는 $\epsilon$에 대하여 다음과 같이 쓸 수 있습니다.

$$Z = \frac{\ln(X)-\mu}{\sigma} \sim N(0,1)$$

$$X = e^{\mu+\sigma Z} = e^{\mu+\sigma \epsilon}, \epsilon \sim N(0,1)$$

$$\ln(X) = \mu+\sigma \epsilon, \epsilon \sim N(0,1)$$

---

## 1. Log Normal Distribution의 CDF(Cumulative Distribution Function)


정규분포의 CDF를 $\Phi_{\mu,\sigma^2}$라고 할 때, 로그노말분포를 따르는 확률변수 $X$의 CDF를 다음과 같이 쓸 수 있습니다.

$$F(x) = \mathbb{P}(X \le x) = \mathbb{P}(\ln(X) \le \ln(x)) = \Phi_{\mu,\sigma^2}(\ln(x))$$

---

## 2. Log Normal DIstribution의 PDF(Probability Density Function)


정규분포의 PDF를 $\phi_{\mu,\sigma^2}$라고 할 때, 로그노말분포를 따르는 확률변수 $X$의 CDF를 미분하여 PDF를 구할 수 있습니다.

$$f_X(x) = {d \over dx} \mathbb{P}(X \le x) = {d \over dx} \mathbb{P}(\ln(X) \le \ln(x)) = {d \over dx} \Phi_{\mu,\sigma^2}(\ln(x))$$

$$f_X(x) = {1 \over x} \phi_{\mu,\sigma^2}(\ln(x))$$

---

## 3. Expectation of Log Normal Distribution


로그노말분포를 따르는 확률변수 $X$의 기댓값을 다음과 같이 기댓값의 정의를 통해 계산할 수 있습니다.

$$\mathbb{E}\left[X\right] = \int_0^\infty xf_X(x) dx = \int_0^\infty x \left( {1 \over x} \phi_{\mu,\sigma^2}(\ln(x))\right)dx$$

$$\int_0^\infty  \phi_{\mu,\sigma^2}(\ln(x))dx$$

$$\text{let} \; \ln(x) = t, \mathbb{E}\left[X\right]=\int_{-\infty}^\infty  \phi_{\mu,\sigma^2}(t)e^tdt$$

---

$$e^t \cdot \phi_{\mu,\sigma^2}(t) = \frac{1}{\sqrt{2 \pi}\sigma} \exp \left[-\frac{(t-\mu)^2}{2 \sigma^2} + t \right] $$

$$= \frac{1}{\sqrt{2 \pi}\sigma} \exp \left[-\frac{(t-\mu)^2-2 \sigma^2t}{2 \sigma^2} \right]$$

$$= \frac{1}{\sqrt{2 \pi}\sigma} \exp \left[-\frac{t^2-2(\mu + \sigma^2 )t + \mu ^2}{2 \sigma^2} \right] $$

$$= \frac{1}{\sqrt{2 \pi}\sigma} \exp \left[-\frac{t^2-2(\mu + \sigma^2 )t + (\mu + \sigma^2)^2 - (\mu + \sigma^2)^2 + \mu ^2}{2 \sigma^2} \right]$$

$$= \frac{1}{\sqrt{2 \pi}\sigma} \exp \left[-\frac{(t-(\mu + \sigma^2))^2 - (\mu + \sigma^2)^2 + \mu ^2}{2 \sigma^2} \right]$$

$$= \frac{1}{\sqrt{2 \pi}\sigma} \exp \left[-\frac{(t-(\mu + \sigma^2))^2}{2 \sigma^2} +\frac{\mu^2+2 \mu \sigma^2 + \sigma^4 - \mu^2}{2 \sigma^2}\right]$$

$$= \frac{1}{\sqrt{2 \pi}\sigma} \exp \left[-\frac{(t-(\mu + \sigma^2))^2}{2 \sigma^2} +\frac{2 \mu \sigma^2 + \sigma^4}{2 \sigma^2}\right]$$

$$= \frac{1}{\sqrt{2 \pi}\sigma} \exp \left[-\frac{(t-(\mu + \sigma^2))^2}{2 \sigma^2} +\mu + {1 \over 2} \sigma^2\right]$$

$$= e^{\mu + {1 \over 2} \sigma^2} \cdot \frac{1}{\sqrt{2 \pi}\sigma} \exp \left[-\frac{(t-(\mu + \sigma^2))^2}{2 \sigma^2}\right]$$

$$= e^{\mu + {1 \over 2} \sigma^2} \cdot \phi_{\mu + \sigma^2, \sigma^2}(t) \cdots (1)$$

---

$$ \text{Thus,} \; \mathbb{E}[X] = e^{\mu + {1 \over 2} \sigma^2} \int_{-\infty}^\infty  \phi_{\mu+\sigma^2,\sigma^2}(t)dt$$

$$\int_{-\infty}^\infty  \phi_{\mu+\sigma^2,\sigma^2}(t)dt = 1$$

$$\text{Therefore,} \;\mathbb{E}[X] = e^{\mu + {1 \over 2} \sigma^2}$$

---

## 4. Variance of Log Normal Distribution

$$\mathbb{E}\left[X^2\right] = \int_0^\infty x^2f_X(x) dx = \int_0^\infty x^2 \left( {1 \over x} \phi_{\mu,\sigma^2}(\ln(x))\right)dx$$

$$\int_0^\infty  x\phi_{\mu,\sigma^2}(\ln(x))dx$$

$$\text{let} \; \ln(x) = t, \mathbb{E}\left[X^2\right]=\int_{-\infty}^\infty  e^t\phi_{\mu,\sigma^2}(t)e^{t}dt = \int_{-\infty}^\infty  \phi_{\mu,\sigma^2}(t)e^{2t}dt$$

---

$$e^{2t} \cdot \phi_{\mu,\sigma^2}(t) = \frac{1}{\sqrt{2 \pi}\sigma} \exp \left[-\frac{(t-\mu)^2}{2 \sigma^2} + 2t \right] $$

$$= \frac{1}{\sqrt{2 \pi}\sigma} \exp \left[-\frac{(t-\mu)^2-4 \sigma^2t}{2 \sigma^2} \right]$$

$$= \frac{1}{\sqrt{2 \pi}\sigma} \exp \left[-\frac{t^2-2(\mu + 2\sigma^2 )t + \mu ^2}{2 \sigma^2} \right]$$

$$= \frac{1}{\sqrt{2 \pi}\sigma} \exp \left[-\frac{t^2-2(\mu + 2\sigma^2 )t + (\mu + 2\sigma^2)^2 - (\mu + 2\sigma^2)^2 + \mu ^2}{2 \sigma^2} \right]$$

$$= \frac{1}{\sqrt{2 \pi}\sigma} \exp \left[-\frac{(t-(\mu + 2\sigma^2))^2 - (\mu + 2\sigma^2)^2 + \mu ^2}{2 \sigma^2} \right]$$

$$= \frac{1}{\sqrt{2 \pi}\sigma} \exp \left[-\frac{(t-(\mu +2 \sigma^2))^2}{2 \sigma^2} +\frac{\mu^2+4 \mu \sigma^2 +4 \sigma^4 - \mu^2}{2 \sigma^2}\right]$$

$$= \frac{1}{\sqrt{2 \pi}\sigma} \exp \left[-\frac{(t-(\mu + 2\sigma^2))^2}{2 \sigma^2} +\frac{4 \mu \sigma^2 + 4\sigma^4}{2 \sigma^2}\right]$$

$$= \frac{1}{\sqrt{2 \pi}\sigma} \exp \left[-\frac{(t-(\mu + 2\sigma^2))^2}{2 \sigma^2} +2\mu + 2 \sigma^2\right]$$

$$= e^{2\mu + 2 \sigma^2} \cdot \frac{1}{\sqrt{2 \pi}\sigma} \exp \left[-\frac{(t-(\mu + 2\sigma^2))^2}{2 \sigma^2}\right]$$

$$= e^{2\mu + 2 \sigma^2} \cdot \phi_{\mu + 2\sigma^2, \sigma^2}(t) \cdots (2)$$

---

$$\text{Thus,} \; \mathbb{E}[X^2] = e^{2\mu + 2 \sigma^2} \int_{-\infty}^\infty  \phi_{\mu+2\sigma^2,\sigma^2}(t)dt$$

$$\int_{-\infty}^\infty  \phi_{\mu+2\sigma^2,\sigma^2}(t)dt = 1$$

$$\text{Therefore,} \; \mathbb{E}[X^2] = e^{2\mu + 2 \sigma^2}$$

---

다시 분산으로 돌아와서, 다음과 같이 계산을 마무리할 수 있습니다.

$$\mathbb{V}[X] = \mathbb{E}[X^2] - \mathbb{E}[X]^2$$

$$= e^{2\mu+2\sigma^2} - e^{2(\mu+{1 \over2}\sigma^2)}$$

$$= e^{2\mu+2\sigma^2} - e^{2\mu+\sigma^2}$$

$$= e^{2\mu+\sigma^2}(e^{\sigma^2}-1)$$

(사실 로그노말분포의 분산을  본 기억은 잘 없긴 합니다.. 그래두 계산해두면 언젠가 쓸 일이 있겠죠!)

---

## 5. In Moment Generating Function(MGF)

로그노말분포는 대표적인 모든 차수의 적률이 존재하지만 적률생성함수가 존재하지 않는 분포입니다.

따라서 MGF를 구하는 대신, 각 모멘트를 통해 기댓값과 분산만 구하고 글을 마무리하고자 합니다.

$e^{kt} \cdot \phi_{\mu,\sigma^2}(t)$로 일반화 해둔 부분을 활용하겠습니다.

$$\mathbb{E}\left[X^n\right] = \int_0^\infty x^nf_X(x) dx = \int_0^\infty x^n \left( {1 \over x} \phi_{\mu,\sigma^2}(\ln(x))\right)dx$$

$$=\frac{1}{\sqrt{2 \pi}\sigma} \int_0^\infty x^{n-1}\exp\left[-\frac{(\ln(x)-\mu)^2}{2 \sigma^2}\right]$$

$$\mathbb{E}\left[X^n\right] = \int_0^\infty x^nf_X(x) dx = \int_0^\infty x^n \left( {1 \over x} \phi_{\mu,\sigma^2}(\ln(x))\right)dx$$

$$\int_0^\infty  x^{n-1} \phi_{\mu,\sigma^2}(\ln(x))dx$$

$$\text{let} \; \ln(x) = t, \mathbb{E}\left[X^n\right]=\int_{-\infty}^\infty  e^{(n-1)t}\phi_{\mu,\sigma^2}(t)e^{t}dt = \int_{-\infty}^\infty  \phi_{\mu,\sigma^2}(t)e^{nt}dt$$

분산과 기댓값을 구할때 사용하였던 (1)과 (2)의 결과를 일반화하여, 다음과 같이 나타낼 수 있겠습니다.

$$e^{kt} \cdot \phi_{\mu,\sigma^2}(t) = e^{k\mu + {1 \over 2} k^2 \sigma^2} \cdot \phi_{\mu + k\sigma^2, \sigma^2}(t)$$


결론적으로, 모멘트는 다음과 같이 구할 수 있고 위의 결과와 일치하는 모습을 보여줍니다.

$$\mathbb{E}[X^n] = e^{n\mu + {1 \over 2} n^2 \sigma^2}$$

---

## 6. Conclusion

이상에서 로그노말분포에 관하여 살펴보았습니다.

앞으로 올릴 포스팅에서 요긴하게 사용되었으면 좋겠네요.

---
## [Reference]
- https://en.wikipedia.org/wiki/Log-normal_distribution
- https://sine-qua-none.tistory.com/53
