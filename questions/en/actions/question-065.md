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
> Self-hosted runner diagnostic and connectivity logs are written locally under the runner install directory in `_diag` (alongside the runner application). They are not shown on the runner's GitHub.com settings page or in a normal job log on github.com unless you upload or forward them yourself. Enable debug logging on a job if you need more detail in the web UI for that specific run—not as a substitute for on-disk `_diag` files when debugging runner networking.
