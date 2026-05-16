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
> **Simple:** `type: choice` shows a dropdown; you must supply an `options` list.
>
> **Detailed:** Example:
>
> ```yaml
> on:
>   workflow_dispatch:
>     inputs:
>       bump:
>         type: choice
>         options: [patch, minor, major]
>         default: patch
> ```
>
> The runner uses `${{ inputs.bump }}` in steps. Not valid: free-form `choice` without `options`.

- [x] boolean
> **Simple:** `type: boolean` is a true/false toggle in the Run workflow form.
>
> **Detailed:** Use for flags such as dry-run:
>
> ```yaml
> inputs:
>   dry_run:
>     type: boolean
>     default: false
> ```
>
> In steps: `if: ${{ inputs.dry_run }}`. Values are boolean in expressions, not the strings `"true"`/`"false"` unless you coerce.

- [x] string
> **Simple:** `type: string` is free text—the default style for names, tags, or messages.
>
> **Detailed:** Example `tag_name` with `required: true` and `default: v0.0.0`. Referenced as `${{ inputs.tag_name }}` in `run:` or `with:`. Most manual inputs are strings unless you need structured types below.

- [x] number
> **Simple:** `type: number` accepts numeric input only (replicas, timeouts, etc.).
>
> **Detailed:** Example:
>
> ```yaml
> inputs:
>   replicas:
>     type: number
>     default: 3
> ```
>
> Use when arithmetic or numeric comparison matters. Misconception: quoting a number in a `string` input and expecting numeric ops—use `number` for validation in the UI.

- [x] environment
> **Simple:** `type: environment` lets the user pick a repo **environment** (deployment protections and secrets apply).
>
> **Detailed:** Lists environments configured under Settings → Environments. The selected name is available as `${{ inputs.env_name }}` and ties the run to that environment's protection rules and secrets—unlike a plain string that only passes text without linking GitHub Environment metadata.
