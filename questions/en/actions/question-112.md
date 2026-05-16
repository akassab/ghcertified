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
> Deleting workflow run logs requires **write** access to the repository, because log deletion modifies Actions data for that repo. Users with only **read** access can view logs but cannot delete them. **Admin** and **owner** roles include write, but "write" is the permission level GitHub documents for this action.
