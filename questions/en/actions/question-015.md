---
question: "Which matrix job definition is syntactically correct?"
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

> **Simple:** Matrix belongs under `jobs.<id>.strategy.matrix`—not directly under the job, and not with `matrix`/`strategy` swapped.
>
> **Detailed:** Valid structure:
>
> ```yaml
> jobs:
>   example_matrix:
>     strategy:
>       matrix:
>         version: [10, 12, 14]
>         os: [ubuntu-latest, windows-latest]
>     runs-on: ${{ matrix.os }}
> ```
>
> Invalid: `jobs.example_matrix.matrix.strategy` (reversed keys) or `matrix:` without `strategy:`. Three versions × two OS values = **six** job instances (all combinations). Each leg can use `${{ matrix.version }}` and `${{ matrix.os }}` in expressions.
