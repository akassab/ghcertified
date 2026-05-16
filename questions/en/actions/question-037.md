---
question: "Which of these is a proper way of setting an output parameter `PET` with a value of `DOG` in a `step`."
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-output-parameter"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> `echo "PET=DOG" >> "$GITHUB_OUTPUT"`
- <input type="checkbox" disabled> `echo "DOG=PET" >> "$GITHUB_OUTPUT"`
- <input type="checkbox" disabled> `gh set-output "DOG=PET"`
- <input type="checkbox" disabled> `gh set-output "PET=DOG"`

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

- [x] `echo "PET=DOG" >> "$GITHUB_OUTPUT"`
> **Simple:** Write step outputs as `NAME=value` lines appended to `$GITHUB_OUTPUT`.
>
> **Detailed:** In a step with `id: pets`:
>
> ```yaml
> - id: pets
>   run: echo "PET=DOG" >> "$GITHUB_OUTPUT"
> - run: echo "The pet is ${{ steps.pets.outputs.PET }}"
> ```
>
> Format is `KEY=value` per line. Misconception: `echo PET=DOG >> $GITHUB_ENV` (that sets **env** for later steps, not step outputs) or deprecated `echo "::set-output name=PET::DOG"`. Use `$GITHUB_OUTPUT` for outputs passed via `steps.<id>.outputs.*`.
