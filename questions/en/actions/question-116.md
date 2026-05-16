---
question: "When can you delete workflow runs?"
documentation: "https://docs.github.com/en/actions/how-tos/manage-workflow-runs/delete-a-workflow-run"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> After the workflow run has completed, regardless of its age.
- <input type="checkbox" disabled> After the workflow run has completed and at least 30 days have passed.
- <input type="checkbox" disabled> Workflow runs can be deleted at any time, regardless of their status or age.
- <input type="checkbox" disabled> Workflow runs cannot be deleted, but they can be archived.

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

- [x] After the workflow run has completed, regardless of its age.
> You can delete a workflow run after it has **finished** (success, failure, or cancelled)—there is no mandatory 14- or 30-day waiting period before deletion. In the UI, open the run’s **⋯** menu and choose **Delete workflow run**, or use the REST API once the run is no longer `in_progress`. This is useful for clearing noisy experimental runs without waiting for automatic retention to expire.
