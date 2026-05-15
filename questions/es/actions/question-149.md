---
question: "¿Qué hace escribir a `GITHUB_STEP_SUMMARY`?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands#adding-a-job-summary"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

```yaml
- name: "Escribir resultados del conjunto de pruebas"
  run: |
    echo "Los resultados del conjunto de pruebas son:" >> $GITHUB_STEP_SUMMARY
```
- <input type="checkbox" disabled> Agrega esta línea al resumen del trabajo
- <input type="checkbox" disabled> Agrega esta línea como un subtítulo al nombre del paso en la interfaz de usuario de GitHub Actions
- <input type="checkbox" disabled> Agrega esta línea al artefacto integrado `github-steps-summary.md`
- <input type="checkbox" disabled> Imprime esta línea como un mensaje de depuración a nivel de paso

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
- name: "Escribir resultados del conjunto de pruebas"
  run: |
    echo "Los resultados del conjunto de pruebas son:" >> $GITHUB_STEP_SUMMARY
```
- [x] Agrega esta línea al resumen del trabajo
> Escribir en `GITHUB_STEP_SUMMARY` agrega información al resumen del trabajo, que puede usarse como una versión simplificada del registro del flujo de trabajo.
- [ ] Agrega esta línea como un subtítulo al nombre del paso en la interfaz de usuario de GitHub Actions
- [ ] Agrega esta línea al artefacto integrado `github-steps-summary.md`
- [ ] Imprime esta línea como un mensaje de depuración a nivel de paso
> Para imprimir un mensaje de depuración en un paso, debes usar la sintaxis `::debug::`. Consulta la sección "Establecer un mensaje de depuración" en la documentación enlazada.
