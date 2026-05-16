---
question: "Is this statement true? `Not all steps run actions, but all actions run as a step`"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idsteps"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> True
- <input type="checkbox" disabled> False

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

- [x] True
> **Simple:** Steps can be plain `run:` scripts or `uses:` actions—but every action runs inside a step.
>
> **Detailed:** A job is a list of steps:
>
> ```yaml
> steps:
>   - uses: actions/checkout@v4      # action as a step
>   - run: npm test                    # step with no action
>   - name: Lint
>     uses: my-org/linter@v1
> ```
>
> "Not all steps run actions" — `run: npm test` has no `uses:`. "All actions run as a step" — you cannot put `uses:` at job level; actions are always invoked from a step. Misconception: a job can call an action directly without a step wrapper.
