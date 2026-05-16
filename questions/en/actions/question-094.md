---
question: "What is the default shell used by GitHub Actions on Windows runners?"
documentation: "https://github.blog/changelog/2019-10-17-github-actions-default-shell-on-windows-runners-is-changing-to-powershell/"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> bash
- <input type="checkbox" disabled> sh
- <input type="checkbox" disabled> powershell
- <input type="checkbox" disabled> cmd

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

- [x] powershell
> On `windows-latest` and other Windows runners, `run` steps default to PowerShell unless you set `shell:` to `bash`, `cmd`, or another option. Linux and macOS runners default to bash. That is why a step `run: echo $env:COMPUTERNAME` works on Windows without extra configuration. Choosing the wrong shell for the OS is a common source of "command not found" errors in cross-platform workflows.
