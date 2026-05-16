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
> **Simple:** The four status functions are `success()`, `failure()`, `always()`, and `cancelled()` for `if` on jobs and steps.
>
> **Detailed:** These functions describe the **current status of prior steps or jobs** in the same job or workflow run:
>
> ```yaml
> steps:
>   - id: test
>     run: npm test
>   - name: Upload logs on failure
>     if: failure()
>     uses: actions/upload-artifact@v4
>     with:
>       name: logs
>       path: logs/
>   - name: Notify either way
>     if: always()
>     run: ./notify.sh
> ```
>
> `success()` is the default behavior—later steps skip after an error unless you use `if: always()` or `if: failure()`. `cancelled()` runs when the workflow was cancelled. Names like `completed()`, `status()`, and `state()` are **not** valid status check functions in GitHub Actions expressions.
