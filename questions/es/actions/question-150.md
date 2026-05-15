---
question: "Dorothea está solucionando problemas en un flujo de trabajo activado por un evento de push y está interesada en ver detalles sobre el webhook. ¿Cómo puede ver todo el contenido del webhook que activó el flujo de trabajo?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Imprimiendo el contenido del objeto `github.event` en un paso
- <input type="checkbox" disabled> Marcando la casilla "Show event webhook payload" en las opciones de ejecución del flujo de trabajo.
- <input type="checkbox" disabled> Configurando un secreto o variable llamado `SHOW_EVENT_PAYLOAD` como `true`
- <input type="checkbox" disabled> Navegando a la sección "Webhooks" dentro de la configuración del repositorio 

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

- [x] Imprimiendo el contenido del objeto `github.event` en un paso
> `github.event` mostrará todo el contenido del payload del webhook del evento. Este payload varía según el tipo de evento. Consulte [Webhook events and payloads](https://docs.github.com/en/webhooks/webhook-events-and-payloads) para más detalles.
- [ ] Marcando la casilla "Show event webhook payload" en las opciones de ejecución del flujo de trabajo.
- [ ] Configurando un secreto o variable llamado `SHOW_EVENT_PAYLOAD` como `true`
- [ ] Navegando a la sección "Webhooks" dentro de la configuración del repositorio 
> La sección "Webhooks" en la configuración del repositorio solo mostrará detalles para webhooks personalizados, no para webhooks de eventos estándar como `push`. 
