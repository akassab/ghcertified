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
> **Simple:** You can delete a workflow run as soon as it has finished—success, failure, or cancelled—with no minimum age wait.
>
> **Detailed:** Deletion is allowed only after the run is no longer `in_progress`. In the UI, open the run’s **⋯** menu and choose **Delete workflow run**, or use the REST API once the run has a terminal conclusion. There is no mandatory 14- or 30-day waiting period before you may delete manually—unlike automatic retention policies that expire old logs on a schedule. That is useful for clearing noisy experimental runs immediately without waiting for org retention to apply.
