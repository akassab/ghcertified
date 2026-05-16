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
> **Simple:** Print debug messages with `echo "::debug::your message"`—shown when step debug logging is enabled.
>
> **Detailed:** Workflow commands use the **`::command::value`** format on stdout:
>
> ```yaml
> - run: echo "::debug::Watch out here!"
> ```
>
> Debug lines appear when debug logging is enabled (`ACTIONS_STEP_DEBUG` secret or re-run with debug). Variants like `:debug:` (single colon), `::debug::message=...`, or writing to `$GITHUB_DEBUG` are **not** the documented syntax.
