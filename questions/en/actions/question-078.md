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
> A GitHub Actions workflow is a YAML file that defines one or more jobs, and each job is a sequence of steps executed on a runner. A step either invokes a reusable action with `uses:` or runs shell commands with `run:`. For example, one job might use `actions/checkout@v4` in one step and `npm test` in the next. Actions are building blocks that steps call—they are not containers that hold entire workflows, and workflows are not "made of actions" without the job and step hierarchy.
