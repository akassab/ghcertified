---
question: "Como você pode usar a GitHub API para criar ou atualizar um segredo de repositório?"
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
> `POST` não é válido para este endpoint. Somente `PUT` pode criar ou atualizar segredos de repositório.
- [ ] `HEAD /repos/{owner}/{repo}/actions/secrets/{secret_name}`
- [ ] `GET /repos/{owner}/{repo}/actions/secrets/{secret_name}`
