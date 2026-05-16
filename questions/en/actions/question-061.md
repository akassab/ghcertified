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
> Default environment variable set by GitHub to `owner/repo` (for example `octocat/Hello-World`) for the repository where the workflow runs. It is always available as `$GITHUB_REPOSITORY` in steps and as `github.repository` in expressions. Use it when logging or passing the repo slug to tools without hard-coding the name.

- [x] `GITHUB_WORKFLOW`
> The display name of the workflow—the `name:` field in the YAML, or the workflow filename if `name` is omitted (for example `CI` or `deploy.yml`). It appears in the Actions UI and in `$GITHUB_WORKFLOW` for logging which pipeline definition is executing. It is not the job name or the workflow run number.

- [x] `GITHUB_ACTOR`
> The account that initiated the workflow run (for example `octocat` after a push or `github-actions[bot]` for some automations). `GITHUB_USER` and `GITHUB_ORGANIZATION` are not standard default environment variable names. `GITHUB_TOKEN` is provided as an automatic secret for the job, not as a documented default env var in this list.
