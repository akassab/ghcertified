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
> Workflow commands use the `::command::value` format. `::debug::` writes a debug log line visible when debug logging is enabled for the run. A single colon or writing to `$GITHUB_DEBUG` is not the supported syntax.
