---
question: "Which of the following default environment variables contains the name of the person or app that initiated the workflow run?"
documentation: "https://docs.github.com/en/actions/reference/environment-variables#default-environment-variables"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> `GITHUB_USER`
- <input type="checkbox" disabled> `GITHUB_REPOSITORY`
- <input type="checkbox" disabled> `GITHUB_WORKFLOW`
- <input type="checkbox" disabled> `GITHUB_ACTOR`

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

- [x] `GITHUB_ACTOR`
> `GITHUB_ACTOR` is the username of the person or app that triggered the workflow—for example the user who pushed, opened a PR, or clicked **Run workflow**. You can branch on it in expressions (`if: github.actor == 'dependabot[bot]'`) or log it in a step. `GITHUB_REPOSITORY` is `owner/repo`; `GITHUB_WORKFLOW` is the workflow's display name—neither identifies who started the run.
