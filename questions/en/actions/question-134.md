---
question: "How do you run custom JavaScript scripts directly in a GitHub Actions workflow?"
documentation: "https://github.com/marketplace/actions/github-script"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Via the `actions/github-script` action
- <input type="checkbox" disabled> By enabling the 'Allow custom JavaScript scripts' configuration in the Actions settings of a repository
- <input type="checkbox" disabled> By enabling the 'Allow custom JavaScript scripts' configuration in the Actions settings of an organization
- <input type="checkbox" disabled> Write the contents of a script block to the `GITHUB_SCRIPT` environmental variable
- <input type="checkbox" disabled> In a JavaScript Action, set the `using` key to `'github-script'`

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

- [x] Via the `actions/github-script` action
> `actions/github-script` runs inline JavaScript with `github` (Octokit) and workflow contexts pre-wired—no separate Node setup step. Example: `script: await github.rest.issues.createComment({...})` in the `with:` block. Use it when a few API calls are easier than maintaining a custom action or curl against the REST API.
