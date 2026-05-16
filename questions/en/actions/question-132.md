---
question: "Which of the following are true regarding GitHub Enterprise Server (GHES)?"
documentation: "https://docs.github.com/en/enterprise-server/admin/overview/about-github-enterprise-server"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> GHES workflows cannot access GitHub.com nor GitHub Marketplace actions by default. 
- <input type="checkbox" disabled> `actions/actions-sync` is primarily devoted to moving GitHub.com actions to a GHES instance.
- <input type="checkbox" disabled> GHES is allowed to use enhanced versions of GitHub-hosted runners.
- <input type="checkbox" disabled> Using GitHub Connect, users can follow a manual process to access GitHub.com actions. This process must be done once per desired action.
- <input type="checkbox" disabled> GitHub Enterprise Server instances are self-hosted, compared to GitHub Enterprise Cloud (GHEC) which is hosted and managed by GitHub.

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

- [x] GHES workflows cannot access GitHub.com nor GitHub Marketplace actions by default. 
> GitHub Enterprise Server (GHES) does not download actions from GitHub.com or the Marketplace until an administrator enables **GitHub Connect** or syncs actions manually. Workflows that reference `actions/checkout@v4` fail on a fresh GHES instance until those actions exist on the appliance. Plan an allow list and sync process before rolling out Actions org-wide.
- [x] `actions/actions-sync` is primarily devoted to moving GitHub.com actions to a GHES instance.
> Syncing Actions from GitHub.com is done via **GitHub Connect** (automatic, policy-controlled) or the **`actions-sync`** CLI for air-gapped or manual pipelines. `actions/actions-sync` copies action repositories into your GHES namespace so workflows can use `uses: your-ghes/actions/checkout@v4`. It is not a general-purpose workflow runner tool.
- [x] GitHub Enterprise Server instances are self-hosted, compared to GitHub Enterprise Cloud (GHEC) which is hosted and managed by GitHub.
> **GitHub Enterprise Server** runs on your infrastructure—you operate the appliance and network boundaries. **GitHub Enterprise Cloud** (GHEC) is SaaS on `*.ghe.com` and is operated by GitHub. Actions behavior differs mainly around reaching github.com actions and runner hosting, not around YAML syntax itself.
