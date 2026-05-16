---
question: "What level of permission is required to re-run the workflows"
documentation: "https://docs.github.com/en/actions/managing-workflow-runs/re-running-workflows-and-jobs"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> write 
- <input type="checkbox" disabled> read
- <input type="checkbox" disabled> admin
- <input type="checkbox" disabled> owner

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

- [x] write 
> **Simple:** **Write** access to the repository is enough to re-run workflows from the Actions tab or API.
>
> **Detailed:** Anyone with **write** (or higher) permission on the repository can re-run a workflow—for example, open a failed run on the Actions tab and choose **Re-run all jobs**, or call the REST API to start a new attempt. **Read** access lets you view run history and logs but not trigger a re-run. **Admin** and **owner** are not the permission labels GitHub documents for this specific action; **write** is the documented threshold for collaborators who need to restart CI without being a repo admin.
