---
question: "¿Cuál definición de trabajo de matriz es sintácticamente correcta?"
documentation: "https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs#using-a-matrix-strategy"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> 
```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```

- <input type="checkbox" disabled> 
```yaml
jobs:
  example_matrix:
    matrix:
      strategy:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```

- <input type="checkbox" disabled> 
```yaml
jobs:
  example_matrix:
    matrix:
      version: [10, 12, 14]
      os: [ubuntu-latest, windows-latest]
```

- <input type="checkbox" disabled> 
```yaml
jobs:
  matrix:
    version: [10, 12, 14]
    os: [ubuntu-latest, windows-latest]
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

- [x] 
```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```

- [ ] 
```yaml
jobs:
  example_matrix:
    matrix:
      strategy:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```

- [ ] 
```yaml
jobs:
  example_matrix:
    matrix:
      version: [10, 12, 14]
      os: [ubuntu-latest, windows-latest]
```

- [ ] 
```yaml
jobs:
  matrix:
    version: [10, 12, 14]
    os: [ubuntu-latest, windows-latest]
```
