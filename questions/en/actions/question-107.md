---
question: "Which variable would you set to `true` in order to enable step debug logging?"
documentation: "https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/enabling-debug-logging"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> `ACTIONS_STEP_DEBUG`
- <input type="checkbox" disabled> `ACTIONS_JOB_DEBUG`
- <input type="checkbox" disabled> `ACTIONS_RUNNER_DEBUG`
- <input type="checkbox" disabled> `ACTIONS_WORKFLOW_DEBUG`

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

- [x] `ACTIONS_STEP_DEBUG`
> **Simple:** Set repository variable or secret `ACTIONS_STEP_DEBUG` to `true` for extra step debug output in logs.
>
> **Detailed:** Enable step debug logging by creating `ACTIONS_STEP_DEBUG` with value `true` at repository (or org) level—variable or secret both work:
>
> ```yaml
> # No YAML change required; set in Settings → Secrets and variables → Actions
> ```
>
> Re-run the workflow; logs include additional diagnostics for expression evaluation and action inputs. Use this when `if:` conditions or `with:` values behave unexpectedly. **`ACTIONS_RUNNER_DEBUG`** is a separate flag for runner/agent diagnostics. `ACTIONS_JOB_DEBUG` and `ACTIONS_WORKFLOW_DEBUG` are not the documented names for step-level debug logging.
