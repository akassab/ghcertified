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
> **Simple:** Set repo or org secret/variable `ACTIONS_RUNNER_DEBUG` to `true` for verbose runner logs on subsequent runs.
>
> **Detailed:** This persists until you remove or change the value—useful for ongoing self-hosted runner issues. Log volume increases significantly; turn it off after troubleshooting. Pair with `ACTIONS_STEP_DEBUG` when you also need step-level debug markers.
- [x] Re-running a workflow with `Enable debug logging enabled`
> **Simple:** Re-run from the Actions UI with **Enable debug logging** for runner diagnostics on that single run only.
>
> **Detailed:** No secret change is required, which is handy for one-off investigations on shared repos. Debug output appears in the job log alongside normal step output. Use this when you do not want org-wide verbose logging enabled for every workflow.
