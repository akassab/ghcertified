---
question: "Which statement is correct regarding passing permissions to reusable workflows?"
documentation: "https://docs.github.com/en/actions/using-workflows/reusing-workflows#access-and-permissions"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> The `GITHUB_TOKEN` permissions passed from the caller workflow can be only downgraded by the called workflow.
- <input type="checkbox" disabled> The `GITHUB_TOKEN` permissions passed from the caller workflow can be only elevated by the called workflow.
- <input type="checkbox" disabled> The `GITHUB_TOKEN` permissions passed from the caller workflow can be both downgraded and elevated by the called workflow.
- <input type="checkbox" disabled> The `GITHUB_TOKEN` permissions passed from the caller workflow can be neither downgraded or elevated by the called workflow.

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

- [x] The `GITHUB_TOKEN` permissions passed from the caller workflow can be only downgraded by the called workflow.
> When you call a reusable workflow, GitHub passes the caller's `GITHUB_TOKEN` permissions to the called workflow. The called workflow is allowed to further restrict those permissions (downgrade), but it cannot grant itself broader access than the caller provided. This prevents a reusable workflow from escalating privileges beyond what the calling workflow intentionally allowed.
