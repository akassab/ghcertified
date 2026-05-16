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
> **Simple:** A job with `environment:` waits on that environment's protection rules (reviewers, timers, branch rules) before steps run.
>
> **Detailed:** Declaring `environment: production` ties the job to the **production** GitHub Environment and its protection settings:
>
> ```yaml
> jobs:
>   deploy:
>     runs-on: ubuntu-latest
>     environment: production
>     steps:
>       - run: ./deploy.sh
> ```
>
> If the environment requires reviewers or a wait timer, the job **pauses at the environment gate** until approval or the timer elapses—it does not fail merely because an environment exists. Deployment branch rules can reject runs from the wrong ref. Environment-scoped secrets become available according to those rules (often only after approval). This is deployment gating, not a substitute for `needs:` between jobs.
