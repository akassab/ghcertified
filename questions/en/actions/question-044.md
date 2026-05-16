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
> Artifacts from other runs in the same repository can be downloaded when the workflow has permission to read them—for example `permissions: actions: read` on `GITHUB_TOKEN` or a PAT with repo scope. `actions/download-artifact` (v4+) can target a specific `run-id` and artifact name, not only artifacts from the current run. You cannot use `upload-artifact` to fetch old files; expiration still applies, so the artifact must exist and not be past retention. "Elevated permissions" here means read access to Actions data, not a separate upload step.
