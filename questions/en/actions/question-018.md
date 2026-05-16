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
> For `pull_request`, the `branches` filter applies to the **base** (target) branch, not the head/feature branch. Here `release/**` matches targets like `release/1.0`, and `!release/**-alpha` excludes names ending in `-alpha`—so a PR into `release/beta` runs, but one into `release/2.0-alpha` does not.
