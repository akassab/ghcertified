---
question: "You have a workflow that uses the matrix below. If a job in the matrix fails, how can you ensure other in-progress and queued jobs in the matrix are not cancelled?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-syntax#jobsjob_idstrategyfail-fast"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

```yaml
jobs:
  deploy:
    strategy:
      matrix:
        version: ["1", "1.2", "1.3"]
        os: [ubuntu-latest, windows-latest]
```

- <input type="checkbox" disabled> Set `jobs.<job_id>.strategy.fail-fast` to `false`
- <input type="checkbox" disabled> Nothing needs to be done, since `jobs.<job_id>.strategy.fail-fast` has a default setting of `false`
- <input type="checkbox" disabled> Set `jobs.<job_id>.strategy.matrix.fail-fast` to `false`
- <input type="checkbox" disabled> Nothing needs to be done, since `jobs.<job_id>.strategy.matrix.fail-fast` has a default setting of `false`
- <input type="checkbox" disabled> There is no way to enforce this behavior, it cannot be worked around.

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
  deploy:
    strategy:
      matrix:
        version: ["1", "1.2", "1.3"]
        os: [ubuntu-latest, windows-latest]
```

- [x] Set `jobs.<job_id>.strategy.fail-fast` to `false`
> **Simple:** Set `strategy.fail-fast: false` so one failing matrix leg does not cancel the others.
>
> **Detailed:** `fail-fast` defaults to **true**, so one failing matrix job cancels siblings—useful to save minutes when any failure invalidates the build. With `fail-fast: false`, every OS/version combination runs to completion (for example, to collect all test failures). For the question’s six jobs (`version` × `os`), Ubuntu failing no longer stops Windows legs from finishing.
