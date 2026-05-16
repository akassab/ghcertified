---
question: "In GitHub Actions, if you define both branches and paths filter, what is the effect on the workflow execution?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#onpull_requestpull_request_targetbranchesbranches-ignore"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> the workflow will only run when both `branches` and `paths` are satisfied
- <input type="checkbox" disabled> the workflow will run when either `branches` or `paths` are satisfied, but will only apply the matching filter
- <input type="checkbox" disabled> the workflow will run when either `branches` or `paths` are satisfied
- <input type="checkbox" disabled> the workflow will not run when both `branches` and `paths` are satisfied

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

- [x] the workflow will only run when both `branches` and `paths` are satisfied
> For one event such as `push`, `branches` and `paths` filters combine with AND logic: the ref must match the branch filter and the commit must change at least one matching path. A push to `main` that only touches `README.md` when `paths: ['src/**']` is set will not run the workflow. They are not OR filters—both conditions must pass.
