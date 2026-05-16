---
question: "You defined a matrix job `example_matrix`. How can you limit the matrix to run a maximum of 2 jobs at a time?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstrategymax-parallel"
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
- <input type="checkbox" disabled> Set `jobs.example_matrix.strategy.max-parallel` to 2
- <input type="checkbox" disabled> Set `jobs.example_matrix.strategy.concurrency` to 2
- <input type="checkbox" disabled> Use GitHub's REST API to check if the job count is lesser than 2
- <input type="checkbox" disabled> It's not possible, a matrix will always run all of the jobs in parallel if there are runners available

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
- [x] Set `jobs.example_matrix.strategy.max-parallel` to 2
> Set `jobs.example_matrix.strategy.max-parallel: 2` to cap concurrent matrix legs. With six `version` × `os` combinations in the example, GitHub runs at most two at once and queues the rest until a slot frees up—useful to avoid overloading shared runners or rate-limited APIs.
