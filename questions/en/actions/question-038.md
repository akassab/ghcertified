---
question: "Which of these is a way of using `action_state` in `step_two`?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#example-of-writing-an-environment-variable-to-github_env"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

```yaml
steps:
  - name: Set the value
    id: step_one
    run: |
      echo "action_state=yellow" >> "$GITHUB_ENV"
  - name: Use the value
    id: step_two
    run: ?
```
- <input type="checkbox" disabled> `run: echo "$action_state"`
- <input type="checkbox" disabled> `run: echo "${{ steps.step_one.outputs.action_state }}"`
- <input type="checkbox" disabled> `run: echo "$steps.step_one.outputs.action_state"`
- <input type="checkbox" disabled> `run: echo "${{ action_state }}"`

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

```yaml
steps:
  - name: Set the value
    id: step_one
    run: |
      echo "action_state=yellow" >> "$GITHUB_ENV"
  - name: Use the value
    id: step_two
    run: ?
```
- [x] `run: echo "$action_state"`
> `echo "action_state=yellow" >> "$GITHUB_ENV"` sets a job-level env var for **later** steps in the same job. In `step_two`, the shell expands `$action_state` directly. Values written to `$GITHUB_ENV` are not available via `steps.*.outputs`—that path is only for data written to `$GITHUB_OUTPUT`.
