---
question: "Você quer criar um workflow `Post-Deploy` que realiza atividades relacionadas a pós-implantação. Qual evento disparador o workflow `Post-Deploy` deve usar para que ele seja executado automaticamente após um workflow especificado ser concluído?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#workflow_run"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> `workflow_run`
- <input type="checkbox" disabled> `workflow_trigger`
- <input type="checkbox" disabled> `workflow_dispatch`
- <input type="checkbox" disabled> `workflow_call`

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

- [x] `workflow_run`
> `workflow_run` permite disparar um workflow assim que outros workflows especificados forem concluídos (independentemente do sucesso). Observe que, embora esta pergunta especificamente trate de workflows concluídos, o `workflow_run` também pode ser configurado para disparar um workflow quando outros workflows especificados forem acionados ou iniciados em um runner.
- [ ] `workflow_trigger`
> Não existe tal evento disparador.
- [ ] `workflow_dispatch`
> `workflow_dispatch` é usado para disparar um workflow manualmente. Veja [a documentação](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#workflow_dispatch) para mais informações.
- [ ] `workflow_call`
> `workflow_call` é usado para que um workflow possa ser chamado a partir de outros workflows ou ações. Veja [a documentação](https://docs.github.com/en/actions/reference/workflows-and-actions/events-that-trigger-workflows#workflow_call) para mais informações.
