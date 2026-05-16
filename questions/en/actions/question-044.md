---
question: "To access an `artifact` that was created in another, previously triggered workflow run you can:"
documentation: "https://github.com/actions/download-artifact?tab=readme-ov-file#download-artifacts-from-other-workflow-runs-or-repositories"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> You cannot access `artifacts` that were created in a different workflow run
- <input type="checkbox" disabled> Use the `actions/download-artifact` action with elevated permissions.
- <input type="checkbox" disabled> Use the `actions/upload-artifact` action.
- <input type="checkbox" disabled> Use the `actions/download-artifact` action and make sure the artifact is not expired

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

- [x] Use the `actions/download-artifact` action with elevated permissions.
> Artifacts from other runs in the same repository can be downloaded when the workflow has permission to read them (for example `actions: read` on the token or a PAT with appropriate scope). `actions/download-artifact` can target artifacts from a specified run, not only the current run.
