---
question: "¿Cuándo se ejecutará job3?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-not-requiring-successful-dependent-jobs"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    if: ${{ always() }}
    needs: [job1, job2]
```
- <input type="checkbox" disabled> job3 se ejecutará después de que job1 y job2 hayan completado, independientemente de si fueron exitosos
- <input type="checkbox" disabled> No puedes usar `if: ${{ always() }}` y `needs` juntos. El workflow fallará al inicio.
- <input type="checkbox" disabled> job3 se ejecutará después de que job1 y job2 se hayan completado exitosamente
- <input type="checkbox" disabled> job3 se ejecutará después de que job1 y job2 hayan fallado

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

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    if: ${{ always() }}
    needs: [job1, job2]
```
- [x] job3 se ejecutará después de que job1 y job2 hayan completado, independientemente de si fueron exitosos
- [ ] No puedes usar `if: ${{ always() }}` y `needs` juntos. El workflow fallará al inicio.
- [ ] job3 se ejecutará después de que job1 y job2 se hayan completado exitosamente
- [ ] job3 se ejecutará después de que job1 y job2 hayan fallado
