---
question: "Dorothea rozwiązuje problem z workflow, który jest uruchamiany przez zdarzenie push, i jest zainteresowana zobaczeniem szczegółów dotyczących webhooka. W jaki sposób może zobaczyć cały ładunek webhooka, który uruchomił workflow?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Wydrukowanie zawartości obiektu `github.event` w kroku
- <input type="checkbox" disabled> Zaznaczenie pola wyboru "Show event webhook payload" w opcjach uruchamiania workflow.
- <input type="checkbox" disabled> Ustawienie sekretu lub zmiennej o nazwie `SHOW_EVENT_PAYLOAD` na `true`
- <input type="checkbox" disabled> Przejście do sekcji "Webhooks" w ustawieniach repository

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

- [x] Wydrukowanie zawartości obiektu `github.event` w kroku
> `github.event` pokaże pełny ładunek zdarzenia webhook. Ten ładunek różni się w zależności od rodzaju zdarzenia. Zobacz [Webhook events and payloads](https://docs.github.com/en/webhooks/webhook-events-and-payloads) aby uzyskać więcej informacji.
- [ ] Zaznaczenie pola wyboru "Show event webhook payload" w opcjach uruchamiania workflow.
- [ ] Ustawienie sekretu lub zmiennej o nazwie `SHOW_EVENT_PAYLOAD` na `true`
- [ ] Przejście do sekcji "Webhooks" w ustawieniach repository
> Sekcja "Webhooks" w ustawieniach repository pokaże szczegóły tylko dla niestandardowych webhooków, a nie standardowych zdarzeń webhook, takich jak `push`.
