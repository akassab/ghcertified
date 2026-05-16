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
> **Simple:** Set `concurrency` so only one run in the same group executes at a time—the rest wait in queue.
>
> **Detailed:** For workflow **Deploy Prod**, serialize all runs:
>
> ```yaml
> name: Deploy Prod
> on: push
>   branches: [main]
> concurrency: Deploy Prod
> # or dynamic:
> concurrency: ${{ github.workflow }}
> jobs:
>   deploy:
>     runs-on: ubuntu-latest
> ```
>
> Same group string → at most **one** active run; new runs wait. Different group strings run independently. Misconception: `concurrency` cancels old runs by default—it only queues unless you add `cancel-in-progress: true` (see question-029).
