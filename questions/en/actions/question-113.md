---
question: "What is true about the following workflow configuration if triggered against the `octo/my-dev-repo` repository?"
documentation: "https://docs.github.com/en/actions/using-jobs/using-conditions-to-control-job-execution"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

```yaml
name: deploy-workflow
on: [push]
jobs:
    production-deploy:
        if: github.repository == 'octo/my-prod-repo'
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v4
            - uses: actions/setup-node@v4
              with:
                  node-version: '14'
            - run: npm install -g bats
```
- <input type="checkbox" disabled> the `production-deploy` job will be marked as skipped
- <input type="checkbox" disabled> the `production-deploy` job will error
- <input type="checkbox" disabled> the `production-deploy` job will execute three steps
- <input type="checkbox" disabled> the `production-deploy` job will run if the `node-version` is `14`

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
name: deploy-workflow
on: [push]
jobs:
    production-deploy:
        if: github.repository == 'octo/my-prod-repo'
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v4
            - uses: actions/setup-node@v4
              with:
                  node-version: '14'
            - run: npm install -g bats
```
- [x] the `production-deploy` job will be marked as skipped
> **Simple:** When the job `if` is false, the job is **skipped**—not failed—and its steps do not run.
>
> **Detailed:** The workflow file can live in multiple repositories if reused or copied. Here `production-deploy` only runs when the repository is exactly `octo/my-prod-repo`:
>
> ```yaml
> production-deploy:
>   if: github.repository == 'octo/my-prod-repo'
>   runs-on: ubuntu-latest
>   steps:
>     - uses: actions/checkout@v4
> ```
>
> A push to `octo/my-dev-repo` still triggers the workflow (`on: [push]`), but the condition is **false**, so GitHub marks `production-deploy` as **skipped**. Skipped jobs do not run steps and do not count as failures for the overall run unless another job uses `needs: production-deploy` without handling skip. The workflow run can still show **success** with one or more skipped jobs.
