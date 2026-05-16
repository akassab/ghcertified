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
> Step outputs use the `NAME=value` format appended to `$GITHUB_OUTPUT`. Here `PET` is the output name and `DOG` is the value, readable later as `${{ steps.<step_id>.outputs.PET }}`.
