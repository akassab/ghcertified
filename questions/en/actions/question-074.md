---
question: "Which of the following default environment variables contains the full name (e.g `octocat/hello-world`) of the repository where the workflow is running?"
documentation: "https://docs.github.com/en/actions/reference/environment-variables#default-environment-variables"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> `GITHUB_REPOSITORY`
- <input type="checkbox" disabled> `GITHUB_REPOSITORY_ID`
- <input type="checkbox" disabled> `GITHUB_REPOSITORY_OWNER`
- <input type="checkbox" disabled> `GITHUB_REPOSITORY_OWNER_ID`

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

- [x] `GITHUB_REPOSITORY`
> **Simple:** `GITHUB_REPOSITORY` is the default env var for the full `owner/name` repository slug (for example `octocat/hello-world`).
>
> **Detailed:** `GITHUB_REPOSITORY` is set to the repository's **`owner/name`** slug where the workflow runs:
>
> ```yaml
> - run: echo "$GITHUB_REPOSITORY"   # octocat/hello-world
> ```
>
> In expressions: `github.repository`. `GITHUB_REPOSITORY_ID`, `GITHUB_REPOSITORY_OWNER`, and `GITHUB_REPOSITORY_OWNER_ID` are **not** the documented default env names for the human-readable full name—numeric IDs live on the `github` context (`github.repository_id`, etc.).
