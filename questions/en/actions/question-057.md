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
> **Simple:** Each job may set `environment:` to exactly one named environment—not two per job, though different jobs can use different environments.
>
> **Detailed:** A job declares **one** environment for secrets, variables, and protection rules:
>
> ```yaml
> jobs:
>   staging:
>     environment: staging
>   production:
>     environment: production
> ```
>
> `job1` might use `staging` while `job2` uses `production` in the same workflow. One job **cannot** list two environments—you split staging and production across jobs or workflows. Environment-scoped values apply only to jobs that declare `environment:`.
