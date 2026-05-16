---
question: "Select the default environment variable that contains the operating system of the runner executing the job"
documentation: "https://docs.github.com/en/actions/learn-github-actions/variables#default-environment-variables"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> `RUNNER_OS`
- <input type="checkbox" disabled> `GITHUB_RUNNER_OS`
- <input type="checkbox" disabled> `RUNNER_ARCH`
- <input type="checkbox" disabled> `RUNNER_NAME`

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

- [x] `RUNNER_OS`
> `RUNNER_OS` is set automatically on every runner to the host OS name, such as `Linux`, `Windows`, or `macOS`. Use it in conditions—for example `if: runner.os == 'Linux'` mirrors this value in expressions. `GITHUB_RUNNER_OS` is not a standard variable name; `RUNNER_ARCH` describes CPU architecture and `RUNNER_NAME` identifies the specific runner instance.
