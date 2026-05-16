---
question: "You want to create a workflow `Post-Deploy` that performs post-deploy related activity. What event trigger should the `Post-Deploy` workflow use so it runs automatically after a specified workflow is completed?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#workflow_run"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> `workflow_run`
- <input type="checkbox" disabled> `workflow_trigger`
- <input type="checkbox" disabled> `workflow_dispatch`
- <input type="checkbox" disabled> `workflow_call`

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

- [x] `workflow_run`
> The `workflow_run` event starts a workflow after another workflow finishes (or reaches another `types` activity such as `requested`). Example: `on.workflow_run.workflows: ["CI"]` runs a deploy workflow when `CI` completes, with `github.event.workflow_run.conclusion` available in `if:` conditions. This chains automation without embedding deploy steps in the same file as tests.
