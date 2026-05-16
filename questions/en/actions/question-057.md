---
question: "Which is true about environments?"
documentation: "https://docs.github.com/en/actions/concepts/workflows-and-actions/deployment-environments"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Each job in a workflow can reference a single environment.
- <input type="checkbox" disabled> Each workflow can reference a single environment.
- <input type="checkbox" disabled> Each job in a workflow can reference a maximum of two environments.
- <input type="checkbox" disabled> Each workflow can reference a maximum of two environments.

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

- [x] Each job in a workflow can reference a single environment.
> A job may set `environment:` to one named environment (for secrets, variables, and protection rules). Different jobs in the same workflow can target different environments, but one job cannot reference two environments at once.
