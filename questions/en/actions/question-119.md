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
> Container actions are identified by `runs.using: docker` in `action.yml`, optionally alongside `image`, `args`, `entrypoint`, and `post-entrypoint`. Composite actions use `using: composite`; JavaScript actions use `node20`. Values like `container`, `Dockerfile`, or `runs.main: container` are not valid `using` values in the metadata schema.
