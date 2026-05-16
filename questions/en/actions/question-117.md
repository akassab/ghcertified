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
> **Simple:** Only **repository administrators** can change Actions settings such as enablement, allowed workflows, and default token permissions.
>
> **Detailed:** Configuring whether Actions is enabled, which workflows are allowed, and default `GITHUB_TOKEN` permissions requires **repository admin** access under **Settings → Actions**. Contributors with **write** or **read** can push code and open PRs but cannot change those policies—for example, disable workflows for forks, restrict actions to an allow list, or set whether workflows need approval from outside collaborators. Org owners with admin on the repo also qualify; day-to-day developers with write access alone do not.
