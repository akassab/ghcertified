---
question: "This workflow will run on all pull requests where:"
documentation: "https://docs.github.com/en/actions/using-workflows/triggering-a-workflow#example-including-and-excluding-branches"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

```yaml
on:
  pull_request:
    branches:
      - 'release/**'
      - '!release/**-alpha'
```
- <input type="checkbox" disabled> the target branch name starts with `release` but does not end with `-alpha`
- <input type="checkbox" disabled> the target branch name starts with `release`
- <input type="checkbox" disabled> the source branch name starts with `release` but does not end with `-alpha`
- <input type="checkbox" disabled> the source branch name starts with `release`

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
on:
  pull_request:
    branches:
      - 'release/**'
      - '!release/**-alpha'
```
- [x] the target branch name starts with `release` but does not end with `-alpha`
> **Simple:** The `branches` filter matches the PR **base** branch: `release/**` yes, `release/**-alpha` excluded by `!`.
>
> **Detailed:** Given:
>
> ```yaml
> on:
>   pull_request:
>     branches:
>       - 'release/**'
>       - '!release/**-alpha'
> ```
>
> - PR **into** `release/1.2` → runs (matches include, not excluded).
> - PR **into** `release/2.0-alpha` → does not run (negated pattern).
> - PR **from** `feature/foo` **into** `main` → does not run (base not under `release/`).
>
> Misconception: filtering on the source/head branch—`branches` under `pull_request` always means **target** branch. The `!` prefix excludes matches from the include list.
