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
> `repository_dispatch` lets external systems trigger a workflow via the REST API by POSTing an `event_type` your workflow listens for under `on.repository_dispatch.types`. For example, a deploy hook from another service can start CI without a push. `workflow_dispatch` is for manual runs from the UI/API, not arbitrary third-party webhooks. The other names listed are not valid GitHub Actions triggers.
