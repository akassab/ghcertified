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
> Top-level `env` applies to all jobs in the workflow unless overridden lower in the tree.
- [x] The contents of a job within a workflow, by using `jobs.<job_id>.env`
> Job-level `env` is visible to every step in that job.
- [x] A specific step within a job, by using `jobs.<job_id>.steps[*].env`
> Step `env` scopes variables to that step only. There is no `jobs.env`, `custom.env`, or top-level `environment.<id>.env` key for ordinary workflow variables.
