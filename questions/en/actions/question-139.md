---
question: "In what ways can you enable runner diagnostic logging?"
documentation: "https://docs.github.com/en/actions/how-tos/monitor-workflows/enable-debug-logging#enabling-runner-diagnostic-logging"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Setting a secret or variable named `ACTIONS_RUNNER_DEBUG` to `true`
- <input type="checkbox" disabled> Re-running a workflow with `Enable debug logging enabled`
- <input type="checkbox" disabled> By adding a `ACTIONS_RUNNER_DEBUG` top-level folder to the workflow's repository
- <input type="checkbox" disabled> By adding a `runner-diagnostic-logs` subfolder to the `_diag` directory of the self-hosted runner being used
- <input type="checkbox" disabled> Renaming the `_diag` directory of a self-hosted runner to `runner-diagnostic-logs`

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

- [x] Setting a secret or variable named `ACTIONS_RUNNER_DEBUG` to `true`
> Note: `ACTIONS_RUNNER_DEBUG` can be set as a secret or variable at organization-level or repository-level.
- [x] Re-running a workflow with `Enable debug logging enabled`
> When you re-run a failed workflow from the Actions UI, enabling debug logging temporarily sets runner diagnostic logging for that run, which is useful for troubleshooting self-hosted runners without changing repository settings permanently.
