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
> **Simple:** Store passwords and certificates as GitHub **secrets**, then reference `${{ secrets.NAME }}`—never commit them in workflow YAML.
>
> **Detailed:** Create secrets under Settings → Secrets and variables → Actions (repo, org, or environment level). Use in workflows:
>
> ```yaml
> steps:
>   - name: Deploy
>     env:
>       API_KEY: ${{ secrets.API_KEY }}
>     run: ./deploy.sh
> ```
>
> GitHub masks secret values in logs. **Variables** (`vars`) are for non-sensitive configuration. There is no first-class `vault` or `certificates` context in Actions syntax—misconception: putting a PEM in `env:` in plain text in the file; that exposes it in git history.
