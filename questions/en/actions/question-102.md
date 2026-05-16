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
> **Simple:** `github.event` holds the webhook payload for whatever triggered the run (`push`, `pull_request`, etc.).
>
> **Detailed:** When a workflow starts, GitHub attaches the event JSON to `github.event`. Expressions read fields without another API call:
>
> ```yaml
> on:
>   pull_request:
>     types: [opened]
> jobs:
>   comment:
>     runs-on: ubuntu-latest
>     steps:
>       - run: echo "PR #${{ github.event.pull_request.number }}"
> ```
>
> For `push`, you get commits and refs; for `issue_comment`, comment body and issue number. `github.repository` is only the `owner/name` string. Job results from other jobs use `needs`; step results use `steps`—not `github.event`.
