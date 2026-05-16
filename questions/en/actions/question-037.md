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
> Step outputs use `NAME=value` lines on `$GITHUB_OUTPUT`. `echo "PET=DOG" >> "$GITHUB_OUTPUT"` defines `PET`; a later step reads `${{ steps.<step_id>.outputs.PET }}`. The older `::set-output` command is deprecated—always use `$GITHUB_OUTPUT` for new workflows.
