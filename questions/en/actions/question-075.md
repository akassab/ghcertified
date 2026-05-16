---
question: "In a workflow that has multiple jobs, all running on GitHub-hosted runners, is it true that all jobs are guaranteed to run on the same runner machine?"
documentation: "https://docs.github.com/en/actions/using-jobs/choosing-the-runner-for-a-job#choosing-github-hosted-runners"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> No
- <input type="checkbox" disabled> Yes
- <input type="checkbox" disabled> Only if they run in parallel
- <input type="checkbox" disabled> Only if they use the same `runs-on` label

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

- [x] No
> **Simple:** No—each job on GitHub-hosted runners gets a fresh VM; jobs do not share the same machine even with the same `runs-on` label.
>
> **Detailed:** Each job on GitHub-hosted runners receives a **fresh virtual machine**. Two jobs with `runs-on: ubuntu-latest` are **not** guaranteed to share one machine—they may run in parallel on different hosts.
>
> Files written in `build` (for example `./dist/`) are **not** visible in `deploy` unless you pass them via **artifacts**, **cache**, or external storage:
>
> ```yaml
> jobs:
>   build:
>     steps:
>       - run: echo "built" > dist/out.txt
>   deploy:
>     needs: build
>     steps:
>       - uses: actions/download-artifact@v4  # required
> ```
>
> Matching `runs-on` labels pick the same **image**, not the same **instance**.
