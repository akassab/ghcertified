---
question: "Twoje workflow analizy Pull Request wykorzystuje wiele narzędzi do analizy kodu i trwa około 20 minut, aby zakończyć. Jest uruchamiane na zdarzenie `pull_request` z filtrem `branches` ustawionym na `master`. W związku z tym, jeśli deweloper wykonuje wiele commitów w ciągu kilku minut, wiele workflow działa równolegle. Jak można zatrzymać wszystkie wcześniejsze uruchomienia workflow i uruchomić tylko to z najnowszymi zmianami?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-using-concurrency-to-cancel-any-in-progress-job-or-run"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Użyj `concurrency` z `cancel-in-progress`
```yaml
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
```
- <input type="checkbox" disabled> Użyj `concurrency`
```yaml
concurrency:
  group: ${{ github.ref }}
```

- <input type="checkbox" disabled> Użyj filtru typów aktywności
```yaml
on:
  pull_request:
    branches:
      - master
    types: [latest]
```
- <input type="checkbox" disabled> Użyj flagi `cancel-in-progress` dla zdarzenia `pull_request`
```yaml
on:
  pull_request:
    branches:
      - master
    cancel-in-progress: true
```

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

- [x] Użyj `concurrency` z `cancel-in-progress`
```yaml
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
```
- [ ] Użyj `concurrency`
```yaml
concurrency:
  group: ${{ github.ref }}
```
> To ustawi w kolejce uruchomienia na tym samym github ref. Nie zatrzyma to poprzednich uruchomień

- [ ] Użyj filtru typów aktywności
```yaml
on:
  pull_request:
    branches:
      - master
    types: [latest]
```
> Nie ma takiego typu aktywności jak `latest` dla zdarzenia pull_request
- [ ] Użyj flagi `cancel-in-progress` dla zdarzenia `pull_request`
```yaml
on:
  pull_request:
    branches:
      - master
    cancel-in-progress: true
```
> `cancel-in-progress` może być używane tylko wewnątrz bloku `concurrency`. Nie jest to prawidłowy klucz dla `pull_request`.
