---
question: "How can you require manual approvals by a maintainer if the workflow run is targeting the `production` environment?"
documentation: "https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Using deployment protection rules
- <input type="checkbox" disabled> Setting the required reviewers in the `production` workflow
- <input type="checkbox" disabled> Using branch protection rules
- <input type="checkbox" disabled> Manual approvals are not supported by GitHub Actions

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

- [x] Using deployment protection rules
> Configure required reviewers (and optional wait timers) on the `production` environment under **Settings → Environments**. Jobs that set `environment: production` pause until an allowed reviewer approves the deployment in the Actions UI or via the API. Example: a deploy job runs tests automatically on every push, but the step that hits production waits for a platform engineer—without that environment gate, the same job would run unattended.
