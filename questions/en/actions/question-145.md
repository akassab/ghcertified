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
> **Simple:** Use `actions/download-artifact` in a later job to fetch files uploaded with `upload-artifact`.
>
> **Detailed:** Typical pattern: build job uploads `dist/`, deploy job downloads it before publishing. For cross-run downloads, pass `run-id`. Artifact names must match what the upload step used.
- [x] By downloading artifacts from the Github Actions UI workflow run
> **Simple:** On the Actions run page, expand **Artifacts** and download a zip—no YAML required.
>
> **Detailed:** Handy for debugging a single failed build; each artifact lists name and size. This does not replace automation for production deploys but is the fastest path for humans inspecting outputs.
- [x] By using a specific GitHub API endpoint
> **Simple:** The REST **Download an artifact** endpoint streams archives for scripts and integrations.
>
> **Detailed:** Authenticate with a PAT or `GITHUB_TOKEN` that has `actions:read`. Use the artifact ID from the run’s artifact list in your integration code—for dashboards or custom release tooling outside Actions YAML.
