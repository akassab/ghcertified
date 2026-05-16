---
question: "You have forked a repository to enhance a workflow that uses a secret to access a third-party application. You trigger the workflow before editing its code to get a baseline result, but find that the workflow fails. Why would this occur?"
documentation: "https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets?tool=webui#using-secrets-in-a-workflow"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Forked repositories do not inherit secrets from the original repository  
- <input type="checkbox" disabled> When inheriting the secret from the original repository, there was an error during the fork that resulted in a malformed, invalid secret
- <input type="checkbox" disabled> The inherited secret had a size larger than 48 KB
- <input type="checkbox" disabled> Forked repositories only inherit repository secrets, so the secret being used in the workflow must have been an organizational or environment secret.

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

- [x] Forked repositories do not inherit secrets from the original repository  
> Workflows triggered from a **fork** do not receive upstream repository secrets (except the limited, scoped `GITHUB_TOKEN` for that fork). A PR from `fork-user:feature` that runs `echo ${{ secrets.DEPLOY_KEY }}` gets an empty value and often fails. Maintainers use `pull_request_target` or approval gates when trusted secrets are required—never expose production secrets to unreviewed fork PRs.
