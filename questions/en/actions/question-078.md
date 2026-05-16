---
question: "Which of the following is a correct statement about GitHub Workflows and Actions?"
documentation: "https://docs.github.com/en/actions/learn-github-actions/understanding-github-actions"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Each action is composed of one or more workflows which is composed of one or more jobs, and each job is composed of one or more steps
- <input type="checkbox" disabled> Each workflow is composed of one or more actions which is composed of one or more jobs, and each job is composed of one or more steps
- <input type="checkbox" disabled> Each workflow is composed of one or more jobs which is composed of one or more steps, and each step is an action or a script
- <input type="checkbox" disabled> Each action is composed of one or more jobs which is composed of one or more steps, and each step is a workflow

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

- [x] Each workflow is composed of one or more jobs which is composed of one or more steps, and each step is an action or a script
> **Simple:** A workflow is YAML with jobs; each job has steps that call actions (`uses:`) or run shell commands (`run:`).
>
> **Detailed:** A **workflow** is an automated process defined in `.github/workflows/*.yml`. It contains one or more **jobs**, and each job runs on a **runner** as an ordered list of **steps**.
>
> ```yaml
> name: CI
> on: [push]
> jobs:
>   test:
>     runs-on: ubuntu-latest
>     steps:
>       - uses: actions/checkout@v4      # step → action
>       - run: npm ci && npm test        # step → shell commands
> ```
>
> An **action** is a reusable unit (often from the Marketplace) that a step invokes with `uses:`. Actions are not workflows themselves, and a workflow is not "only actions"—you need the job and step structure. Steps either delegate to an action or execute `run` scripts on the runner.
