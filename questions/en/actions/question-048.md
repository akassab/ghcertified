---
question: "A job called `job2` is using artifacts created in `job1`. Therefore it's important to make sure `job1` finishes before `job2` starts looking for the artifacts. How should you create that dependency?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> create this dependency using the `needs` keyword in `job2`
- <input type="checkbox" disabled> this dependency is created implicitly when using `actions/download-artifact` to download artifact from `job1`
- <input type="checkbox" disabled> create this dependency by defining `job2` after `job1` in the workflow's `.yaml` definition
- <input type="checkbox" disabled> create this dependency using the `concurrency` keyword in `job2`

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

- [x] create this dependency using the `needs` keyword in `job2`
> **Simple:** Set `needs: job1` on `job2` so `job1` finishes before `job2` looks for artifacts.
>
> **Detailed:** `needs: job1` on `job2` ensures `job1` **completes** (success or failure, unless you add other `if` rules) before `job2` starts—so artifacts from `job1` exist when `job2` runs `download-artifact`:
>
> ```yaml
> jobs:
>   job1:
>     steps:
>       - uses: actions/upload-artifact@v4
>         with:
>           name: output
>           path: out/
>   job2:
>     needs: job1
>     steps:
>       - uses: actions/download-artifact@v4
>         with:
>           name: output
> ```
>
> Listing `job2` after `job1` in YAML does **not** guarantee order—jobs without `needs` can run in parallel. `download-artifact` does **not** create an implicit dependency.
