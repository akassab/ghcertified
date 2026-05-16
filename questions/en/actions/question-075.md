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
> Each job on GitHub-hosted runners gets a fresh virtual machine; even two jobs with the same `runs-on: ubuntu-latest` label are not guaranteed to share one machine. Files written in `build` (for example `./dist/`) are not visible in `deploy` unless you pass them with artifacts, cache, or external storage. Parallel jobs always run on separate hosts; matching labels only pick the same *image*, not the same *instance*.
