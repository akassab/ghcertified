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
> Under an event like `push` or `pull_request`, the `branches` filter limits which branch activity triggers the workflow (for example `branches: [prod]`). The key is `branches`, not `branch`. You can use glob patterns **inside** the `branches` list, but creating the workflow file only on `prod` does not restrict when it runs.
