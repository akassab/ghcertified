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
> **Simple:** Add `on: workflow_dispatch` to get a **Run workflow** button in the Actions tab.
>
> **Detailed:** Minimal manual workflow:
>
> ```yaml
> on:
>   workflow_dispatch:
>     inputs:
>       environment:
>         description: Target env
>         type: choice
>         options: [staging, production]
> jobs:
>   deploy:
>     runs-on: ubuntu-latest
>     steps:
>       - run: echo "Deploying to ${{ inputs.environment }}"
> ```
>
> Valid event name is **`workflow_dispatch`** only. Misconception: `manual_dispatch` or `workflow_trigger`—those strings are not in the `on:` schema. You can also trigger the same event via REST API with `ref` and `inputs`.
