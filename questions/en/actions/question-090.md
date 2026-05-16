---
question: "What is the default timeout for a GitHub Actions job?"
documentation: "https://docs.github.com/en/actions/reference/limits#existing-system-limits"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> 30 minutes
- <input type="checkbox" disabled> 60 minutes
- <input type="checkbox" disabled> 120 minutes
- <input type="checkbox" disabled> 360 minutes

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

- [x] 360 minutes
> **Simple:** The default job timeout on GitHub-hosted runners is **360 minutes** (6 hours) unless you set `timeout-minutes`.
>
> **Detailed:** If you omit `timeout-minutes`, a job on a GitHub-hosted runner can run until it hits the platform maximum of **360 minutes**, then GitHub cancels it. Set a lower limit to fail fast when work hangs:
>
> ```yaml
> jobs:
>   lint:
>     timeout-minutes: 15
>     runs-on: ubuntu-latest
>     steps:
>       - run: npm run lint
> ```
>
> Step-level `timeout-minutes` caps individual steps; job-level applies to the whole job including all steps. The default is **not** 30, 60, or 120 minutes. Self-hosted runners use the same documented default unless your administrator configures different limits.
