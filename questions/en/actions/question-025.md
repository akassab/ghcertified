---
question: "You want to create a reusable workflow `CI` that runs some quality checks, linting and tests on code changes. What event trigger should the `CI` workflow define to allow reusing it in other workflows?"
documentation: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> workflow_call
- <input type="checkbox" disabled> workflow_trigger
- <input type="checkbox" disabled> workflow_dispatch
- <input type="checkbox" disabled> workflow_run

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

- [x] workflow_call
> A workflow meant to be called by others must declare `on: workflow_call`. Callers reference it with `uses: ./.github/workflows/ci.yml` (or `org/repo/.github/workflows/ci.yml@ref`) and pass `with:` inputs and `secrets:`. Triggers like `push` belong on the **caller** workflow, not on the reusable `CI` file itself.
