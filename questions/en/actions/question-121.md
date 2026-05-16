---
question: "What’s true about default variables?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/variables"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Default environment variables are set by GitHub and not defined in a workflow
- <input type="checkbox" disabled> Most of the default environment variables have a corresponding context property
- <input type="checkbox" disabled> Currently, the value of the default CI environment variable can be overwritten, but it's not guaranteed this will always be possible
- <input type="checkbox" disabled> You can add a new default environment variable adding the prefix “GITHUB_” to it
- <input type="checkbox" disabled> Default environment variables always have the prefix “GITHUB_”
- <input type="checkbox" disabled> Default environment variables can be accessed using the env context

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

- [x] Default environment variables are set by GitHub and not defined in a workflow
> **Simple:** Platform defaults like `GITHUB_WORKSPACE` and `RUNNER_OS` are injected by GitHub—you do not define them in workflow YAML.
>
> **Detailed:** Variables such as `GITHUB_WORKSPACE` and `RUNNER_OS` are set on every job without an `env` block in your workflow, similar to how the runner sets `PATH`. They are available in every step and in expressions like `${{ env.GITHUB_WORKSPACE }}` after the job starts. You cannot create new platform-wide defaults by inventing names; only GitHub documents which defaults exist.
- [x] Most of the default environment variables have a corresponding context property
> **Simple:** Many defaults also appear on workflow contexts—for example `runner.os` alongside `RUNNER_OS`.
>
> **Detailed:** Prefer contexts in `${{ }}` expressions because they are structured and documented—for example `github.workspace` alongside `GITHUB_WORKSPACE` and `runner.os` alongside `RUNNER_OS`. In a step you might use `run: echo "${{ github.workspace }}"` instead of hard-coding paths. Not every env var has a one-to-one context field; check the default environment variables reference for the full mapping.
- [x] Currently, the value of the default CI environment variable can be overwritten, but it's not guaranteed this will always be possible
> **Simple:** You can override some defaults such as `CI` in an `env` block today, but GitHub does not promise that will always work.
>
> **Detailed:** Setting `env: CI: false` in a job can change the default `CI=true` behavior for that job today, but that override is not guaranteed forever. You cannot invent new platform defaults by prefixing arbitrary names with `GITHUB_`—those are reserved. Not every default appears in the `env` context alone; use the official list when debugging what a step actually sees.
