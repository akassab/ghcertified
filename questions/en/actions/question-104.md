---
question: "What is the recommended practice for treating environment variables in GitHub Actions, regardless of the operating system and shell used?"
documentation: "https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/workflow-commands-for-github-actions#setting-an-environment-variable"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> treat environment variables as case-sensitive
- <input type="checkbox" disabled> use only uppercase letters for environment variable names
- <input type="checkbox" disabled> ignore case sensitivity as GitHub Actions handles it automatically
- <input type="checkbox" disabled> depend on the behavior of the operating system in use

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

- [x] treat environment variables as case-sensitive
> **Simple:** Treat env var names as case-sensitive everywhere—use consistent UPPER_SNAKE names in `env:`.
>
> **Detailed:** On Linux and macOS runners, `API_KEY` and `api_key` are **different** variables. GitHub Actions does not normalize casing across OS or shell:
>
> ```yaml
> env:
>   API_KEY: ${{ secrets.API_KEY }}
> steps:
>   - run: curl -H "Authorization: $API_KEY" https://api.example.com
> ```
>
> A typo like `$api_key` works on some Windows shells but fails on Ubuntu—bugs that only appear in Linux CI. Convention: **UPPER_SNAKE_CASE** in workflow `env:` and the same spelling in scripts. Do not rely on Windows case-insensitivity for cross-platform workflows.
