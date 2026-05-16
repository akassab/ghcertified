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
> `github.event` contains the webhook payload for the trigger—commit lists for `push`, PR metadata for `pull_request`, and so on. Expressions like `${{ github.event.pull_request.number }}` read that data without calling the API again. `github.repository` is only the `owner/name` string. Job results live under `needs` and step outcomes under `steps`, not in `github.event`.
