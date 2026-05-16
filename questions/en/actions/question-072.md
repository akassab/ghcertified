---
question: "What components can be reused within a GitHub Organization?"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Secrets
- <input type="checkbox" disabled> Configuration Variables
- <input type="checkbox" disabled> Self Hosted Runners
- <input type="checkbox" disabled> Workflow Templates
- <input type="checkbox" disabled> Artifacts
- <input type="checkbox" disabled> Cache
- <input type="checkbox" disabled> Environment Variables

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

- [x] Secrets
> **Simple:** Organization secrets can be shared with all repositories or a selected subset.
>
> **Detailed:** Define once at org level; member repos use `${{ secrets.NPM_TOKEN }}` without storing the same credential in every repository. Access can be limited to specific repos for least privilege.

- [x] Configuration Variables
> **Simple:** Organization configuration variables follow the same sharing model as org secrets, for non-sensitive values.
>
> **Detailed:** Use `${{ vars.BUILD_FLAVOR }}` or `${{ vars.DEFAULT_REGION }}` across microservices from a single org-level definition. Variables are not encrypted like secrets but are centrally managed.

- [x] Self Hosted Runners
> **Simple:** Self-hosted runners can be registered at the organization and assigned to repos via runner groups.
>
> **Detailed:** Register machines at org level, group them (for example `gpu`), then multiple repos use:
>
> ```yaml
> runs-on: [self-hosted, gpu]
> ```
>
> One runner pool serves many repositories instead of registering runners per repo.

- [x] Workflow Templates
> **Simple:** Organizations can publish starter workflow templates from the org `.github` repository.
>
> **Detailed:** Files under `.github/workflow-templates/` appear in **Actions → New workflow** for org members, standardizing CI/deploy patterns. **Artifacts** and **cache** are not org-wide shared resources—they stay scoped to a repository or workflow run.
