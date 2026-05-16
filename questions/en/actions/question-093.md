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
> **Simple:** Read secrets with `${{ secrets.SECRET_NAME }}` in expressions or map them into `env` for shell steps.
>
> **Detailed:** Secrets are stored in repository, environment, or organization settings—not in the `env:` block at definition time. Reference them in workflow expressions:
>
> ```yaml
> jobs:
>   deploy:
>     steps:
>       - name: Deploy
>         env:
>           API_TOKEN: ${{ secrets.API_TOKEN }}
>         run: ./deploy.sh
>       - uses: my-org/deploy-action@v1
>         with:
>           token: ${{ secrets.API_TOKEN }}
> ```
>
> GitHub masks secret values in logs when possible. Invalid contexts include `secret` (singular), plain `env` for secret storage, and `config`—only **`secrets`** is the documented context for stored secrets.
