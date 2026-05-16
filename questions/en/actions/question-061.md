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
> **Simple:** `GITHUB_REPOSITORY` is the `owner/repo` string for the repository where the workflow runs.
>
> **Detailed:** For example `octocat/Hello-World`. Available as `$GITHUB_REPOSITORY` in shell steps or `${{ github.repository }}` in expressions. It identifies **where** the workflow is running, not the user or workflow file path alone.

- [x] `GITHUB_WORKFLOW`
> **Simple:** `GITHUB_WORKFLOW` is the workflow's display name from the `name:` field (or the filename if `name` is omitted).
>
> **Detailed:** If your file is `ci.yml` with `name: CI`, the value is `CI`. This is the workflow title in the Actions UI—not the job name (`GITHUB_JOB`), run number, or commit SHA.

- [x] `GITHUB_ACTOR`
> **Simple:** `GITHUB_ACTOR` is the username or bot account that triggered the workflow run.
>
> **Detailed:** Examples: `octocat` for a user's push, `dependabot[bot]` for Dependabot, `github-actions[bot]` for some automated events. Use it to branch behavior (`if: github.actor == 'dependabot[bot]'`) or audit who started the run. `GITHUB_USER` and `GITHUB_ORGANIZATION` are not in this default set; `GITHUB_TOKEN` is provided as a **secret**, not as a default env var in this list.
