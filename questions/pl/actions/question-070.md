---
question: "Jak możesz użyć GitHub API do utworzenia lub zaktualizowania sekretnych danych w repozytorium?"
documentation: "https://docs.github.com/en/rest/actions/secrets?create-or-update-a-repository-secret=&apiVersion=2022-11-28#create-or-update-a-repository-secret"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> `PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}`
- <input type="checkbox" disabled> `POST /repos/{owner}/{repo}/actions/secrets/{secret_name}`
- <input type="checkbox" disabled> `HEAD /repos/{owner}/{repo}/actions/secrets/{secret_name}`
- <input type="checkbox" disabled> `GET /repos/{owner}/{repo}/actions/secrets/{secret_name}`

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

- [x] `PUT /repos/{owner}/{repo}/actions/secrets/{secret_name}`
- [ ] `POST /repos/{owner}/{repo}/actions/secrets/{secret_name}`
> `POST` nie jest prawidłowe dla tego endpointu. Tylko metoda `PUT` może tworzyć lub aktualizować sekrety w repozytorium.
- [ ] `HEAD /repos/{owner}/{repo}/actions/secrets/{secret_name}`
- [ ] `GET /repos/{owner}/{repo}/actions/secrets/{secret_name}`
