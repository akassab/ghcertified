---
question: "Why use a commit SHA versus a tag to pin an action?"
documentation: "https://docs.github.com/en/actions/reference/security/secure-use#using-third-party-actions"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Commit SHAs are more secure
- <input type="checkbox" disabled> Commit SHAs are immutable, whereas tags have the potential to be changed
- <input type="checkbox" disabled> Commit SHAs are more convenient to use as opposed to tags
- <input type="checkbox" disabled> Commit SHAs are guaranteed to point to the exact same code every time, tags are not
- <input type="checkbox" disabled> Commit SHAs are more difficult to trace in an audit, making it difficult for bad actors to determine how an action's code factors in overall processes.

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

- [x] Commit SHAs are more secure
> **Simple:** Pinning `uses: actions/checkout@<full-sha>` is the strongest supply-chain practice because the commit cannot change without editing your workflow.
>
> **Detailed:** Tags like `@v4` and branches are convenient but mutable unless you enable immutable releases. Security reviews and compliance checks often require SHA pinning for third-party actions. Dependabot can suggest SHA updates when maintainers publish new versions.
- [x] Commit SHAs are immutable, whereas tags have the potential to be changed
> **Simple:** Tags can be **moved** to another commit; a full SHA always identifies one commit.
>
> **Detailed:** `@v1` might run different code tomorrow if a maintainer force-updates the tag, without any change to your workflow file. Immutable releases on GitHub reduce that risk for release tags, but a full SHA always identifies one tree. Re-running a workflow still uses the action ref pinned in YAML at queue time.
- [x] Commit SHAs are guaranteed to point to the exact same code every time, tags are not
> **Simple:** A full SHA always resolves to the same file tree; `@main` and floating tags track whatever HEAD is at fetch time.
>
> **Detailed:** If an action maintainer retags `v1`, `uses: org/action@v1` can pull new code silently—SHA pinning prevents that class of surprise. Branch names like `@main` are the least deterministic for production workflows.
