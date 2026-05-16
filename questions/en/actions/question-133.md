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
> Commit SHAs are more secure because they are currently the only way to use an action as an immutable release
- [x] Commit SHAs are immutable, whereas tags have the potential to be changed
> [Tags](https://git-scm.com/book/en/v2/Git-Basics-Tagging) are pointed to specific commits. Their reference can be changed, which is not always obvious. Tag-related vulnerabilities can be mitigated by enabling [immutable releases](https://docs.github.com/en/code-security/concepts/supply-chain-security/immutable-releases), but a commit SHA will always point to the same commit and is immutable.
> Re-running a workflow uses the same commit SHA and Git ref of the original event that triggered the workflow run.
- [x] Commit SHAs are guaranteed to point to the exact same code every time, tags are not
> A full commit SHA always resolves to the same tree of files. Tags and branch names are mutable references, so the action code behind `@v1` can change without editing your workflow file.
