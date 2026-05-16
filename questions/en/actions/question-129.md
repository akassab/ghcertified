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
> `GITHUB_TOKEN` is scoped to the repository that **contains** the workflow run—it cannot clone or push to arbitrary other repos by default. Checking out `actions/checkout` with `repository: other-org/other-repo` requires a PAT or installation token stored as a secret. The statement that the token always has access to any repository in the org is **false**.
