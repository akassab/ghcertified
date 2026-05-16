---
question: "How can you skip the following workflow run when you commit or create a PR?"
documentation: "https://docs.github.com/en/actions/managing-workflow-runs/skipping-workflow-runs"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

```yaml
name: Build
on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    name: Extract artifact version
...
```

- <input type="checkbox" disabled> By including any one of the following keywords in the commit message or in the title of the pull-request
```yaml
[skip ci]
[ci skip]
[no ci]
[skip actions]
[actions skip]
```

- <input type="checkbox" disabled> Provide `SKIP_WORKFLOW` in the commit message
- <input type="checkbox" disabled> The above workflow will run in every event of push or pull request in every case

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
name: Build
on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    name: Extract artifact version
...
```

- [x] By including any one of the following keywords in the commit message or in the title of the pull-request
```yaml
[skip ci]
[ci skip]
[no ci]
[skip actions]
[actions skip]
```
> GitHub skips `push` and `pull_request` runs when the **latest** commit message or PR title contains one of these bracketed phrases—for example, `git commit -m "docs: typo [skip ci]"`. The phrases are recognized as written (`[ci skip]`, `[skip actions]`, etc.) and apply to workflows on those events. `SKIP_WORKFLOW` or informal text like “skip this build” does **not** cancel the run; only these documented keywords do.
