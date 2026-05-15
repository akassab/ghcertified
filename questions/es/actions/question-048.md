---
question: "Un trabajo llamado `job2` está utilizando artefactos creados en `job1`. Por lo tanto, es importante asegurarse de que `job1` termine antes de que `job2` comience a buscar los artefactos. ¿Cómo deberías crear esa dependencia?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> crear esta dependencia utilizando la palabra clave `needs` en `job2`
- <input type="checkbox" disabled> esta dependencia se crea implícitamente al usar `actions/download-artifact` para descargar artefactos desde `job1`
- <input type="checkbox" disabled> crear esta dependencia definiendo `job2` después de `job1` en la definición del archivo `.yaml` del flujo de trabajo
- <input type="checkbox" disabled> crear esta dependencia utilizando la palabra clave `concurrency` en `job2`

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

- [x] crear esta dependencia utilizando la palabra clave `needs` en `job2`
- [ ] esta dependencia se crea implícitamente al usar `actions/download-artifact` para descargar artefactos desde `job1`
- [ ] crear esta dependencia definiendo `job2` después de `job1` en la definición del archivo `.yaml` del flujo de trabajo
- [ ] crear esta dependencia utilizando la palabra clave `concurrency` en `job2`
