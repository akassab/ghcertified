---
question: "Jak można pominąć wykonywanie kolejnego uruchomienia workflow podczas commitowania lub tworzenia PR?"
documentation: "https://docs.github.com/en/actions/managing-workflow-runs/skipping-workflow-runs"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

```yaml
name: Build
on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    name: Extract artifact version
...
```

- <input type="checkbox" disabled> Poprzez umieszczenie jednego z poniższych słów kluczowych w wiadomości commit lub w tytule pull-request
```yaml
[skip ci]
[ci skip]
[no ci]
[skip actions]
[actions skip]
```

- <input type="checkbox" disabled> Umieszczenie `SKIP_WORKFLOW` w wiadomości commit
- <input type="checkbox" disabled> Powyższy workflow będzie uruchamiany przy każdym zdarzeniu push lub pull request w każdym przypadku

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
name: Build
on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    name: Extract artifact version
...
```

- [x] Poprzez umieszczenie jednego z poniższych słów kluczowych w wiadomości commit lub w tytule pull-request
```yaml
[skip ci]
[ci skip]
[no ci]
[skip actions]
[actions skip]
```

- [ ] Umieszczenie `SKIP_WORKFLOW` w wiadomości commit
- [ ] Powyższy workflow będzie uruchamiany przy każdym zdarzeniu push lub pull request w każdym przypadku
