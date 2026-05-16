---
question: "Which statements are true regarding `github.ref` when the workflow is triggered by a `pull_request` event?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> In pull requests that have not been merged, `github.ref` refers to the fully-formed ref of the pull request merge branch/tag 
- <input type="checkbox" disabled> In pull requests that have been merged, `github.ref` refers to the fully-formed ref of the branch that was merged into.
- <input type="checkbox" disabled> In pull requests (regardless of merge status), `github.ref` refers to the pull request number 
- <input type="checkbox" disabled> In pull requests (regardless of merge status), `github.ref` is the SHA of the last merge commit on the `GITHUB_REF` branch.
- <input type="checkbox" disabled> In pull requests that have not been merged, `github.ref` is the fully-formed ref of the pull request title. 
- <input type="checkbox" disabled> In pull requests that have been merged, `github.ref` is the type of fully-formed ref that triggered the workflow run. The value will either be `branch`, `tag`, or `null` (if the ref was not fully-formed).

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

- [x] In pull requests that have not been merged, `github.ref` refers to the fully-formed ref of the pull request merge branch/tag 
> For more information about refs, see the official [Git documentation](https://git-scm.com/book/en/Git-Internals-Git-References).
- [x] In pull requests that have been merged, `github.ref` refers to the fully-formed ref of the branch that was merged into.
> After merge, the ref points at the base branch (for example `refs/heads/main`), not the ephemeral pull request merge ref used while the PR is open.
