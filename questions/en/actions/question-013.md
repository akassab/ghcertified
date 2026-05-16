---
question: "In a workflow with multiple jobs, if job A fails then:"
documentation: "https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-jobs#defining-prerequisite-jobs"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> the jobs that are dependent on job A are skipped
- <input type="checkbox" disabled> the jobs that are dependent on job A fail
- <input type="checkbox" disabled> the workflow immediately cancels all other jobs

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

- [x] the jobs that are dependent on job A are skipped
> **Simple:** If job A fails, jobs with `needs: A` are **skipped**—they do not run unless you use `if: always()` or similar.
>
> **Detailed:** Example:
>
> ```yaml
> jobs:
>   test:
>     runs-on: ubuntu-latest
>     steps:
>       - run: npm test   # fails
>   deploy:
>     needs: test
>     runs-on: ubuntu-latest
> ```
>
> `deploy` shows **Skipped** in the UI, not Failed. Unrelated jobs without a `needs` path to `test` continue. To run cleanup anyway: `if: ${{ always() }}` on the downstream job. Matrix jobs can use `strategy.fail-fast: true` to cancel sibling matrix legs when one fails—different from the default `needs` skip behavior.
