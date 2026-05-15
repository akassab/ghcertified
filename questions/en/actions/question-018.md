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
- [ ] the target branch name starts with `release`
- [ ] the source branch name starts with `release` but does not end with `-alpha`
- [ ] the source branch name starts with `release`
