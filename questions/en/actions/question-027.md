---
question: "What are the valid use cases for using **defaults**?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#defaults"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Using defaults.run on workflow level to set default shell (e.g bash) for an entire workflow
- <input type="checkbox" disabled> Using defaults.run on job level to set default working-directory for all steps in a single job
- <input type="checkbox" disabled> Using defaults.run on step level to set default shell (e.g bash) for that single step
- <input type="checkbox" disabled> Using defaults.env on workflow level to set default environment variables for an entire workflow
- <input type="checkbox" disabled> Using defaults.env on job level to set default environment variables for all steps in a single job

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

- [x] Using defaults.run on workflow level to set default shell (e.g bash) for an entire workflow
> `defaults.run` at the workflow root applies to every `run` step in every job unless overridden. Setting `shell` there avoids repeating the same shell on each step.

- [x] Using defaults.run on job level to set default working-directory for all steps in a single job
> `defaults.run` on a job applies only to steps in that job. `working-directory` is a valid key under `defaults.run` and sets the cwd for all `run` steps in the job.
