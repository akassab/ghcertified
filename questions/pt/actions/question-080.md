---
question: "Qual é a sintaxe correta para definir o diretório para todos os comandos `run` em um workflow?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#defaultsrunworking-directory"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> definir `working-directory` em `defaults.run`
```yaml
defaults:
  run:
    shell: bash
    working-directory: ./scripts
```
- <input type="checkbox" disabled> definir `directory` em `defaults.run`
```yaml
defaults:
  run:
    shell: bash
    directory: ./scripts
```
- <input type="checkbox" disabled> definir `working-directory` em `job`
```yaml
defaults:
  run:
    shell: bash
job:
  working-directory: ./scripts
```
- <input type="checkbox" disabled> definir `directory` em `job`
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

- [x] definir `working-directory` em `defaults.run`
```yaml
defaults:
  run:
    shell: bash
    working-directory: ./scripts
```
- [ ] definir `directory` em `defaults.run`
```yaml
defaults:
  run:
    shell: bash
    directory: ./scripts
```
- [ ] definir `working-directory` em `job`
```yaml
defaults:
  run:
    shell: bash
job:
  working-directory: ./scripts
```
- [ ] definir `directory` em `job`
```yaml
defaults:
  run:
    shell: bash
job:
  directory: ./scripts
```
