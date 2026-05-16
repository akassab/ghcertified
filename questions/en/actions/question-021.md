---
question: "What are the possible types of an input variable for a manually triggered workflow?"
documentation: "https://docs.github.com/en/actions/writing-workflows/workflow-syntax-for-github-actions#onworkflow_dispatchinputsinput_idtype"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> choice
- <input type="checkbox" disabled> boolean
- <input type="checkbox" disabled> string
- <input type="checkbox" disabled> number
- <input type="checkbox" disabled> environment
- <input type="checkbox" disabled> dropdown
- <input type="checkbox" disabled> select

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

- [x] choice
> For `workflow_dispatch` inputs, `choice` is the type used when you provide a fixed list of options via `options`. It is the GitHub Actions name for a dropdown-style input in the manual run UI.

- [x] boolean
> `boolean` inputs render as a true/false toggle when someone manually triggers the workflow. The value is passed to the workflow as a boolean you can reference in expressions.

- [x] string
> `string` is the default text input type for `workflow_dispatch`. Use it for free-form values such as release notes, branch names, or other arbitrary text.

- [x] number
> `number` inputs accept numeric values only. They are useful when the trigger should supply counts, timeouts, or other numeric parameters to the workflow.

- [x] environment
> The `environment` input type lets the person triggering the run pick a deployment environment from those configured in the repository. GitHub passes the selected environment name into the workflow run context.
