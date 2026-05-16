---
question: "Which of these is not a valid event that could trigger a workflow?"
documentation: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#about-events-that-trigger-workflows"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Cloning the repository
- <input type="checkbox" disabled> Committing a file to master branch
- <input type="checkbox" disabled> A branch is created
- <input type="checkbox" disabled> Adding a label to a pull request

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

- [x] Cloning the repository
> **Simple:** `git clone` on your machine is not a GitHub event—only activity GitHub records (push, PR, schedule, etc.) can trigger workflows.
>
> **Detailed:** Workflows start from **`on:`** triggers tied to the GitHub platform:
>
> ```yaml
> on:
>   push:
>     branches: [main]
>   pull_request:
>   schedule:
>     - cron: '0 6 * * 1'
> ```
>
> `git push origin main` creates a **push** webhook → workflow runs. Opening a PR creates **pull_request**. Running `git clone https://github.com/org/repo.git` locally only copies data; GitHub never receives an event, so no workflow fires. Same for local builds or copying the folder—misconception: "any change to code should CI" only applies when that change is delivered via an event GitHub knows about (push, `workflow_dispatch`, `repository_dispatch`, etc.).
