---
question: "How can organizations which are using GitHub Enterprise Server enable automatic syncing of third party GitHub Actions hosted on GitHub.com to their GitHub Enterprise Server instance?"
documentation: "https://docs.github.com/en/enterprise-server@3.17/admin/github-actions/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Using GitHub Connect
- <input type="checkbox" disabled> GitHub Enterprise Server has access to all GitHub.com Actions by default
- <input type="checkbox" disabled> Using actions-sync tool
- <input type="checkbox" disabled> GitHub Enterprise Server (GHES) cannot use GitHub.com Actions because of its on-premise nature and no internet access.

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

- [x] Using GitHub Connect
> GitHub Connect links a GitHub Enterprise Server (GHES) instance to GitHub Enterprise Cloud on GitHub.com so administrators can enable controlled access to Actions hosted on GitHub.com. GHES does not see every github.com action by default—Connect (or the separate `actions-sync` tool for air-gapped installs) is how you bring third-party actions in. On-premise GHES can still use Actions; lack of internet means you sync bundles rather than pulling live on every run.
