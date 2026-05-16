---
question: "Dorothea está solucionando problemas de um fluxo de trabalho acionado por um evento de push e está interessada em ver detalhes sobre o webhook. Como ela pode visualizar todo o payload do webhook que acionou o fluxo de trabalho?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Imprimindo o conteúdo do objeto `github.event` em uma etapa
- <input type="checkbox" disabled> Marcando a caixa de seleção "Show event webhook payload" nas opções de execução do fluxo de trabalho.
- <input type="checkbox" disabled> Definindo um segredo ou variável chamada `SHOW_EVENT_PAYLOAD` com valor `true`
- <input type="checkbox" disabled> Navegando até a seção "Webhooks" nas configurações do repositório

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

- [x] Imprimindo o conteúdo do objeto `github.event` em uma etapa
> `github.event` mostrará o payload completo do webhook do evento. Este payload varia conforme o tipo de evento. Consulte [Eventos e payloads de Webhook](https://docs.github.com/en/webhooks/webhook-events-and-payloads) para mais detalhes.
- [ ] Marcando a caixa de seleção "Show event webhook payload" nas opções de execução do fluxo de trabalho.
- [ ] Definindo um segredo ou variável chamada `SHOW_EVENT_PAYLOAD` com valor `true`
- [ ] Navegando até a seção "Webhooks" nas configurações do repositório
> A seção "Webhooks" nas configurações do repositório mostrará apenas detalhes para webhooks personalizados, não webhooks de eventos padrão como `push`.
