---
question: "A workflow that has only `workflow_dispatch` event trigger can be triggered using GitHub's REST API"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#onworkflow_dispatchinputs"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> True
- <input type="checkbox" disabled> False

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

- [x] True
> **Simple:** A `workflow_dispatch`-only workflow can be started via the REST API—same as **Run workflow** in the UI.
>
> **Detailed:** Workflow file:
>
> ```yaml
> on:
>   workflow_dispatch:
>     inputs:
>       logLevel:
>         type: string
> ```
>
> API call (conceptually):
>
> ```bash
> curl -X POST \
>   -H "Authorization: Bearer $TOKEN" \
>   https://api.github.com/repos/OWNER/REPO/actions/workflows/WORKFLOW_ID/dispatches \
>   -d '{"ref":"main","inputs":{"logLevel":"debug"}}'
> ```
>
> `ref` is required (branch or tag). No `push` or other `on:` event is needed if `workflow_dispatch` is listed. Misconception: manual-only workflows cannot be automated—they can, via this dispatch endpoint.
