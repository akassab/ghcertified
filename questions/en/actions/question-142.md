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
> **Simple:** **Installation access tokens** are short-lived credentials from a GitHub App installation—good for automation beyond default `GITHUB_TOKEN` scope.
>
> **Detailed:** You register the app, install it on org/repos, then mint a token at runtime scoped to repositories the app may access. They suit automation that needs broader or different permissions than the default workflow token, without storing a long-lived user PAT.
- [x] `GITHUB_TOKEN` is a type of installation access token.
> **Simple:** The per-run **`GITHUB_TOKEN`** is itself an installation access token for GitHub’s built-in Actions app.
>
> **Detailed:** It is auto-created for each job; permissions come from the workflow `permissions` block and repository settings. It is not a user PAT and expires when the job ends. Treat it as an installation token with a fixed “Actions” app identity.
- [x] The `actions/create-github-app-token` can be called within workflows to create an installation access token available for immediate use. 
> **Simple:** `actions/create-github-app-token` mints an app installation token inside the workflow for later steps.
>
> **Detailed:** Later steps pass that token to API clients—for example `env: GH_TOKEN: ${{ steps.app-token.outputs.token }}` before `gh api`. You avoid checking a multi-year PAT into secrets while still using app-scoped access controlled by installation permissions.
