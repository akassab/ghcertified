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
> **Simple:** GHES does not fetch actions from GitHub.com or the Marketplace until an admin enables GitHub Connect or syncs actions.
>
> **Detailed:** Workflows that reference `actions/checkout@v4` fail on a fresh GHES instance until those actions exist on the appliance. Plan an allow list and sync process before rolling out Actions org-wide. This is a common gap when copying workflows from github.com without mirroring dependencies.
- [x] `actions/actions-sync` is primarily devoted to moving GitHub.com actions to a GHES instance.
> **Simple:** Use **GitHub Connect** or the **`actions-sync`** CLI to copy GitHub.com actions into GHES—not a general runner tool.
>
> **Detailed:** `actions-sync` copies action repositories into your GHES namespace so workflows can use `uses: your-ghes/actions/checkout@v4`. Air-gapped installs rely on manual sync pipelines. It does not execute workflow jobs; it only replicates action repos.
- [x] GitHub Enterprise Server instances are self-hosted, compared to GitHub Enterprise Cloud (GHEC) which is hosted and managed by GitHub.
> **Simple:** GHES runs on your infrastructure; GHEC is GitHub-hosted SaaS on `*.ghe.com`.
>
> **Detailed:** You operate the GHES appliance and network boundaries. GHEC is managed by GitHub. Actions YAML syntax is largely the same; differences show up around reaching github.com actions, runner hosting, and enterprise policy—not basic workflow structure.
