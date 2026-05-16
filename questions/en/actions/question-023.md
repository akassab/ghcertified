---
question: "To stop a workflow from running temporarily without modifying the source code you should"
documentation: "https://docs.github.com/en/actions/using-workflows/disabling-and-enabling-a-workflow"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Use the `Disable workflow` option in GitHub Actions
- <input type="checkbox" disabled> Remove secrets that are required for this workflow
- <input type="checkbox" disabled> Delete environment that is required for this workflow
- <input type="checkbox" disabled> Prevent any new commits to main branch

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

- [x] Use the `Disable workflow` option in GitHub Actions
> **Simple:** In the Actions tab, **Disable workflow** stops new runs without changing YAML in git.
>
> **Detailed:** Path: Actions → select workflow → **⋯** → **Disable workflow**. While disabled, `push`, `schedule`, and other triggers will not start new runs (in-progress runs are not retroactively killed by disable alone). Re-enable from the same menu when ready. Misconception: you must delete the file or comment out `on:`—disable is the supported temporary pause. Deleting branches or renaming files is heavier-handed and affects version control history.
