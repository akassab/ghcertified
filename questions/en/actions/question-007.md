---
question: "Which components are required for a workflow?"
documentation: "https://docs.github.com/en/actions/using-workflows/about-workflows#workflow-basics"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> One or more events that will trigger the workflow
- <input type="checkbox" disabled> One or more jobs
- <input type="checkbox" disabled> Workflow name
- <input type="checkbox" disabled> Defined branches on which the workflow will run

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

- [x] One or more events that will trigger the workflow
> **Simple:** Every workflow needs an `on:` block—without it, nothing starts the run.
>
> **Detailed:** Required syntax includes when the workflow runs:
>
> ```yaml
> on: push
> # or
> on:
>   pull_request:
>   workflow_dispatch:
> ```
>
> Optional top-level keys like `name:` or `env:` do not replace `on`. Branch filters belong **inside** an event (`push.branches`), not as a standalone workflow property.

- [x] One or more jobs
> **Simple:** A workflow must define at least one job under `jobs:`—that's where steps execute.
>
> **Detailed:** Minimal valid workflow:
>
> ```yaml
> on: workflow_dispatch
> jobs:
>   greet:
>     runs-on: ubuntu-latest
>     steps:
>       - run: echo "Hello"
> ```
>
> `runs-on` and `steps` belong on jobs. Misconception: `branches` or `name` are required at workflow root—they are optional; `jobs` and `on` are not.
