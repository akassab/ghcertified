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
> **Simple:** Values written to `$GITHUB_ENV` become shell env vars in later steps—use `$action_state`, not `steps.*.outputs`.
>
> **Detailed:** From the question:
>
> ```yaml
> steps:
>   - name: Set the value
>     id: step_one
>     run: |
>       echo "action_state=yellow" >> "$GITHUB_ENV"
>   - name: Use the value
>     id: step_two
>     run: echo "$action_state"
> ```
>
> `$GITHUB_ENV` exposes variables to **subsequent** steps in the same job. Misconception: `${{ steps.step_one.outputs.action_state }}`—that requires writing to `$GITHUB_OUTPUT` instead. Also wrong: using the variable in `step_one` itself before it is set—env from `GITHUB_ENV` applies to steps **after** the writing step.
