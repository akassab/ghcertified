---
question: "How do you reference a secret stored in GitHub Secrets in a workflow?"
documentation: "https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#using-secrets-in-a-workflow"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> ${{ secrets.SECRET_NAME }}
- <input type="checkbox" disabled> ${{ secret.SECRET_NAME }}
- <input type="checkbox" disabled> ${{ env.SECRET_NAME }}
- <input type="checkbox" disabled> ${{ config.SECRET_NAME }}

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

- [x] ${{ secrets.SECRET_NAME }}
> Reference secrets in expressions with the `secrets` context: `${{ secrets.SECRET_NAME }}`. Secrets can be defined at repository, environment, or organization scope and are masked in logs. Map them into steps with `env: TOKEN: ${{ secrets.API_TOKEN }}` when a plain shell variable is needed. The contexts `secret`, `env`, and `config` are not valid for reading stored secrets directly.
