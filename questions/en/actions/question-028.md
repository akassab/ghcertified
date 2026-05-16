---
question: "How can you ensure that a workflow called `Deploy Prod` is always running at most one at a time?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#concurrency"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Use `concurrency` on workflow level
```yaml
concurrency: ${{ github.workflow }}
```
- <input type="checkbox" disabled> Use `queue` on workflow level
```yaml
queue: ${{ github.workflow }}
```
- <input type="checkbox" disabled> Use `order` on workflow level
```yaml
order: ${{ github.workflow }}
```
- <input type="checkbox" disabled> Use `parallel` on workflow level
```yaml
parallel: ${{ github.workflow }}
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

- [x] Use `concurrency` on workflow level
```yaml
concurrency: ${{ github.workflow }}
```
> The `concurrency` key limits how many runs share the same group at once. Setting `concurrency: deploy-prod` (or `${{ github.workflow }}` as in the answer) puts every run of **Deploy Prod** in one group so only one executes at a time; the next run waits in queue until the current one finishes.
