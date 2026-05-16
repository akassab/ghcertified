---
question: "¿Cómo puedes acceder a los valores actuales de las variables en una matriz dentro de un trabajo en el siguiente ejemplo:"
documentation: "https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs#using-a-matrix-strategy"
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
- <input type="checkbox" disabled> referenciar variables a través del contexto `matrix` con la sintaxis como `matrix.version` y `matrix.os`
- <input type="checkbox" disabled> usando la sintaxis `matrix.property`
- <input type="checkbox" disabled> usando la palabra clave `context` dentro de la configuración del trabajo
- <input type="checkbox" disabled> accediendo a las variables directamente con la sintaxis `version` y `os`

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
- [x] referenciar variables a través del contexto `matrix` con la sintaxis como `matrix.version` y `matrix.os`
- [ ] usando la sintaxis `matrix.property`
- [ ] usando la palabra clave `context` dentro de la configuración del trabajo
- [ ] accediendo a las variables directamente con la sintaxis `version` y `os`
