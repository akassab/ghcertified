---
question: "You have a base-64 encoded secret that you decode in a GitHub Actions workflow. How can you make sure the decoded secret does not show up in the workflow log accidentally?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands#masking-a-value-in-a-log"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Using `add-mask` workflow command in jobs where the decoded secret may be utilized.
- <input type="checkbox" disabled> Nothing needs to be done since Github Actions infrastructure automatically redacts decoded secrets.
- <input type="checkbox" disabled> Avoiding the usage of print statements that contain the decoded secret, since this is the only way the decoded secret could appear in the workflow log
- <input type="checkbox" disabled> Using the built-in `maskSecret` function to redact the decoded secret in instances where it may be utilized.

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

- [x] Using `add-mask` workflow command in jobs where the decoded secret may be utilized.
> The `::add-mask::` workflow command (often written `echo "::add-mask::$VALUE"`) hides values from logs when GitHub did not already treat them as secrets—for example a base64-decoded token printed in a script. Call it **once per sensitive value per job** before the value might appear in output. Masking in job A does not apply to job B.
