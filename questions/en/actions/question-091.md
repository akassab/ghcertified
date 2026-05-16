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
> **Simple:** Set `runs-on` to a GitHub-hosted label, matrix expression, or self-hosted label list to choose the runner OS and pool.
>
> **Detailed:** Every job must declare `runs-on`. That value picks **where** the job executes:
>
> ```yaml
> jobs:
>   linux:
>     runs-on: ubuntu-latest
>   windows:
>     runs-on: windows-latest
>   matrix-job:
>     strategy:
>       matrix:
>         os: [ubuntu-latest, macos-latest]
>     runs-on: ${{ matrix.os }}
>   internal:
>     runs-on: [self-hosted, linux, x64]
> ```
>
> The runner's OS drives defaults such as shell (`bash` on Linux, PowerShell on Windows). There is no separate `os:`, `platform:`, or `env:` keyword for selecting the machine image—`runs-on` is the correct field.
