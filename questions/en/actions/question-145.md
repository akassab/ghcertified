---
question: "In what ways can you download an artifact?"
documentation: "https://github.com/actions/upload-artifact#inputs"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> By using the `actions/download-artifact` action in a workflow 
- <input type="checkbox" disabled> By downloading artifacts from the Github Actions UI workflow run
- <input type="checkbox" disabled> By using a specific GitHub API endpoint
- <input type="checkbox" disabled> By using the `actions/upload-artifact` action in a workflow
- <input type="checkbox" disabled> By remotely accessing self-hosted runners via SSH and accessing the `.github/artifacts` directory

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

- [x] By using the `actions/download-artifact` action in a workflow 
> `actions/download-artifact` in a later job retrieves files uploaded with `upload-artifact` in the same or a prior run (when you pass `run-id` for cross-run downloads). Typical pattern: build job uploads `dist/`, deploy job downloads it before publishing. Artifact names must match what the upload step used.
- [x] By downloading artifacts from the Github Actions UI workflow run
> From the Actions run page, expand **Artifacts** and download a zip without writing YAML—handy for debugging a single failed build. Each artifact lists its name and size. This does not replace automation for production deploys but is the fastest path for humans inspecting outputs.
- [x] By using a specific GitHub API endpoint
> The REST API **Download an artifact** endpoint streams artifact archives for custom tooling or dashboards. Scripts authenticate with a PAT or `GITHUB_TOKEN` that has `actions:read`. Use the artifact ID from the run’s artifact list in your integration code.
