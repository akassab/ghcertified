---
question: "Which of the following answers is correct regarding installation access tokens?"
documentation: "https://docs.github.com/en/apps/creating-github-apps/authenticating-with-a-github-app/authenticating-as-a-github-app-installation#using-an-installation-access-token-to-authenticate-as-an-app-installation"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Installation access tokens are short-lived tokens ideal for automation activities, but require setting up a Github App.
- <input type="checkbox" disabled> `GITHUB_TOKEN` is a type of installation access token.
- <input type="checkbox" disabled> The `actions/create-github-app-token` can be called within workflows to create an installation access token available for immediate use. 
- <input type="checkbox" disabled> The `actions/create-github-app-token` can be called within workflows to create an installation access token, but the installation access token can only be used in future runs of the workflow.
- <input type="checkbox" disabled> Installation access tokens cannot be configured to act on behalf of their associated Github App. 

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

- [x] Installation access tokens are short-lived tokens ideal for automation activities, but require setting up a Github App.
> GitHub Apps issue installation access tokens scoped to repositories the app can access, which is a common pattern for secure automation beyond the default `GITHUB_TOKEN`.
- [x] `GITHUB_TOKEN` is a type of installation access token.
> `GITHUB_TOKEN` is a GitHub App installation access token that is automatically generated for every workflow run. See the  [documentation](https://docs.github.com/en/actions/concepts/security/github_token) for additional details.
- [x] The `actions/create-github-app-token` can be called within workflows to create an installation access token available for immediate use. 
> The action mints a token during the run so later steps can call the API with app-scoped permissions without storing a long-lived PAT in secrets.
