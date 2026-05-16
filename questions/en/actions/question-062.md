---
question: "Your organization defines a secret `SomeSecret`, however when you reference that secret in a workflow using `${{ secrets.SomeSecret }}` it provides a different value than expected. What may be the reason for that?"
documentation: "https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#naming-your-secrets"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> The secret `SomeSecret` is also declared in repository scope
- <input type="checkbox" disabled> The secret `SomeSecret` is also declared in enterprise scope
- <input type="checkbox" disabled> `${{ secrets.SomeSecret }}` expression is only used for repository scoped secrets
- <input type="checkbox" disabled> You need to use the GitHub API to access organization scoped secrets

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

- [x] The secret `SomeSecret` is also declared in repository scope
> When the same secret name exists at multiple levels, the lowest level wins: environment overrides repository, repository overrides organization. A repository-level `SomeSecret` would shadow the organization secret you expected.
