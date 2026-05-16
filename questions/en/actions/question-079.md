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
> **Simple:** Scheduled workflows run against the **latest commit on the default branch** (e.g. `main`), in UTC.
>
> **Detailed:** The `on.schedule` trigger uses cron syntax, and GitHub always evaluates scheduled workflows from the **default branch**—not from feature branches or arbitrary SHAs.
>
> ```yaml
> on:
>   schedule:
>     - cron: '0 6 * * *'   # 06:00 UTC daily
> jobs:
>   nightly:
>     runs-on: ubuntu-latest
>     steps:
>       - run: ./nightly-audit.sh
> ```
>
> The workflow file must exist on the default branch for the schedule to be registered. Pushes to `feature/login` do not change what commit a schedule uses; GitHub checks out the tip of `main` (or whatever the default is). For branch-specific timed work, merge to default, use `workflow_dispatch`, or trigger on `push` with filters instead of `schedule` alone.
