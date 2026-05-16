---
question: "Which workflow command syntax correctly sets an environment variable named 'API_VERSION' with the value '2.1' for subsequent steps in a GitHub Actions job?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-commands-for-github-actions#setting-an-environment-variable"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> `echo "API_VERSION=2.1" >> "$GITHUB_ENV"`
- <input type="checkbox" disabled> `echo "API_VERSION=2.1" >> "$GITHUB_OUTPUT"`
- <input type="checkbox" disabled> `export API_VERSION=2.1 >> "$GITHUB_ENV"`
- <input type="checkbox" disabled> `set-env name=API_VERSION value=2.1`

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

- [x] `echo "API_VERSION=2.1" >> "$GITHUB_ENV"`
> Append `NAME=value` lines to the file path in `$GITHUB_ENV` so later steps in the **same job** see the variable—for example, `echo "API_VERSION=2.1" >> "$GITHUB_ENV"`. `GITHUB_OUTPUT` is for step outputs consumed via `steps.<id>.outputs`, not environment variables. There is no `set-env` shell command; the file append pattern is the supported workflow command.
