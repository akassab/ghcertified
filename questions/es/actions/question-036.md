---
question: "Definiste un trabajo de matriz `example_matrix`. ¿Cómo puedes limitar la matriz para ejecutar un máximo de 2 trabajos a la vez?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstrategymax-parallel"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

```yaml
jobs:
  example_matrix:
    strategy:
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```
- <input type="checkbox" disabled> Configura `jobs.example_matrix.strategy.max-parallel` a 2
- <input type="checkbox" disabled> Configura `jobs.example_matrix.strategy.concurrency` a 2
- <input type="checkbox" disabled> Usa la REST API de GitHub para verificar si el número de trabajos es menor que 2
- <input type="checkbox" disabled> No es posible, una matriz siempre ejecutará todos los trabajos en paralelo si hay runners disponibles

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
  example_matrix:
    strategy:
      matrix:
        version: [10, 12, 14]
        os: [ubuntu-latest, windows-latest]
```
- [x] Configura `jobs.example_matrix.strategy.max-parallel` a 2
- [ ] Configura `jobs.example_matrix.strategy.concurrency` a 2
- [ ] Usa la REST API de GitHub para verificar si el número de trabajos es menor que 2
- [ ] No es posible, una matriz siempre ejecutará todos los trabajos en paralelo si hay runners disponibles
