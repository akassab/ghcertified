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
> A top-level `permissions` block applies the same token scopes to every job in the workflow unless a job overrides them.

- [x] Job level
> You can set `permissions` on an individual job to tighten or broaden scopes for just that job's `GITHUB_TOKEN`.

> Permissions cannot be set on individual steps. Step access is inherited from the job-level token.
