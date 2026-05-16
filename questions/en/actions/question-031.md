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
> In job `if` expressions you can reference the `github` context without `${{ }}` for simple comparisons. `github.repository` is `owner/name`, so this restricts the deploy job to one repository.

- [x] `if: ${{ github.repository == 'my-org/my-repo' }}`
> The explicit expression form is equivalent: `${{ }}` evaluates the comparison and returns a boolean for the `if`. Both forms correctly gate the job on the repository identity.
