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
> A top-level `permissions` block applies the same token scopes to every job unless a job overrides them—for example, `permissions: contents: read` at the workflow root limits all jobs by default.

- [x] Job level
> A job can override workflow defaults, such as giving only the `deploy` job `id-token: write` for OIDC while other jobs stay read-only.

> Permissions cannot be set on individual steps. A step always uses the `GITHUB_TOKEN` (and scopes) of its job—there is no `permissions:` key under `steps`.
