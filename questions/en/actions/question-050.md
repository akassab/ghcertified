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
> Organization-level secrets and variables can apply to all repositories in the org or to a selected subset you configure in org settings. For example `ORG_NPM_TOKEN` shared with five service repos avoids duplicating the same secret in each repo. That is the broadest Actions scope below enterprise; you cannot scope a single org secret to repos in unrelated orgs without enterprise policies.

- [x] A single repository
> Repository-level secrets and variables live under **Settings → Secrets and variables → Actions** for that repo and are available to workflows in that repository (subject to environment protection and branch rules). `${{ secrets.API_KEY }}` and `${{ vars.BUILD_TYPE }}` resolve here when no narrower environment override exists. Per-workflow or per-job scopes are not separate secret stores—you use environments or contexts instead.

- [x] An environment in a repository
> Environment-scoped secrets and variables apply only when a job sets `environment: production` (or another named environment). They support required reviewers, wait timers, and deployment-branch rules—ideal for `DATABASE_URL` that must not run on every PR build. A job cannot attach to two environments at once; pick one environment per job when you need that scope.
