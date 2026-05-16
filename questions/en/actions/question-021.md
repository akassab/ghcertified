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
> For `workflow_dispatch` inputs, `choice` renders a dropdown when you list fixed `options`—for example `options: [patch, minor, major]` for a release type.

- [x] boolean
> `boolean` inputs render as a true/false toggle in the manual run UI. Use them for flags like `dry_run` and reference the value in `if:` expressions.

- [x] string
> `string` is the default free-text type for values such as a tag name, branch, or deployment note passed into `${{ inputs.<name> }}`.

- [x] number
> `number` accepts numeric inputs only—useful for replica counts, retry limits, or timeout minutes without quoting numbers as strings.

- [x] environment
> The `environment` type lets the person triggering the run pick a configured deployment environment from the repo. GitHub associates the run with that environment (protection rules and environment secrets apply).
