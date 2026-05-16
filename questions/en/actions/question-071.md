---
question: "How can you override an organization-level GitHub Secret `API_KEY` with a different value when working within a repository?"
documentation: "https://docs.github.com/en/actions/reference/security/secrets"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> By creating a repository secret with the same name `API_KEY`
- <input type="checkbox" disabled> By creating a environment secret with the same name `API_KEY`
- <input type="checkbox" disabled> By creating a enterprise secret with the same name `API_KEY`
- <input type="checkbox" disabled> By creating a enterprise secret with the name `OVERRIDE_API_KEY`
- <input type="checkbox" disabled> By creating a repository secret with the name `OVERRIDE_API_KEY`
- <input type="checkbox" disabled> By creating a environment secret with the name `OVERRIDE_API_KEY`
- <input type="checkbox" disabled> By creating a repository secret with the name `REPOSITORY_API_KEY`
- <input type="checkbox" disabled> By creating a environment secret with the name `ENVIRONMENT_API_KEY`

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

- [x] By creating a repository secret with the same name `API_KEY`
> **Simple:** Define `API_KEY` at repository scope with the same name as the org secret—the repo value wins in that repository.
>
> **Detailed:** If the organization has `API_KEY` and the repository also defines `API_KEY`, `${{ secrets.API_KEY }}` in workflows in **that repo** uses the repository secret. The org value is hidden, not merged. A different name like `REPO_API_KEY` does not override the org secret—you need the **identical name** at a narrower scope.

- [x] By creating a environment secret with the same name `API_KEY`
> **Simple:** Define `API_KEY` on an environment (for example `production`) to override org/repo values when a job uses that environment.
>
> **Detailed:** Resolution order is **environment > repository > organization**. When a job sets `environment: production`, a production-scoped `API_KEY` overrides repo and org secrets with the same name:
>
> ```yaml
> jobs:
>   deploy:
>     environment: production
> ```
>
> Jobs without `environment: production` keep using repository or organization `API_KEY`.
