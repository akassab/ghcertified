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
> **Simple:** Configure required reviewers (deployment protection rules) on the `production` environment so deploy jobs pause until a maintainer approves.
>
> **Detailed:** Under **Settings → Environments → production**, enable **required reviewers** (and optional wait timers). Jobs with `environment: production` pause until an allowed reviewer approves in the Actions UI or via API:
>
> ```yaml
> jobs:
>   deploy:
>     environment: production
>     runs-on: ubuntu-latest
>     steps:
>       - run: ./deploy.sh
> ```
>
> Tests can run on every push; production deploy waits for a platform engineer. Branch protection rules govern merges, not environment deployment gates. Manual approvals for environments are a first-class Actions feature—not unsupported.
