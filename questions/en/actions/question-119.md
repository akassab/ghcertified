---
question: "How can you determine if an action is a container action by looking at its action.yml file?"
documentation: "https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#runs-for-docker-container-actions"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> `runs.using` has `docker` as value
- <input type="checkbox" disabled> `runs.using` has `container` as value
- <input type="checkbox" disabled> `runs.using` has `Dockerfile` as value
- <input type="checkbox" disabled> `runs.main` has `container` as value

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

- [x] `runs.using` has `docker` as value
> Docker container actions declare `runs.using: docker` (optionally with `image`, `entrypoint`, and related keys). `container`, `Dockerfile` as a `using` value, or `runs.main: container` are not the correct indicator.
