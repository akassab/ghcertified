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
> GitHub Enterprise Server does not reach GitHub.com actions until an administrator enables GitHub Connect or syncs actions manually.
- [x] `actions/actions-sync` is primarily devoted to moving GitHub.com actions to a GHES instance.
> Syncing Actions from GitHub.com is mainly accomplished either via GitHub Connect or `actions-sync`. The `actions/actions-sync` tool is a [manual way](https://docs.github.com/en/enterprise-server/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom) to perform this process. 
- [x] GitHub Enterprise Server instances are self-hosted, compared to GitHub Enterprise Cloud (GHEC) which is hosted and managed by GitHub.
> [GitHub Enterprise Server](https://docs.github.com/en/enterprise-server/admin/overview/about-github-enterprise-server) is a self-hosted version of the GitHub platform. [GitHub Enterprise Cloud](https://docs.github.com/en/enterprise-cloud@latest/admin/overview/about-github-enterprise-cloud) instances are hosted on a dedicated subdomain of GHE.com. All GHE.com subdomains are hosted by GitHub.
