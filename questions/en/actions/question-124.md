---
question: "Given the following configuration, how many jobs will GitHub Actions run when this matrix is evaluated?"
documentation: "https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/running-variations-of-jobs-in-a-workflow#expanding-or-adding-matrix-configurations"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

```yaml
strategy:
  matrix:
    os: [ubuntu-latest, windows-latest]
    node: [14, 16]
    include:
      - os: macos-latest
        node: 18
      - os: ubuntu-latest
        node: 14
```

- <input type="checkbox" disabled> 4 jobs
- <input type="checkbox" disabled> 5 jobs
- <input type="checkbox" disabled> 6 jobs
- <input type="checkbox" disabled> 7 jobs
- <input type="checkbox" disabled> No jobs will run because the syntax is invalid.

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
strategy:
  matrix:
    os: [ubuntu-latest, windows-latest]
    node: [14, 16]
    include:
      - os: macos-latest
        node: 18
      - os: ubuntu-latest
        node: 14
```

- [x] 5 jobs
> The Cartesian product of `os` × `node` yields four combinations, plus `include` adds `macos-latest`/`18` and does not duplicate the existing `ubuntu-latest`/`14` pair, for five jobs total.
