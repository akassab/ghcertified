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
> For a single event like `push`, `branches` and `paths` filters are combined with AND logic—the ref must match the branch filter and the commit must touch a matching path. They are not OR filters.
