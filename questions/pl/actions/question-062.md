---
question: "Twoja organizacja definiuje sekret `SomeSecret`, jednak podczas odwoływania się do tego sekretu w ramach workflow za pomocą `${{ secrets.SomeSecret }}` otrzymujesz inną wartość niż oczekiwana. Co może być powodem tego problemu?"
documentation: "https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#naming-your-secrets"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Sekret `SomeSecret` jest również zadeklarowany w zakresie repozytorium
- <input type="checkbox" disabled> Sekret `SomeSecret` jest również zadeklarowany w zakresie enterprise
- <input type="checkbox" disabled> Wyrażenie `${{ secrets.SomeSecret }}` jest używane tylko dla sekretów w zakresie repozytorium
- <input type="checkbox" disabled> Musisz użyć GitHub API, aby uzyskać dostęp do sekretów w zakresie organizacji

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

- [x] Sekret `SomeSecret` jest również zadeklarowany w zakresie repozytorium
- [ ] Sekret `SomeSecret` jest również zadeklarowany w zakresie enterprise
> Jeśli sekret o tej samej nazwie istnieje na wielu poziomach, sekret na najniższym poziomie ma pierwszeństwo.
- [ ] Wyrażenie `${{ secrets.SomeSecret }}` jest używane tylko dla sekretów w zakresie repozytorium
- [ ] Musisz użyć GitHub API, aby uzyskać dostęp do sekretów w zakresie organizacji
