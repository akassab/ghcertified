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
> `schedule` events always use the latest commit on the repository's default branch (which may be `main` or another default). They do not run on arbitrary branches or pinned SHAs from other branches.
