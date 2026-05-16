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
> Variables such as `GITHUB_WORKSPACE` and `RUNNER_OS` are injected by GitHub on every job—you do not declare them in YAML to create platform defaults. They are available in every step without an `env` block, similar to how the runner sets `PATH`. You can reference them in expressions like `${{ env.GITHUB_WORKSPACE }}` after the job starts.
- [x] Most of the default environment variables have a corresponding context property
> Many defaults also have a matching context property—for example `github.workspace` alongside `GITHUB_WORKSPACE` and `runner.os` alongside `RUNNER_OS`. Prefer contexts in `${{ }}` expressions because they are structured and documented. In a step you might use `run: echo "${{ github.workspace }}"` instead of hard-coding paths.
- [x] Currently, the value of the default CI environment variable can be overwritten, but it's not guaranteed this will always be possible
> You can override some defaults like `CI` in an `env` block today, but GitHub does not guarantee that will always work. You cannot invent new platform defaults by prefixing arbitrary names with `GITHUB_`—those are reserved. Not every default appears in the `env` context alone; check the default environment variables reference for the full list.
