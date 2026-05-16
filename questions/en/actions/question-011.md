---
question: "In a workflow with multiple jobs the default behavior is:"
documentation: "https://docs.github.com/en/actions/using-workflows/about-workflows#creating-dependent-jobs"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> All jobs run in parallel
- <input type="checkbox" disabled> Jobs run in sequence
- <input type="checkbox" disabled> Jobs run based on the order they are defined in the workflow file
- <input type="checkbox" disabled> Only the first job runs, others require manual approval

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

- [x] All jobs run in parallel
> **Simple:** By default every job without `needs` starts at once—parallel, not one-after-another.
>
> **Detailed:** In this workflow shape:
>
> ```yaml
> jobs:
>   lint:
>     runs-on: ubuntu-latest
>   test:
>     runs-on: ubuntu-latest
>   build:
>     runs-on: ubuntu-latest
> ```
>
> All three queue immediately on available runners. Order in the YAML file does **not** imply sequence. Add `needs: [build]` on `deploy` when `deploy` must wait. Misconception: jobs run top-to-bottom like script lines—they form a dependency graph, and the default is parallel execution.
