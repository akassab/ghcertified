---
question: "`GITHUB_TOKEN` can be used to check out any repository."
documentation: "https://docs.github.com/en/actions/concepts/security/github_token#about-the-github_token"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> True
- <input type="checkbox" disabled> Only with elevated permissions
- <input type="checkbox" disabled> False

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

- [x] False
> **Simple:** `GITHUB_TOKEN` is scoped to the repo that contains the workflow—it does **not** automatically access every repo in the org.
>
> **Detailed:** The token cannot clone or push to arbitrary other repositories by default. Checking out another repo with `actions/checkout` and `repository: other-org/other-repo` requires a PAT or installation token stored as a secret with access to that repo. The statement that the token always has access to any repository in the organization is **false**; permissions follow the workflow repository and the `permissions` key in YAML.
