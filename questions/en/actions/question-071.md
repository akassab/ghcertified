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
> Repository-level secrets override organization secrets with the same name. If the org defines `API_KEY` and the repository also defines `API_KEY`, `${{ secrets.API_KEY }}` in workflows for that repo resolves to the repository value—the org secret is shadowed, not merged.

- [x] By creating a environment secret with the same name `API_KEY`
> Environment secrets override repository and organization secrets when the job runs in that environment. A deploy job with `environment: production` and an environment secret `API_KEY` sees the production value instead of the org or repo default. Jobs that do not target that environment keep using the repo or org secret per the usual hierarchy.
