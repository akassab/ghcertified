---
question: "Who can bypass configured deployment protection rules to force deployment (by default)"
documentation: "https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment#allow-administrators-to-bypass-configured-protection-rules"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Repository administrators
- <input type="checkbox" disabled> Anyone with repository write permission
- <input type="checkbox" disabled> Anyone with repository read permission

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

- [x] Repository administrators
> Configuring whether Actions is enabled, which workflows are allowed, and default `GITHUB_TOKEN` permissions requires **repository admin** access. Contributors with **write** or **read** can push code and open PRs but cannot change those settings under **Settings → Actions**. Only an org owner or someone with admin on the repo can, for example, disable workflows for forks or restrict actions to an allow list.
