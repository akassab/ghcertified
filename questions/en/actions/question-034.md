---
question: "For any action published in GitHub Marketplace, you can often use it in multiple versions, which approach is the most stable and secure?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-using-versioned-actions"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Reference the commit SHA
- <input type="checkbox" disabled> Reference a version tag
- <input type="checkbox" disabled> Reference the main branch

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

- [x] Reference the commit SHA
> **Simple:** Pin actions to a full commit SHA for the most stable, tamper-resistant reference.
>
> **Detailed:** Examples:
>
> ```yaml
> # Most secure (immutable)
> - uses: actions/checkout@8e4660c213bd4eeca4e7b4b328e731c4d457f8c0
>
> # Convenient but mutable
> - uses: actions/checkout@v4
> - uses: actions/checkout@main
> ```
>
> Tags and branches can move if a maintainer retags or force-pushes; SHA pins the exact commit GitHub checks out. Dependabot can propose SHA updates. Misconception: `@v4` is "most secure"—it is easier to read but not immutable like a SHA.
