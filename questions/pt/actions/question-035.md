---
question: "Para evitar que um job falhe quando um dos steps falhar, você pode incluir:"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Flag `continue-on-error` no step que falhou
```yaml
steps:
    - uses: my-org/failing-action@v1
      continue-on-error: true
```
- <input type="checkbox" disabled> Flag `ignore-error` no step que falhou
```yaml
steps:
    - uses: my-org/failing-action@v1
      ignore-error: true
```
- <input type="checkbox" disabled> Condicional `failure()` no step que falhou
```yaml
steps:
    - uses: my-org/failing-action@v1
      if: failure()
```
- <input type="checkbox" disabled> Condicional `always()` no step que falhou
```yaml
steps:
    - uses: my-org/failing-action@v1
      if: always()
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

- [x] Flag `continue-on-error` no step que falhou
```yaml
steps:
    - uses: my-org/failing-action@v1
      continue-on-error: true
```
- [ ] Flag `ignore-error` no step que falhou
```yaml
steps:
    - uses: my-org/failing-action@v1
      ignore-error: true
```
- [ ] Condicional `failure()` no step que falhou
```yaml
steps:
    - uses: my-org/failing-action@v1
      if: failure()
```
- [ ] Condicional `always()` no step que falhou
```yaml
steps:
    - uses: my-org/failing-action@v1
      if: always()
```
