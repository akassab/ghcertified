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
> `defaults.run.working-directory` sets the current working directory for every `run` step in scope—workflow-wide or for a single job if defined under `jobs.<id>.defaults`. With the example above, a step `run: ./build.sh` executes from `./scripts` without repeating `working-directory` on each step. There is no `directory` key under `defaults.run`, and `job` is not a valid key for this purpose.
