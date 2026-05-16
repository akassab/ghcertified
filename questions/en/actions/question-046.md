---
question: "You can only upload a single file at a time when using `actions/upload-artifact` action"
documentation: "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#uploading-build-and-test-artifacts"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> False
- <input type="checkbox" disabled> True
- <input type="checkbox" disabled> Only directories can be uploaded, not individual files

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

- [x] False
> `actions/upload-artifact` accepts a `path` that can be a single file, a directory, or a glob pattern. You can pass multiple paths (for example `dist/*.zip` and `reports/`) in one upload step, or run multiple upload steps in the same job. The statement that only one file at a time is allowed is false—you are not limited to a single file per action invocation.
