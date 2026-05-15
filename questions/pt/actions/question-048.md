---
question: "Um trabalho chamado `job2` está usando artefatos criados no `job1`. Portanto, é importante garantir que o `job1` seja concluído antes que o `job2` comece a procurar os artefatos. Como você deve criar essa dependência?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> criar essa dependência usando a palavra-chave `needs` em `job2`
- <input type="checkbox" disabled> essa dependência é criada implicitamente ao usar `actions/download-artifact` para baixar o artefato do `job1`
- <input type="checkbox" disabled> criar essa dependência definindo `job2` após `job1` na definição do `.yaml` do fluxo de trabalho
- <input type="checkbox" disabled> criar essa dependência usando a palavra-chave `concurrency` em `job2`

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

- [x] criar essa dependência usando a palavra-chave `needs` em `job2`
- [ ] essa dependência é criada implicitamente ao usar `actions/download-artifact` para baixar o artefato do `job1`
- [ ] criar essa dependência definindo `job2` após `job1` na definição do `.yaml` do fluxo de trabalho
- [ ] criar essa dependência usando a palavra-chave `concurrency` em `job2`
