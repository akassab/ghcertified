---
question: "You can use `permissions` to modify the `GITHUB_TOKEN` permissions on:"
documentation: "https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/controlling-permissions-for-github_token"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Workflow level
- <input type="checkbox" disabled> Job level
- <input type="checkbox" disabled> Step level

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

- [x] Workflow level
> **Simple:** Put `permissions:` at the top of the workflow file to set default `GITHUB_TOKEN` scopes for every job.
>
> **Detailed:** A workflow-level block applies to all jobs unless a job overrides it:
>
> ```yaml
> permissions:
>   contents: read
> jobs:
>   test:
>     runs-on: ubuntu-latest
>     steps:
>       - uses: actions/checkout@v4
>   deploy:
>     permissions:
>       contents: write
>     runs-on: ubuntu-latest
> ```
>
> Here `test` inherits `contents: read`; `deploy` widens only what the workflow default allows (jobs cannot exceed organization/repo policy, but can narrow or, within policy, set job-specific scopes). Use workflow level for a secure baseline across the file.

- [x] Job level
> **Simple:** Each job can override workflow `permissions`—handy when only one job needs `id-token: write` or `contents: write`.
>
> **Detailed:** Job-level `permissions` replaces the workflow default for that job only. Typical pattern: CI jobs stay read-only; deploy job requests write:
>
> ```yaml
> jobs:
>   build:
>     permissions:
>       contents: read
>   release:
>     permissions:
>       contents: write
>       id-token: write   # OIDC to cloud
> ```
>
> Steps have **no** `permissions:` key—they always use the job's token. Misconception: setting permissions on a single step; you must set them on the job (or workflow) that owns the step.
