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
> **Simple:** `continue-on-error: true` on a step lets the job keep going even if that step fails.
>
> **Detailed:** The step shows as failed in the UI, but subsequent steps still run and the job can end **success** unless another step fails without the flag:
>
> ```yaml
> steps:
>   - name: Optional linter
>     uses: my-org/linter@v1
>     continue-on-error: true
>   - name: Deploy
>     run: ./deploy.sh
> ```
>
> Use for non-blocking checks (linters, experimental scans). Misconception: `continue-on-error` at job level—it's a **step** property. For matrix-wide behavior see `fail-fast` / `continue-on-error` on matrix strategy (different feature).
