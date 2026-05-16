---
question: "What are the valid use cases for using **defaults**?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#defaults"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Using defaults.run on workflow level to set default shell (e.g bash) for an entire workflow
- <input type="checkbox" disabled> Using defaults.run on job level to set default working-directory for all steps in a single job
- <input type="checkbox" disabled> Using defaults.run on step level to set default shell (e.g bash) for that single step
- <input type="checkbox" disabled> Using defaults.env on workflow level to set default environment variables for an entire workflow
- <input type="checkbox" disabled> Using defaults.env on job level to set default environment variables for all steps in a single job

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

- [x] Using defaults.run on workflow level to set default shell (e.g bash) for an entire workflow
> **Simple:** Workflow-level `defaults.run` sets default `shell` (or `working-directory`) for all `run` steps in all jobs.
>
> **Detailed:** Example:
>
> ```yaml
> defaults:
>   run:
>     shell: bash
> jobs:
>   test:
>     runs-on: ubuntu-latest
>     steps:
>       - run: npm test   # uses bash without repeating shell:
> ```
>
> Jobs and steps can override. Applies to `run:` steps, not to how `uses:` actions execute internally.

- [x] Using defaults.run on job level to set default working-directory for all steps in a single job
> **Simple:** Job-level `defaults.run.working-directory` sets the cwd for every `run` step in that job only.
>
> **Detailed:** Example:
>
> ```yaml
> jobs:
>   web:
>     defaults:
>       run:
>         working-directory: ./apps/web
>     runs-on: ubuntu-latest
>     steps:
>       - run: npm ci
>       - run: npm run build
> ```
>
> Both commands run under `apps/web`. Misconception: `defaults` on a single step—valid levels are workflow and job for `defaults.run`, not per-step defaults in standard syntax.
