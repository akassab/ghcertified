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
> **Simple:** `with:` passes input parameters to an action step declared in that action's `action.yml`.
>
> **Detailed:** When a step uses `uses:`, the sibling `with` map supplies **inputs** defined by the action author—not shell environment variables:
>
> ```yaml
> - uses: actions/setup-node@v4
>   with:
>     node-version: '20'
>     cache: 'npm'
> ```
>
> `actions/setup-node` reads `node-version` from its metadata and installs that Node build. Use `env:` on the same step if you need environment variables for `run` scripts. Job ordering uses `needs:`; workflow triggers use `on:`—neither is configured through `with:`.
