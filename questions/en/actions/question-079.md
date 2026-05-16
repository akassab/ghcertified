---
question: "On which commit and branch do scheduled workflows run in GitHub Actions?"
documentation: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Scheduled workflows run on the specific commit on last modified branch.
- <input type="checkbox" disabled> Scheduled workflows run on the specific commit on the main branch.
- <input type="checkbox" disabled> Scheduled workflows run on the latest commit on the repository default branch.
- <input type="checkbox" disabled> Scheduled workflows run on the latest commit on the main branch.

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

- [x] Scheduled workflows run on the latest commit on the repository default branch.
> The `schedule` trigger always runs against the latest commit on the repository's default branch (such as `main`), regardless of which branch received recent pushes. The workflow file must exist on that default branch for scheduled runs to be created. Scheduled runs do not execute on feature branches or pinned SHAs from non-default branches. If you need branch-specific automation on a timer, merge to default first or use a different trigger such as `workflow_dispatch`.
