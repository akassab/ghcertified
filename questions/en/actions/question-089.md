---
question: "Which of the following can be used to limit the number of concurrent jobs running in a GitHub Actions workflow?"
documentation: "https://docs.github.com/en/enterprise-cloud@latest/actions/using-jobs/using-concurrency"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> concurrency
- <input type="checkbox" disabled> limit
- <input type="checkbox" disabled> max-jobs
- <input type="checkbox" disabled> parallelism

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

- [x] concurrency
> **Simple:** Top-level `concurrency` with a `group` name limits overlapping workflow runs; `cancel-in-progress: true` cancels older runs in the same group.
>
> **Detailed:** `concurrency` applies to **workflow runs**, not individual matrix cells by default (unless you include matrix values in the group expression):
>
> ```yaml
> concurrency:
>   group: deploy-${{ github.ref }}
>   cancel-in-progress: true
> jobs:
>   deploy:
>     runs-on: ubuntu-latest
>     steps:
>       - run: ./migrate.sh
> ```
>
> Only one run in `deploy-refs/heads/main` executes at a time; a newer push cancels the in-flight deploy when `cancel-in-progress` is true. Invalid distractors include `limit`, `max-jobs`, and `parallelism`—those are not GitHub Actions keys. Use `concurrency` when parallel deploys or migrations would conflict on shared infrastructure.
