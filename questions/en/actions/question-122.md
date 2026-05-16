---
question: "What are the scopes defined for custom variables in a workflow?"
documentation: "https://docs.github.com/en/actions/learn-github-actions/variables#defining-environment-variables-for-a-single-workflow"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> The entire workflow, by using `env` at the top level of the workflow file
- <input type="checkbox" disabled> The contents of a job within a workflow, by using `jobs.<job_id>.env`
- <input type="checkbox" disabled> A specific step within a job, by using `jobs.<job_id>.steps[*].env`
- <input type="checkbox" disabled> All the jobs within a workflow, by using `jobs.env`
- <input type="checkbox" disabled> The entire workflow, by using `custom.env` at the top level of the workflow file
- <input type="checkbox" disabled> A specific environment in the repository, by using `environment.<environment_id>.env` at the top level of the workflow file

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

- [x] The entire workflow, by using `env` at the top level of the workflow file
> Top-level `env` applies to every job in the workflow unless a job or step overrides it. For example, `env: NODE_ENV: production` at the root makes that variable visible in all jobs. Job-level `env` can narrow or replace values for one job only.
- [x] The contents of a job within a workflow, by using `jobs.<job_id>.env`
> `jobs.<job_id>.env` scopes variables to a single job and every step inside it. A deploy job might set `env: DEPLOY_ENV: staging` while a test job omits it. Steps in other jobs never see that variable unless you repeat or pass it explicitly.
- [x] A specific step within a job, by using `jobs.<job_id>.steps[*].env`
> `jobs.<job_id>.steps[*].env` limits a variable to one step—useful for a token or flag only one command needs. There is no `jobs.env`, `custom.env`, or `environment.<id>.env` key for ordinary workflow variables; deployment **environments** are a separate concept from `env` blocks.
