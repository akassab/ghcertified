---
question: "A workflow was initially run on `commit A` and failed. You fixed the workflow with the subsequent `commit B`. When you re-run that workflow it will run with code from which commit?"
documentation: "https://docs.github.com/en/actions/managing-workflow-runs/re-running-workflows-and-jobs#about-re-running-workflows-and-jobs"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> It will run with code from `commit A`
- <input type="checkbox" disabled> It will run with code from `commit B`
- <input type="checkbox" disabled> You cannot re-run workflows in GitHub Actions. You have to trigger a new workflow which will run with latest changes
- <input type="checkbox" disabled> It will trigger two workflows, one with code from `commit A` and one with code from `commit B`

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

- [x] It will run with code from `commit A`
> Re-running a failed workflow reuses the same commit SHA and ref as the original run—the workflow file and code snapshot from `commit A`. Fixes on `commit B` apply only when a new event triggers a new run.
