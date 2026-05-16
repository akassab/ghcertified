---
question: "A workflow is triggered when pull requests are reopened. Why might this be the cause?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#pull_request"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> `types: [reopened]` is defined under the `pull_request` event. 
- <input type="checkbox" disabled> Branch protection rules were improperly configured.
- <input type="checkbox" disabled> No activity types are defined under the `pull_request` event.
- <input type="checkbox" disabled> `on: schedule` was configured with `pull_requests: [reopened]`

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

- [x] `types: [reopened]` is defined under the `pull_request` event. 
> Listing only `reopened` under `pull_request.types` limits runs to reopened PRs; pushes to the branch after open (`synchronize`) will not trigger the workflow.
- [x] No activity types are defined under the `pull_request` event.
> When `types` is omitted, `pull_request` defaults to `opened`, `synchronize`, and `reopened`, so updates to the PR branch will trigger runs.
