---
question: "What does the `needs` keyword do in a GitHub Actions workflow?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Specifies the dependencies of a job
- <input type="checkbox" disabled> Defines environment variables
- <input type="checkbox" disabled> Sets up the environment
- <input type="checkbox" disabled> Triggers a job based on an event

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

- [x] Specifies the dependencies of a job
> **Simple:** `needs` lists job IDs that must succeed before this job starts; failed dependencies skip the dependent job.
>
> **Detailed:** By default, jobs in one workflow run in parallel when runners are free. `needs` creates a directed dependency graph:
>
> ```yaml
> jobs:
>   build:
>     runs-on: ubuntu-latest
>     steps:
>       - run: npm run build
>   test:
>     needs: build
>     runs-on: ubuntu-latest
>     steps:
>       - run: npm test
>   deploy:
>     needs: [build, test]
>     runs-on: ubuntu-latest
>     steps:
>       - run: ./deploy.sh
> ```
>
> `test` waits until `build` completes successfully. If `build` fails, `test` and `deploy` are **skipped** (not retried automatically). `needs` does not set `env` variables, select GitHub Environments, or define triggers—that is `env:`, `environment:`, and `on:` respectively.
