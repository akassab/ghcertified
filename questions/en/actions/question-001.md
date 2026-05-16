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
> **Simple:** A reusable workflow can only **narrow** the caller's `GITHUB_TOKEN` scopes—it cannot grant itself more permission than the caller allowed.
>
> **Detailed:** When job A in repo X calls a reusable workflow with `uses: org/shared/.github/workflows/ci.yml@main`, GitHub passes the **caller's** token permissions into the called run. The reusable workflow may add a `permissions:` block that **reduces** scopes—for example the caller grants `contents: write` and `packages: write`, but the called workflow sets:
>
> ```yaml
> permissions:
>   contents: read
>   packages: none
> ```
>
> That is allowed. The called workflow **cannot** elevate to scopes the caller did not grant (for example adding `packages: write` when the caller only allowed `contents: read`). Common misconception: thinking the reusable workflow's `permissions:` replaces or ignores the caller—it only downgrades. This enforces least privilege so a shared workflow in another repo cannot escalate access in your repository.
