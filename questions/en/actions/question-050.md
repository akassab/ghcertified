---
question: "Secrets and configuration variables can be scoped to:"
documentation: "https://docs.github.com/en/actions/using-workflows/sharing-workflows-secrets-and-runners-with-your-organization#sharing-secrets-and-variables-within-an-organization"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> The entire organization, or selected repositories in an organization
- <input type="checkbox" disabled> A single repository
- <input type="checkbox" disabled> An environment in a repository
- <input type="checkbox" disabled> An environment shared across multiple repositories
- <input type="checkbox" disabled> Multiple repositories that do not share an organization/enterprise
- <input type="checkbox" disabled> A specific workflow in a repository
- <input type="checkbox" disabled> A specific job in a workflow

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

- [x] The entire organization, or selected repositories in an organization
> **Simple:** Org-level secrets and variables can apply to every repo in the org or only repos you select.
>
> **Detailed:** Configure under the organization's **Settings → Secrets and variables → Actions**. For example `ORG_NPM_TOKEN` shared with five service repos avoids copying the same secret into each repository. This is the broadest Actions sharing scope below enterprise.

- [x] A single repository
> **Simple:** Repository secrets and variables are available to workflows in that repo only.
>
> **Detailed:** Set them under **Settings → Secrets and variables → Actions** for the repo. Workflows reference `${{ secrets.API_KEY }}` and `${{ vars.BUILD_TYPE }}` unless an environment provides a same-named override.

- [x] An environment in a repository
> **Simple:** Environment secrets and variables apply only when a job targets that environment (for example `production`).
>
> **Detailed:** Jobs opt in with `environment:`:
>
> ```yaml
> jobs:
>   deploy:
>     environment: production
>     steps:
>       - run: echo "${{ secrets.DATABASE_URL }}"
> ```
>
> Environments support required reviewers, wait timers, and deployment-branch rules. There is no separate per-workflow or per-job secret store—you use repository, org, or environment scope.
