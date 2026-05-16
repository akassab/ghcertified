---
question: "Dorothea is troubleshooting a workflow triggered by a push event and is interested in seeing details about the webhook. How can she view the entire payload of the webhook that triggered the workflow?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Printing the contents of the `github.event` object in a step
- <input type="checkbox" disabled> Checking the "Show event webhook payload" checkbox under the workflow run options.
- <input type="checkbox" disabled> Setting a secret or variable named `SHOW_EVENT_PAYLOAD` to `true`
- <input type="checkbox" disabled> Navigating to the "Webhooks" section of the repository settings 

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

- [x] Printing the contents of the `github.event` object in a step
> `github.event` will show the full event webhook payload. This payload varies upon the type of event. See the [Webhook events and payloads](https://docs.github.com/en/webhooks/webhook-events-and-payloads) for more details.
