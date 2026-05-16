---
question: "Jaka jest poprawna składnia ustawiania katalogu dla wszystkich poleceń `run` w workflow?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#defaultsrunworking-directory"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> ustaw `working-directory` w sekcji `defaults.run`
```yaml
defaults:
  run:
    shell: bash
    working-directory: ./scripts
```
- <input type="checkbox" disabled> ustaw `directory` w sekcji `defaults.run`
```yaml
defaults:
  run:
    shell: bash
    directory: ./scripts
```
- <input type="checkbox" disabled> ustaw `working-directory` w sekcji `job`
```yaml
defaults:
  run:
    shell: bash
job:
  working-directory: ./scripts
```
- <input type="checkbox" disabled> ustaw `directory` w sekcji `job`
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

- [x] ustaw `working-directory` w sekcji `defaults.run`
```yaml
defaults:
  run:
    shell: bash
    working-directory: ./scripts
```
- [ ] ustaw `directory` w sekcji `defaults.run`
```yaml
defaults:
  run:
    shell: bash
    directory: ./scripts
```
- [ ] ustaw `working-directory` w sekcji `job`
```yaml
defaults:
  run:
    shell: bash
job:
  working-directory: ./scripts
```
- [ ] ustaw `directory` w sekcji `job`
```yaml
defaults:
  run:
    shell: bash
job:
  directory: ./scripts
```
