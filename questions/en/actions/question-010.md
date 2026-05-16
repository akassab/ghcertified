---
question: "Where should you store sensitive data such as passwords or certificates that will be used in workflows"
documentation: "https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> secrets
- <input type="checkbox" disabled> config variables
- <input type="checkbox" disabled> vault
- <input type="checkbox" disabled> environment variables

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

- [x] secrets
> Encrypted repository, organization, or environment **secrets** are exposed to workflows through the `secrets` context (for example `${{ secrets.MY_TOKEN }}`). Configuration variables are non-secret settings, `vars` is a separate context, and there is no built-in `vault` context in Actions.
