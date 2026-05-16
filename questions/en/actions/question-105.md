---
question: "Which of the following statements accurately describes the behavior of workflow jobs referencing an environment's protection rules?"
documentation: "https://docs.github.com/en/actions/deployment/targeting-different-environments/using-environments-for-deployment"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> workflow jobs won't start until all the environment's protection rules pass
- <input type="checkbox" disabled> workflow jobs will start immediately and protection rules are evaluated during execution
- <input type="checkbox" disabled> workflow jobs will start if at least one protection rule passes
- <input type="checkbox" disabled> workflow jobs will fail if protection rules are configured

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

- [x] workflow jobs won't start until all the environment's protection rules pass
> When a job declares `environment: production`, GitHub applies that environment's protection rules before the job starts executing steps. Required reviewers, wait timers, and deployment branches can block the job until conditions are met. The job does not start and then fail solely because an environment exists—it waits at the environment gate. Secrets scoped to that environment become available only after approval when rules require it.
