---
question: "What GitHub-hosted runner types are available to use?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#choosing-github-hosted-runners"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Windows
- <input type="checkbox" disabled> Ubuntu Linux
- <input type="checkbox" disabled> macOS
- <input type="checkbox" disabled> Android

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

- [x] Windows
> **Simple:** Use `runs-on: windows-latest` (or a pinned Windows label) for .NET, PowerShell, and Windows-only builds.
>
> **Detailed:** GitHub-hosted **Windows** images include common build tools; pick labels from the docs (`windows-latest`, `windows-2022`, etc.). Billing multipliers differ from Linux. Misconception: "Windows" means self-hosted—you can use GitHub-hosted Windows without your own VM.

- [x] Ubuntu Linux
> **Simple:** `ubuntu-latest` / `ubuntu-22.04` are the usual Linux hosted runners for CI, Docker, and apt-based setups.
>
> **Detailed:** Example:
>
> ```yaml
> jobs:
>   test:
>     runs-on: ubuntu-latest
>     steps:
>       - uses: actions/checkout@v4
>       - run: sudo apt-get install -y libfoo
> ```
>
> Most Actions docs assume Ubuntu. Container jobs (`container: node:20`) also commonly run on a Linux host.

- [x] macOS
> **Simple:** `macos-latest` / `macos-14` provide Apple/Xcode tooling for iOS and macOS apps.
>
> **Detailed:** Use when you need Xcode, codesigning on Apple runners, or Swift builds. **Android** is not a third hosted OS—run the Android SDK on Ubuntu or Windows. macOS minutes typically cost more than Linux on private repos.
