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
> With `pull_request.types: [reopened]`, the workflow runs only when someone reopens a closed PR—not when new commits are pushed to the branch (`synchronize`). A contributor pushing fixes to an open PR will not trigger CI, which is easy to misconfigure. Omit `types` unless you intentionally want that narrow behavior.
- [x] No activity types are defined under the `pull_request` event.
> When `types` is omitted under `pull_request`, GitHub defaults to `opened`, `synchronize`, and `reopened`. That means new commits on the PR branch trigger runs, which is what most CI workflows expect. You only need an explicit `types` list when you want a subset of those activities.
