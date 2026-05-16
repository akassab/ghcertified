---
question: "Which event is triggered by a webhook action from outside of the repository?"
documentation: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> repository_dispatch
- <input type="checkbox" disabled> webhook_dispatch
- <input type="checkbox" disabled> workflow_dispatch
- <input type="checkbox" disabled> remote_dispatch
- <input type="checkbox" disabled> api_dispatch

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

- [x] repository_dispatch
> **Simple:** External systems trigger your repo via the REST API with `repository_dispatch` and a custom `event_type`.
>
> **Detailed:** Define the workflow:
>
> ```yaml
> on:
>   repository_dispatch:
>     types: [deploy-approved]
> jobs:
>   run:
>     runs-on: ubuntu-latest
>     steps:
>       - run: echo "${{ github.event.client_payload.ref }}"
> ```
>
> An external service POSTs to `POST /repos/{owner}/{repo}/dispatches` with body `{ "event_type": "deploy-approved", "client_payload": { ... } }`. That is the webhook-style integration **from outside the repo**. Misconception: `workflow_dispatch` is the same—it is for manual/API runs tied to a workflow file, not arbitrary external event types. Names like `webhook_dispatch` are not valid `on:` events.
