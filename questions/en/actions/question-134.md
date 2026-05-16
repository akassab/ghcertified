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
> **Simple:** Use `actions/github-script` to run inline JavaScript with Octokit and workflow contexts pre-wired—no separate Node setup.
>
> **Detailed:** Pass API calls in the `with.script` input—for example `await github.rest.issues.createComment({ owner, repo, issue_number, body })`. The action injects `github`, `context`, and `core` automatically. Use it when a few REST calls are easier than maintaining a custom action or hand-written `curl` with token headers.
