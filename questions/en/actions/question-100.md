---
question: "Select status check functions in GitHub Actions"
documentation: "https://docs.github.com/en/actions/learn-github-actions/expressions#status-check-functions"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> `success()`, `always()`, `cancelled()` and `failure()`
- <input type="checkbox" disabled> `completed()`, `always()`, `cancelled()` and `failure()`
- <input type="checkbox" disabled> `status()`, `always()`, `cancelled()` and `failure()`
- <input type="checkbox" disabled> `state()`, `always()`, `cancelled()` and `failure()`

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

- [x] `success()`, `always()`, `cancelled()` and `failure()`
> `success()`, `failure()`, `always()`, and `cancelled()` are the built-in status functions for `if` on jobs and steps. For example, `if: failure()` runs upload steps only when a prior step failed. `success()` is the implicit default for steps that should not run after errors. Names like `completed()`, `status()`, and `state()` are not valid status check functions in expressions.
