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
> Organization-level secrets can be shared with all repositories or a selected list in the org, so teams reuse credentials like `NPM_TOKEN` without copying them into every repo. Access policies and visibility are managed in org settings—individual repos still reference `${{ secrets.NAME }}` the same way.

- [x] Configuration Variables
> Organization variables (`vars`) follow the same sharing model as org secrets and appear in workflows as `${{ vars.BUILD_FLAVOR }}` for non-sensitive configuration. They are available only in repositories you allow, which keeps defaults consistent across microservices without hard-coding values in each workflow file.

- [x] Self Hosted Runners
> Self-hosted runners can be registered at the organization level and assigned to repositories through runner groups (for example a `gpu` group for ML repos). Multiple repos can target `runs-on: [self-hosted, gpu]` on the same pool instead of installing a separate runner per repository.

- [x] Workflow Templates
> Organization workflow templates (starter workflows) live in a dedicated `.github` repository under `.github/workflow-templates/` and appear in **New workflow** for repositories in the org. That centralizes CI patterns—security scanning, release, deploy—so every new repo starts from the same approved template.
