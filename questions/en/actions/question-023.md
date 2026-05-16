---
question: "To stop a workflow from running temporarily without modifying the source code you should"
documentation: "https://docs.github.com/en/actions/using-workflows/disabling-and-enabling-a-workflow"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Use the `Disable workflow` option in GitHub Actions
- <input type="checkbox" disabled> Remove secrets that are required for this workflow
- <input type="checkbox" disabled> Delete environment that is required for this workflow
- <input type="checkbox" disabled> Prevent any new commits to main branch

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

- [x] Use the `Disable workflow` option in GitHub Actions
> In the Actions tab, open the workflow and choose **Disable workflow** to stop new runs without editing the YAML in git. Scheduled and event-triggered runs are blocked while disabled; re-enable when you want them back—useful during maintenance or when a flaky workflow should not queue more runs.
