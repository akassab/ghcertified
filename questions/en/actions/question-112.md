---
question: "What level of access is required on a GitHub repository in order to delete log files from workflow runs?"
documentation: "https://docs.github.com/en/actions/monitoring-and-troubleshooting-workflows/using-workflow-run-logs"
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
> **Simple:** Deleting workflow run logs requires **write** access to the repository.
>
> **Detailed:** Removing logs changes Actions data for the repo, so GitHub requires at least the **write** permission level. Collaborators with **read** access can view logs in the Actions tab but cannot delete them.
>
> Roles that include write—such as maintainers with write, admins, and owners—can delete logs. The correct answer is the documented permission name **write**, not merely "admin" or "owner," even though those roles satisfy the requirement. This applies per repository; organization owners do not delete another repo's logs without appropriate repo access.
