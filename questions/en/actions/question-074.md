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
> `GITHUB_REPOSITORY` is the default environment variable for the repository's full `owner/name` slug (for example `octocat/hello-world`) where the workflow runs. Use `$GITHUB_REPOSITORY` in shell steps or `github.repository` in expressions. `GITHUB_REPOSITORY_ID` and owner ID variables are not the documented default env names for the human-readable repo name—the numeric IDs live on the `github` context instead.
