---
question: "How can you use the GitHub API to create or update a repository secret?"
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
> Creating or updating an encrypted repository secret uses PUT with the secret name in the path and the encrypted value in the body. POST is not the documented method for this upsert operation.
