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
> Append `NAME=value` lines to the file path in `GITHUB_ENV` to expose environment variables to subsequent steps in the same job. `GITHUB_OUTPUT` is for step outputs, not env vars, and `set-env` is not a shell command.
