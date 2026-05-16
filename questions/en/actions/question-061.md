---
question: "Which of the following are default environment variables in GitHub Actions?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/variables#default-environment-variables"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> `GITHUB_REPOSITORY`
- <input type="checkbox" disabled> `GITHUB_WORKFLOW`
- <input type="checkbox" disabled> `GITHUB_ACTOR`
- <input type="checkbox" disabled> `GITHUB_USER`
- <input type="checkbox" disabled> `GITHUB_ORGANIZATION`
- <input type="checkbox" disabled> `GITHUB_TOKEN`

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

- [x] `GITHUB_REPOSITORY`
> Default variable set by GitHub to `owner/repo` for the repository where the workflow runs. It is always available in `env` and the `github` context.

- [x] `GITHUB_WORKFLOW`
> The name of the workflow file's `name:` field (or the filename if omitted). Useful for logging which workflow definition is executing.

- [x] `GITHUB_ACTOR`
> The account that initiated the workflow run. `GITHUB_USER` and `GITHUB_ORGANIZATION` are not standard default env vars; `GITHUB_TOKEN` is injected separately as a secret, not a documented default env name in this list.
