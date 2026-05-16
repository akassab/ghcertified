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
> **Simple:** Under `pull_request` / `pull_request_target`, use `branches:` to run only when the PR **targets** `prod` (or other listed branches).
>
> **Detailed:** Example for `prod` only:
>
> ```yaml
> on:
>   pull_request:
>     branches:
>       - prod
> ```
>
> The filter applies to the **base** (target) branch, not the head/feature branch. Key name is **`branches`** (plural)—`branch:` is invalid. Misconception: committing the workflow only on `prod`—triggers depend on the default branch's workflow file and the event filter, not where the YAML lives. You can combine with globs: `branches: ['release/**']` (see question-018).
