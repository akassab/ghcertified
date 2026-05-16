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
> **Simple:** `RUNNER_OS` is the default env var with the runner OS name (`Linux`, `Windows`, `macOS`).
>
> **Detailed:** GitHub injects default environment variables on every job. `RUNNER_OS` holds the operating system of the machine executing the job:
>
> ```yaml
> steps:
>   - run: echo "OS is $RUNNER_OS"
>   - name: Linux-only step
>     if: runner.os == 'Linux'
>     run: ./linux-script.sh
> ```
>
> In expressions, `runner.os` maps to the same value (`Linux`, `Windows`, `macOS`). Related variables include `RUNNER_ARCH` (CPU) and `RUNNER_NAME` (instance id). `GITHUB_RUNNER_OS` is **not** a documented default variable name.
