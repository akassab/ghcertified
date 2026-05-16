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
> Variables such as `GITHUB_WORKSPACE` and `RUNNER_OS` are injected by the platform on every job; you do not declare them in your YAML to create defaults.
- [x] Most of the default environment variables have a corresponding context property
> Many defaults are also available via contexts (for example `github.workspace` alongside `GITHUB_WORKSPACE`), which is useful in expressions.
- [x] Currently, the value of the default CI environment variable can be overwritten, but it's not guaranteed this will always be possible
> You can set `CI` in `env` today, but relying on overriding default variables is discouraged because GitHub may change behavior. You cannot add new defaults by prefixing arbitrary names with `GITHUB_`, and not every default is exposed only through the `env` context.
