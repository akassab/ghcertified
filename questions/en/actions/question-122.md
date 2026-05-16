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
> **Simple:** Top-level `env` applies to every job in the workflow unless a job or step overrides it.
>
> **Detailed:** For example, `env: NODE_ENV: production` at the root of the workflow file makes that variable visible in all jobs and steps. Job-level or step-level `env` can narrow or replace values for one job or one step only. There is no separate `workflow.env` key—the workflow root is where global variables live.
- [x] The contents of a job within a workflow, by using `jobs.<job_id>.env`
> **Simple:** `jobs.<job_id>.env` scopes variables to one job and all steps inside it.
>
> **Detailed:** A deploy job might set `env: DEPLOY_ENV: staging` while a test job omits it; steps in other jobs never see that variable unless you repeat it or pass data via outputs. Job `env` overrides workflow-level `env` for the same name within that job—for example, root `NODE_ENV: production` and `jobs.deploy.env.NODE_ENV: staging` gives staging only in deploy.
- [x] A specific step within a job, by using `jobs.<job_id>.steps[*].env`
> **Simple:** Step-level `env` limits a variable to a single step—useful for tokens or flags only one command needs.
>
> **Detailed:** `jobs.<job_id>.steps[*].env` is the narrowest scope. There is no `jobs.env`, `custom.env`, or `environment.<id>.env` key for ordinary workflow variables; GitHub **deployment environments** (protection rules, environment secrets) are a separate concept from `env` blocks in YAML.
