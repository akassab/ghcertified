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
> A job may set `environment:` to exactly one named environment for secrets, variables, and protection rules. `job1` might use `environment: staging` while `job2` uses `environment: production` in the same workflow file. One job cannot list two environments at once—you split staging and production across jobs or workflows instead. Environment-scoped values apply only to jobs that declare that environment key.
