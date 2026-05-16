---
question: "Which context holds information about the event that triggered a workflow run?"
documentation: "https://docs.github.com/en/actions/using-workflows/triggering-a-workflow#using-event-information"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> `github.event`
- <input type="checkbox" disabled> `github.repository`
- <input type="checkbox" disabled> `github.job`
- <input type="checkbox" disabled> `jobs.<job_id>.result`

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

- [x] `github.event`
> The `github.event` context holds the webhook payload for the event that triggered the workflow (for example push or pull_request data). `github.repository` is the repo name, `github.job` is not a standard context, and job results use `jobs.<job_id>.result`.
