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
> **Simple:** With `types: [reopened]` only, pushes to an open PR (`synchronize`) do **not** trigger the workflow—CI will not run on new commits.
>
> **Detailed:** `pull_request.types: [reopened]` limits runs to when someone reopens a closed PR—not when new commits are pushed to the branch (`synchronize`). A contributor pushing fixes to an open PR will not trigger CI, which is a common misconfiguration. Omit `types` unless you intentionally want that narrow behavior.
- [x] No activity types are defined under the `pull_request` event.
> **Simple:** When `types` is omitted, GitHub defaults to `opened`, `synchronize`, and `reopened`—so new PR commits trigger CI.
>
> **Detailed:** That default is what most CI workflows expect: new commits on the PR branch trigger runs via `synchronize`. You only need an explicit `types` list when you want a subset of activities—for example, label-only workflows with `types: [labeled]`.
