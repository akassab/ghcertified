---
question: "Which event allows you to manually trigger a workflow from the GitHub UI?"
documentation: "https://docs.github.com/en/actions/using-workflows/manually-running-a-workflow"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> workflow_dispatch
- <input type="checkbox" disabled> manual_dispatch
- <input type="checkbox" disabled> workflow_trigger
- <input type="checkbox" disabled> manual_trigger

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

- [x] workflow_dispatch
> `workflow_dispatch` adds a **Run workflow** button in the Actions tab and lets you trigger the workflow manually, optionally with typed inputs defined under `on.workflow_dispatch.inputs`. Add `on: workflow_dispatch` to the workflow file—`manual_dispatch`, `workflow_trigger`, and `manual_trigger` are not valid GitHub event names.
