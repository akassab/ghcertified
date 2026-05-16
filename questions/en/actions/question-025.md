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
> **Simple:** Reusable workflows use `on: workflow_call`—callers trigger them with `uses:`, not `push` on the reusable file.
>
> **Detailed:** Reusable `CI` workflow:
>
> ```yaml
> on:
>   workflow_call:
>     inputs:
>       node-version:
>         type: string
> jobs:
>   test:
>     runs-on: ubuntu-latest
>     steps:
>       - uses: actions/setup-node@v4
>         with:
>           node-version: ${{ inputs.node-version }}
> ```
>
> Caller:
>
> ```yaml
> on: push
> jobs:
>   ci:
>     uses: ./.github/workflows/ci.yml
>     with:
>       node-version: '20'
>     secrets: inherit
> ```
>
> Put `push` / `pull_request` on the **caller**; the shared CI file listens for **`workflow_call`** only. Misconception: reusable workflows need `on: push` to be invokable—they need `workflow_call`.
