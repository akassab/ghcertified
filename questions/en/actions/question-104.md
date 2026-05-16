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
> Environment variable names are case-sensitive on Linux and macOS runners, so `API_KEY` and `api_key` are different variables. GitHub Actions does not normalize names across platforms for you. Use consistent uppercase names in `env:` blocks to avoid bugs that appear only on Ubuntu jobs. Windows can be case-insensitive in some contexts, but relying on that breaks cross-platform workflows.
