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
> `jobs.<job_id>.strategy.fail-fast` is set to `true` by default, meaning if one matrix job fails, other in-progress and queued matrix jobs will be cancelled. You must explicitly set `fail-fast` to `false` to avoid this behavior.
