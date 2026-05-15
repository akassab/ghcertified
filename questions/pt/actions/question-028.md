---
question: "Como você pode garantir que um fluxo de trabalho chamado `Deploy Prod` esteja sempre sendo executado no máximo uma vez por vez?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#concurrency"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Use `concurrency` no nível do fluxo de trabalho
```yaml
concurrency: ${{ github.workflow }}
```
- <input type="checkbox" disabled> Use `queue` no nível do fluxo de trabalho
```yaml
queue: ${{ github.workflow }}
```
- <input type="checkbox" disabled> Use `order` no nível do fluxo de trabalho
```yaml
order: ${{ github.workflow }}
```
- <input type="checkbox" disabled> Use `parallel` no nível do fluxo de trabalho
```yaml
parallel: ${{ github.workflow }}
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

- [x] Use `concurrency` no nível do fluxo de trabalho
```yaml
concurrency: ${{ github.workflow }}
```
- [ ] Use `queue` no nível do fluxo de trabalho
```yaml
queue: ${{ github.workflow }}
```
- [ ] Use `order` no nível do fluxo de trabalho
```yaml
order: ${{ github.workflow }}
```
- [ ] Use `parallel` no nível do fluxo de trabalho
```yaml
parallel: ${{ github.workflow }}
```
