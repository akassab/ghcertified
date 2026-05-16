---
question: "How can you specify the operating system for a job in GitHub Actions?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idruns-on"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Using the os keyword
- <input type="checkbox" disabled> Using the runs-on keyword
- <input type="checkbox" disabled> Using the platform keyword
- <input type="checkbox" disabled> Using the env keyword

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

- [x] Using the runs-on keyword
> The `runs-on` key selects which runner executes the job: a GitHub-hosted label like `ubuntu-latest`, a matrix value like `${{ matrix.os }}`, or self-hosted labels such as `[self-hosted, linux, x64]`. The runner's OS determines the default shell (bash on Linux, PowerShell on Windows). There is no separate `os`, `platform`, or `env` keyword for picking the runner image.
