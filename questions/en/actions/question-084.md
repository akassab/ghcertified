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
> **Simple:** Use `env:` at workflow, job, or step level to define environment variables; inner scopes override outer ones.
>
> **Detailed:** The `env` map sets name/value pairs available to subsequent `run` steps and many actions as process environment variables:
>
> ```yaml
> env:
>   GLOBAL: '1'
> jobs:
>   build:
>     env:
>       NODE_ENV: production
>     steps:
>       - run: echo $NODE_ENV          # production
>       - run: echo $GLOBAL             # 1
>         env:
>           DEBUG: 'true'               # step-only; overrides nothing above for GLOBAL
> ```
>
> Repository and organization configuration uses **`vars`** and **`secrets`** contexts, not the `env:` keyword. There is no `config:` key in workflow syntax for variables—`env` is the correct keyword among the choices.
