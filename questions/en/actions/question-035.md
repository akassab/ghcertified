---
question: "To prevent a job from failure when one of the steps fails you can include:"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> `continue-on-error` flag in the failing step
```yaml
steps:
    - uses: my-org/failing-action@v1
      continue-on-error: true
```
- <input type="checkbox" disabled> `ignore-error` flag in the failing step
```yaml
steps:
    - uses: my-org/failing-action@v1
      ignore-error: true
```
- <input type="checkbox" disabled> `failure()` conditional in the failing step
```yaml
steps:
    - uses: my-org/failing-action@v1
      if: failure()
```
- <input type="checkbox" disabled> `always()` conditional in the failing step
```yaml
steps:
    - uses: my-org/failing-action@v1
      if: always()
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

- [x] `continue-on-error` flag in the failing step
```yaml
steps:
    - uses: my-org/failing-action@v1
      continue-on-error: true
```
> `continue-on-error: true` on a step marks it failed for reporting but lets the job continue—later steps still run and the job can succeed overall. Use it when a linter or smoke test should not block deployment if it flakes.
