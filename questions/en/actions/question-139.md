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
- [ ] By adding a `ACTIONS_RUNNER_DEBUG` top-level folder to the workflow's repository
- [ ] By adding a `runner-diagnostic-logs` subfolder to the `_diag` directory of the self-hosted runner being used
> `runner-diagnostic-logs` is the name of the folder Github generates when `ACTIONS_RUNNER_DEBUG` is enabled. To avoid potential confusion, a folder with this name should not be created anywhere else. 
- [ ] Renaming the `_diag` directory of a self-hosted runner to `runner-diagnostic-logs`
> Renaming the `_diag` directory should never be done as this can potentially effect logging activities.