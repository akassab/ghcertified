---
question: "To run a `step` only if the secret `MY_SECRET` has been set, you can:"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-using-secrets"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Set the secret `MY_SECRET` as a job level environment variable, then reference that environment variable to conditionally run that step
```yaml
my-job:
  runs-on: ubuntu-latest
  env:
    my_secret: ${{ secrets.MY_SECRET }}
  steps:
    - if: ${{ env.my_secret != '' }}
```
- <input type="checkbox" disabled> By creating the following conditional on job level
```yaml
my-job:
  runs-on: ubuntu-latest
  if: ${{ secrets.MY_SECRET == '' }}
```
- <input type="checkbox" disabled> By creating the following conditional on step level
```yaml
my-job:
  runs-on: ubuntu-latest
  steps:
    - if: ${{ secrets.MY_SECRET == '' }}
```
- <input type="checkbox" disabled> By creating the following conditional on step level
```yaml
my-job:
  runs-on: ubuntu-latest
  steps:
    - if: ${{ secrets.MY_SECRET }}
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

- [x] Set the secret `MY_SECRET` as a job level environment variable, then reference that environment variable to conditionally run that step
```yaml
my-job:
  runs-on: ubuntu-latest
  env:
    my_secret: ${{ secrets.MY_SECRET }}
  steps:
    - if: ${{ env.my_secret != '' }}
```
> **Simple:** Copy the secret to a job-level `env` variable, then use `if: ${{ env.my_secret != '' }}` on the step—`secrets` cannot be used directly in `if`.
>
> **Detailed:** `secrets` **cannot** be used directly in `if:` expressions—`if: ${{ secrets.MY_SECRET }}` will not work as intended. Pattern:
>
> ```yaml
> my-job:
>   runs-on: ubuntu-latest
>   env:
>     my_secret: ${{ secrets.MY_SECRET }}
>   steps:
>     - if: ${{ env.my_secret != '' }}
>       run: ./needs-secret.sh
> ```
>
> The step runs only when the secret is set. GitHub still **masks** secret values in logs when possible—avoid echoing the env var. Job-level `if: ${{ secrets.MY_SECRET == '' }}` is also invalid for the same reason.
