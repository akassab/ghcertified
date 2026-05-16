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
> Repository-level secrets override organization secrets with the same name. Defining `API_KEY` on the repo replaces the org value for workflows in that repository.

- [x] By creating a environment secret with the same name `API_KEY`
> Environment secrets override repository and organization secrets when the job runs in that environment. A job targeting the environment will see the environment's `API_KEY` instead of the org default.
