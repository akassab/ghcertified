---
question: "Which is true about `Starter Workflows` ?"
documentation: "https://docs.github.com/en/actions/using-workflows/creating-starter-workflows-for-your-organization"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> They allow users to leverage ready-to-use (or requiring minimal changes) workflow templates
- <input type="checkbox" disabled> GitHub provides and maintains starter workflows for different categories, languages and tooling
- <input type="checkbox" disabled> Your organization can create custom starter workflows for users in your organization
- <input type="checkbox" disabled> Starter workflows cannot call reusable workflows
- <input type="checkbox" disabled> Starter workflows are a paid GitHub feature
- <input type="checkbox" disabled> Starter workflows are provided ready-to-use and cannot be modified or enhanced

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

- [x] They allow users to leverage ready-to-use (or requiring minimal changes) workflow templates
> **Simple:** Starter workflows are pre-built YAML templates you pick when creating a workflow, often needing only small edits.
>
> **Detailed:** In **Actions → New workflow**, GitHub shows starter workflows so you begin from a working pipeline (for example "Node.js CI") instead of an empty file. After you add the workflow, you can change triggers, jobs, and steps like any other workflow—they are not locked or read-only.

- [x] GitHub provides and maintains starter workflows for different categories, languages and tooling
> **Simple:** GitHub ships and updates official starter workflows for common stacks and tasks (CI, deploy, CodeQL, etc.).
>
> **Detailed:** GitHub maintains templates grouped by language and use case in the workflow picker. When GitHub updates a template on their side, new repos still pick the current version; your existing committed workflow file is not auto-overwritten until you choose to sync or edit it.

- [x] Your organization can create custom starter workflows for users in your organization
> **Simple:** Orgs can publish private starter workflows from a `.github` repository for members to use.
>
> **Detailed:** Add files under `.github/workflow-templates/` in the org's `.github` repo, with metadata (for example `ci.properties.json`). Members then see org-specific pipelines in **New workflow**—useful for standardizing security scans, deploy patterns, or compliance checks across many repositories.
