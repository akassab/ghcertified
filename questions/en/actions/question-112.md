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
> The default `GITHUB_TOKEN` permissions for workflows triggered from the repository typically include `contents: read` and can be raised to `write` where needed; `read`, `admin`, and `owner` are not the standard default permission level name in this context.
