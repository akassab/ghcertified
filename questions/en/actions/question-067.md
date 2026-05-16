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
> The entire comparison must live inside `${{ }}` so GitHub evaluates it as one boolean expression: `if: ${{ vars.MY_VAR == 'MY_VALUE' }}`. Splitting so only `vars.MY_VAR` is inside `${{ }}` and `== 'MY_VALUE'` is outside is invalid. Configuration variables (`vars`) are allowed in job and step `if` conditionals—unlike `secrets`, which cannot be referenced directly in `if` (use `env` indirection instead).
