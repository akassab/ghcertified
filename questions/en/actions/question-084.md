---
question: "Which keyword allows you to define environment variables in a GitHub Actions workflow?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idenv"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> env
- <input type="checkbox" disabled> vars
- <input type="checkbox" disabled> secrets
- <input type="checkbox" disabled> config

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

- [x] env
> The `env` keyword defines environment variables at workflow, job, or step scope; inner scopes override outer ones for the same name. For example, `env: NODE_ENV: production` at the job level is visible to every step in that job. Repository and organization variables and secrets use separate contexts (`vars`, `secrets`), not `env`. There is no `config` key in workflow syntax for defining variables.
