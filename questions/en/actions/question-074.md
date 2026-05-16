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
> `github.repository_id` (and related owner ID fields) are available on the `github` context in expressions, but the default environment variable for the repo's `owner/name` string is `GITHUB_REPOSITORY`. The `_ID` and `_OWNER` suffixed names in the distractors are not the standard default env vars for those values.
