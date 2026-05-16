---
question: "Where can you find network connectivity logs for a GitHub self-hosted-runner?"
documentation: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-self-hosted-runner-network-connectivity"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> In the `_diag` folder directly on the runner machine
- <input type="checkbox" disabled> On GitHub.com on that specific Runner's page
- <input type="checkbox" disabled> In the job run logs of a job that ran on that Runner
- <input type="checkbox" disabled> In the job run logs of a job that ran on that Runner with debug logging enabled

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

- [x] In the `_diag` folder directly on the runner machine
> **Simple:** Self-hosted runner network and diagnostic logs live in the `_diag` folder on the runner machine—not on GitHub.com by default.
>
> **Detailed:** Diagnostic and connectivity logs are written **locally** under the runner install directory in **`_diag`** (alongside the runner application). They are **not** on the runner's GitHub.com settings page or in a normal job log unless you upload or forward them.
>
> Job run logs with debug logging show more detail **for that run** in the web UI—they do not replace on-disk `_diag` files when debugging runner **networking** to GitHub services.
