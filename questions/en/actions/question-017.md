---
question: "When using the `pull_request` and `pull_request_target` events, how do you configure the workflow to run only when targeting the `prod` branch?"
documentation: "https://docs.github.com/en/actions/using-workflows/triggering-a-workflow#using-filters-to-target-specific-branches-for-pull-request-events"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Using `branches` filter
- <input type="checkbox" disabled> Using `branch` filter
- <input type="checkbox" disabled> You create the workflow only on `prod` branch
- <input type="checkbox" disabled> Using glob patterns

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

- [x] Using `branches` filter
> Under `pull_request` or `pull_request_target`, use a `branches` filter so the workflow runs only when the PR **targets** matching branches—for example `branches: [prod]`. The key is `branches` (plural), not `branch`. Glob patterns like `release/*` go inside the list; storing the workflow file only on `prod` does not limit when GitHub triggers it.
