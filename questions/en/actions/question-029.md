---
question: "Your Pull Request analysis workflow uses multiple code analysis tools and takes about 20minutes to fully complete. It is triggered on `pull_request` event with `branches` filter set to `master`. Therefore if a developer pushes multiple commits within few minutes multiple workflows are running in parallel. How can you stop all previous workflow runs and only run the one with latest changes?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-using-concurrency-to-cancel-any-in-progress-job-or-run"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Use concurrency with cancel-in-progress
```yaml
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
```
- <input type="checkbox" disabled> Use concurrency
```yaml
concurrency:
  group: ${{ github.ref }}
```

- <input type="checkbox" disabled> Use activity types filter
```yaml
on:
  pull_request:
    branches:
      - master
    types: [latest]
```
- <input type="checkbox" disabled> Use cancel-in-progress flag for `pull_request` event
```yaml
on:
  pull_request:
    branches:
      - master
    cancel-in-progress: true
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

- [x] Use concurrency with cancel-in-progress
```yaml
concurrency:
  group: ${{ github.workflow }}-${{ github.ref }}
  cancel-in-progress: true
```
> `cancel-in-progress: true` cancels any in-progress run in the same concurrency `group` when a newer run starts. Keying the group with `${{ github.workflow }}-${{ github.ref }}` scopes cancellation to that PR branch—pushing again stops the stale 20-minute analysis run instead of stacking parallel duplicates.
