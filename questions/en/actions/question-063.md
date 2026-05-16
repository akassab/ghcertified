---
question: "Which is a correct way to print a debug message?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#example-setting-a-debug-message"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> `echo "::debug::Watch out here!"`
- <input type="checkbox" disabled> `echo ":debug:Watch out here!"`
- <input type="checkbox" disabled> `echo "::debug::message=Watch out here!"`
- <input type="checkbox" disabled> `echo "Watch out here!" >> $GITHUB_DEBUG`

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

- [x] `echo "::debug::Watch out here!"`
> Workflow commands use the `::command::value` format printed to stdout. `echo "::debug::Watch out here!"` writes a debug line that appears when debug logging is enabled for the run (repository secret `ACTIONS_STEP_DEBUG` or re-run with debug). Variants like `:debug:` (single colon) or `message=` inside the command are not the documented debug syntax; appending to `$GITHUB_DEBUG` is not how GitHub ingests debug messages.
