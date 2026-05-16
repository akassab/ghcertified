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
> **Simple:** Set `strategy.max-parallel: 2` on the matrix job to run at most two legs at once.
>
> **Detailed:** With six combinations in the question's matrix:
>
> ```yaml
> jobs:
>   example_matrix:
>     strategy:
>       max-parallel: 2
>       matrix:
>         version: [10, 12, 14]
>         os: [ubuntu-latest, windows-latest]
>     runs-on: ${{ matrix.os }}
> ```
>
> GitHub runs two matrix jobs concurrently and queues the other four until slots free. Misconception: `max-parallel` at workflow root—it belongs under `jobs.<id>.strategy`. Unlike `concurrency`, this only throttles legs of **one** matrix job, not whole workflow runs.
