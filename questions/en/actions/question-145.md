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
> A later job or step can download artifacts produced earlier in the same or another workflow run using this action.
- [x] By downloading artifacts from the Github Actions UI workflow run
> Using the UI allows you a hands-on approach to downloading artifacts. See the [documentation](https://docs.github.com/en/actions/how-tos/manage-workflow-runs/download-workflow-artifacts) for more details.
- [x] By using a specific GitHub API endpoint
> The Github API has a "Download an artifact" endpoint. See the [documentation](https://docs.github.com/en/rest/actions/artifacts?apiVersion=2026-03-10#download-an-artifact) for more details.
