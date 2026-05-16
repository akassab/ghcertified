---
question: "Which is the correct way of triggering a job only if configuration variable `MY_VAR` has the value of `MY_VALUE`?"
documentation: "https://docs.github.com/en/actions/learn-github-actions/contexts#example-usage-of-the-vars-context"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> By creating the following conditional on job level
```yaml
my-job:
  if: ${{ vars.MY_VAR == 'MY_VALUE' }}
```
- <input type="checkbox" disabled> By creating the following conditional on job level
```yaml
my-job:
  if: ${{ vars.MY_VAR }} == 'MY_VALUE'
```
- <input type="checkbox" disabled> It's not possible because configuration variables cannot be used in `if` conditionals
- <input type="checkbox" disabled> It's not possible because configuration variables cannot be used in job level `if` conditionals

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

- [x] By creating the following conditional on job level
```yaml
my-job:
  if: ${{ vars.MY_VAR == 'MY_VALUE' }}
```
> **Simple:** Put the full comparison inside `${{ }}`: `if: ${{ vars.MY_VAR == 'MY_VALUE' }}` at job level.
>
> **Detailed:** The **entire** comparison must live inside `${{ }}` so GitHub evaluates one boolean expression:
>
> ```yaml
> my-job:
>   if: ${{ vars.MY_VAR == 'MY_VALUE' }}
>   runs-on: ubuntu-latest
> ```
>
> This is **invalid**—only part of the expression is wrapped:
>
> ```yaml
> if: ${{ vars.MY_VAR }} == 'MY_VALUE'
> ```
>
> Configuration variables (`vars`) work in job and step `if` conditionals. **`secrets`** cannot be referenced directly in `if`—use `env` indirection (see question-068).
