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
> When the same secret name exists at multiple levels, the most specific scope wins: environment overrides repository, repository overrides organization. If the org defines `SomeSecret` but the repo also defines `SomeSecret`, `${{ secrets.SomeSecret }}` in that repo resolves to the repository value—you do not need a different expression for org vs repo secrets. Enterprise-level secrets sit above org in the hierarchy; the distractors about API-only access or repo-only syntax are wrong.
