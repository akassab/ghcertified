---
question: "Jak można uzyskać dostęp do bieżących wartości zmiennych w macierzy w ramach zadania w poniższym przykładzie:"
documentation: "https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs#using-a-matrix-strategy"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

```yaml
jobs:
    example_matrix:
        strategy:
            matrix:
                version: [10, 12, 14]
                os: [ubuntu-latest, windows-latest]
```
- <input type="checkbox" disabled> odwołując się do zmiennych poprzez kontekst `matrix` za pomocą składni takiej jak `matrix.version` i `matrix.os`
- <input type="checkbox" disabled> używając składni `matrix.property`
- <input type="checkbox" disabled> używając słowa kluczowego `context` w konfiguracji zadania
- <input type="checkbox" disabled> uzyskując dostęp bezpośrednio do zmiennych za pomocą składni `version` i `os`

> scroll down to see correct answer

<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>
<br>

## Correct answer

```yaml
jobs:
    example_matrix:
        strategy:
            matrix:
                version: [10, 12, 14]
                os: [ubuntu-latest, windows-latest]
```
- [x] odwołując się do zmiennych poprzez kontekst `matrix` za pomocą składni takiej jak `matrix.version` i `matrix.os`
- [ ] używając składni `matrix.property`
- [ ] używając słowa kluczowego `context` w konfiguracji zadania
- [ ] uzyskując dostęp bezpośrednio do zmiennych za pomocą składni `version` i `os`
