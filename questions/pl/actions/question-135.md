---
question: "Sforkowałeś repozytorium, aby ulepszyć workflow, który wykorzystuje secret do uzyskania dostępu do aplikacji zewnętrznej. Uruchamiasz workflow przed edycją jego kodu, aby uzyskać wynik bazowy, ale okazuje się, że workflow nie działa. Dlaczego tak się dzieje?"
documentation: "https://docs.github.com/en/actions/how-tos/write-workflows/choose-what-workflows-do/use-secrets?tool=webui#using-secrets-in-a-workflow"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Sforkowane repozytoria nie dziedziczą sekretów z oryginalnego repozytorium  
- <input type="checkbox" disabled> Podczas dziedziczenia secreta z oryginalnego repozytorium wystąpił błąd podczas forka, który spowodował, że secret stał się nieprawidłowy lub uszkodzony
- <input type="checkbox" disabled> Dziedziczony secret miał rozmiar większy niż 48 KB
- <input type="checkbox" disabled> Sforkowane repozytoria dziedziczą jedynie sekrety repozytorium, więc używany w workflow secret musiał być sekretem organizacyjnym lub środowiskowym.

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

- [x] Sforkowane repozytoria nie dziedziczą sekretów z oryginalnego repozytorium  
> Ze względów bezpieczeństwa (z wyjątkiem `GITHUB_TOKEN`) sekrety nie są przekazywane do runnera, gdy workflow jest uruchamiany z poziomu sforkowanego repozytorium. Spowoduje to niepowodzenie workflow, jeśli odwołuje się on do secreta z oryginalnego repozytorium.
- [ ] Podczas dziedziczenia secreta z oryginalnego repozytorium wystąpił błąd podczas forka, który spowodował, że secret stał się nieprawidłowy lub uszkodzony
> Z wyjątkiem `GITHUB_TOKEN` sekrety nie są przekazywane do runnera, gdy workflow jest uruchamiany z poziomu sforkowanego repozytorium. W związku z tym taka sytuacja nie mogła się wydarzyć.
- [ ] Dziedziczony secret miał rozmiar większy niż 48 KB
> Z wyjątkiem `GITHUB_TOKEN` sekrety nie są przekazywane do runnera, gdy workflow jest uruchamiany z poziomu sforkowanego repozytorium. Dlatego rozmiar nie ma tutaj znaczenia.
- [ ] Sforkowane repozytoria dziedziczą jedynie sekrety repozytorium, więc używany w workflow secret musiał być sekretem organizacyjnym lub środowiskowym.
> Z wyjątkiem `GITHUB_TOKEN` sekrety nie są przekazywane do runnera, gdy workflow jest uruchamiany z poziomu sforkowanego repozytorium. Dotyczy to wszystkich typów sekretów (repozytorium, środowiskowych i organizacyjnych).
