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
> **Simple:** The base matrix is 2×2 = 4 jobs; `include` adds `macos-latest` + `node: 18` for a fifth—duplicate pairs do not add extra jobs.
>
> **Detailed:** The matrix builds the Cartesian product of `os` × `node`: `ubuntu-latest`/`14`, `ubuntu-latest`/`16`, `windows-latest`/`14`, and `windows-latest`/`16`—four jobs. The `include` entry adds `macos-latest` with `node: 18` as a fifth combination. A second `include` row matching `ubuntu-latest`/`14` does not create a duplicate because that pair already exists from the product. Count matrix jobs as unique combinations of all matrix keys after merging `include` and `exclude`.
