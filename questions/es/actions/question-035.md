---
question: "Para evitar que un trabajo falle cuando uno de los pasos falla, puedes incluir:"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> La bandera `continue-on-error` en el paso con error
```yaml
steps:
    - uses: my-org/failing-action@v1
      continue-on-error: true
```
- <input type="checkbox" disabled> La bandera `ignore-error` en el paso con error
```yaml
steps:
    - uses: my-org/failing-action@v1
      ignore-error: true
```
- <input type="checkbox" disabled> La condicional `failure()` en el paso con error
```yaml
steps:
    - uses: my-org/failing-action@v1
      if: failure()
```
- <input type="checkbox" disabled> La condicional `always()` en el paso con error
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

- [x] La bandera `continue-on-error` en el paso con error
```yaml
steps:
    - uses: my-org/failing-action@v1
      continue-on-error: true
```
- [ ] La bandera `ignore-error` en el paso con error
```yaml
steps:
    - uses: my-org/failing-action@v1
      ignore-error: true
```
- [ ] La condicional `failure()` en el paso con error
```yaml
steps:
    - uses: my-org/failing-action@v1
      if: failure()
```
- [ ] La condicional `always()` en el paso con error
```yaml
steps:
    - uses: my-org/failing-action@v1
      if: always()
```
