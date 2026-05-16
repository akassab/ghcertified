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
> Pinning with a full commit SHA (`uses: actions/checkout@8e4660…`) fixes the exact code GitHub checks out. Tags like `@v4` and branches like `@main` can be retagged or force-pushed; SHAs are the recommended supply-chain control for third-party actions.
