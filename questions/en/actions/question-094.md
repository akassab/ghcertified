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
> **Simple:** On Windows runners, `run` steps default to **PowerShell** unless you set `shell:` to something else.
>
> **Detailed:** GitHub Actions picks a default shell per OS. Linux and macOS use `bash`; Windows uses **PowerShell** (`pwsh` on newer images):
>
> ```yaml
> jobs:
>   windows:
>     runs-on: windows-latest
>     steps:
>       - run: echo $env:COMPUTERNAME    # PowerShell syntax
>       - run: echo Hello
>         shell: cmd                     # override to cmd.exe
> ```
>
> Cross-platform workflows often set `defaults.run.shell` or per-step `shell: bash` on Windows when scripts assume Unix syntax. Using bash-only syntax on the default PowerShell step causes "command not found" or parser errors—match the shell to the script.
