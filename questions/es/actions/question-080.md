---
question: "¿Cuál es la sintaxis correcta para establecer el directorio para todos los comandos `run` en un workflow?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#defaultsrunworking-directory"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> establecer `working-directory` bajo `defaults.run`
```yaml
defaults:
  run:
    shell: bash
    working-directory: ./scripts
```
- <input type="checkbox" disabled> establecer `directory` bajo `defaults.run`
```yaml
defaults:
  run:
    shell: bash
    directory: ./scripts
```
- <input type="checkbox" disabled> establecer `working-directory` bajo `job`
```yaml
defaults:
  run:
    shell: bash
job:
  working-directory: ./scripts
```
- <input type="checkbox" disabled> establecer `directory` bajo `job`
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

- [x] establecer `working-directory` bajo `defaults.run`
```yaml
defaults:
  run:
    shell: bash
    working-directory: ./scripts
```
- [ ] establecer `directory` bajo `defaults.run`
```yaml
defaults:
  run:
    shell: bash
    directory: ./scripts
```
- [ ] establecer `working-directory` bajo `job`
```yaml
defaults:
  run:
    shell: bash
job:
  working-directory: ./scripts
```
- [ ] establecer `directory` bajo `job`
```yaml
defaults:
  run:
    shell: bash
job:
  directory: ./scripts
```
