---
question: "How can you use the GitHub API to download workflow run logs?"
documentation: "https://docs.github.com/en/rest/actions/workflow-runs?apiVersion=2022-11-28#download-workflow-run-logs"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> `GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs`
- <input type="checkbox" disabled> `POST /repos/{owner}/{repo}/actions/runs/{run_id}/logs`
- <input type="checkbox" disabled> `HEAD /repos/{owner}/{repo}/actions/runs/{run_id}/logs`
- <input type="checkbox" disabled> `PUT /repos/{owner}/{repo}/actions/runs/{run_id}/logs`

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

- [x] `GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs`
> The REST API downloads workflow run logs with `GET /repos/{owner}/{repo}/actions/runs/{run_id}/logs`. The response is typically a redirect to a zip archive of the job logs for that run. `POST`, `PUT`, and `HEAD` are not the documented download operation—clients follow the redirect with the same auth token to retrieve the bundle.
