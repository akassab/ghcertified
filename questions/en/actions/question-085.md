---
question: "What is the purpose of the `with` keyword in a GitHub Actions workflow?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepswith"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> To define environment variables
- <input type="checkbox" disabled> To specify input parameters for an action
- <input type="checkbox" disabled> To set up dependencies
- <input type="checkbox" disabled> To trigger another workflow

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

- [x] To specify input parameters for an action
> On a step that uses `uses:`, the `with` map passes input parameters declared in the action's `action.yml` (for example `node-version: '20'` for `actions/setup-node`). Inputs are how actions receive configuration; they are distinct from environment variables set with `env:`. Job dependencies use `needs:`, and workflows are started by `on:` events—not by `with:`.
