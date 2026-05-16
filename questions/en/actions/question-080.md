---
question: "What is the correct syntax for setting the directory for all `run` commands in a workflow?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#defaultsrunworking-directory"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> set `working-directory` under `defaults.run`
```yaml
defaults:
  run:
    shell: bash
    working-directory: ./scripts
```
- <input type="checkbox" disabled> set `directory` under `defaults.run`
```yaml
defaults:
  run:
    shell: bash
    directory: ./scripts
```
- <input type="checkbox" disabled> set `working-directory` under `job`
```yaml
defaults:
  run:
    shell: bash
job:
  working-directory: ./scripts
```
- <input type="checkbox" disabled> set `directory` under `job`
```yaml
defaults:
  run:
    shell: bash
job:
  directory: ./scripts
```

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

- [x] set `working-directory` under `defaults.run`
```yaml
defaults:
  run:
    shell: bash
    working-directory: ./scripts
```
> **Simple:** Set `defaults.run.working-directory` so every `run` step in scope starts in that folder.
>
> **Detailed:** The `defaults` block applies settings to all matching steps unless overridden. Under `defaults.run`, `working-directory` sets the cwd for every `run` step—at workflow scope or under `jobs.<job_id>.defaults` for one job only.
>
> ```yaml
> defaults:
>   run:
>     shell: bash
>     working-directory: ./scripts
> jobs:
>   build:
>     steps:
>       - run: ./build.sh    # runs as ./scripts/build.sh
>       - run: npm test      # also from ./scripts
> ```
>
> You can still set `working-directory` on an individual step to override the default. Invalid alternatives include `directory` under `defaults.run` or a top-level `job` key—only `working-directory` (and `shell`) belong under `defaults.run`.
