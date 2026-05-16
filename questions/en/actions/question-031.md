---
question: "What `jobs.job_id.if` conditional will make sure that job `production-deploy` is triggered only on `my-org/my-repo` repository?"
documentation: "https://docs.github.com/en/actions/learn-github-actions/contexts#github-context"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

```yaml
jobs:
  production-deploy:  
    if: <CONDITION>
    runs-on: ubuntu-latest
    steps:
      ...
```
- <input type="checkbox" disabled> `if: github.repository == 'my-org/my-repo'`
- <input type="checkbox" disabled> `if: ${{ github.repository == 'my-org/my-repo' }}`
- <input type="checkbox" disabled> `if: ${{ github.organization == 'my-org' && github.repository == 'my-repo' }}`
- <input type="checkbox" disabled> `if: ${{ github.org == 'my-org' && github.repository == 'my-repo' }}`

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
  production-deploy:  
    if: <CONDITION>
    runs-on: ubuntu-latest
    steps:
      ...
```
- [x] `if: github.repository == 'my-org/my-repo'`
> **Simple:** Compare `github.repository` to `owner/name` so deploy only runs in your repo—not on forks.
>
> **Detailed:** Example:
>
> ```yaml
> jobs:
>   production-deploy:
>     if: github.repository == 'my-org/my-repo'
>     runs-on: ubuntu-latest
>     steps:
>       - run: ./deploy-prod.sh
> ```
>
> On a fork `other-user/my-repo`, the condition is false and the job is skipped. Job-level `if` allows this form without wrapping in `${{ }}` for many expressions.

- [x] `if: ${{ github.repository == 'my-org/my-repo' }}`
> **Simple:** The `${{ }}` form is equivalent—both gate `production-deploy` to `my-org/my-repo` only.
>
> **Detailed:** Same behavior:
>
> ```yaml
> if: ${{ github.repository == 'my-org/my-repo' }}
> ```
>
> `github.repository` is always `owner/repo` for the repository where the workflow runs. Misconception: checking `github.actor` or branch name—those do not prove the repo is canonical; forks can run the same workflow file on `main` but still must not deploy prod secrets.
