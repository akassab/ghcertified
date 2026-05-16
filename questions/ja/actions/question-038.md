---
question: "次のうち、`step_two`で`action_state`を使用する方法はどれですか？"
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
- [ ] `run: echo "${{ steps.step_one.outputs.action_state }}"`
> もし`action_state`が`$GITHUB_OUTPUT`に書き込まれている場合は、これが正しい選択肢になります。
- [ ] `run: echo "$steps.step_one.outputs.action_state"`
- [ ] `run: echo "${{ action_state }}"`
