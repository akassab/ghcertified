---
question: "Dave wants to be notified when a comment is created on an issue within a GitHub repository. Which event trigger should be used within the workflow configuration?"
documentation: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#issue_comment"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> `issue_comment`
- <input type="checkbox" disabled> `issues.comment`
- <input type="checkbox" disabled> `issues`
- <input type="checkbox" disabled> `comment`

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

- [x] `issue_comment`
> **Simple:** Use `on.issue_comment` (optionally `types: [created]`) when someone comments on an issue or PR.
>
> **Detailed:** Comments on issues and pull requests emit the **`issue_comment`** webhook—not `issues.comment`, bare `issues`, or `comment`:
>
> ```yaml
> on:
>   issue_comment:
>     types: [created]
> jobs:
>   notify:
>     runs-on: ubuntu-latest
>     steps:
>       - run: echo "New comment on #${{ github.event.issue.number }}"
> ```
>
> `types: [created]` limits runs to new comments; omit `types` to include `edited` and `deleted`. Dave can read `github.event.comment.body` and `github.event.issue` for notification logic. For label or issue-open events, use other triggers (`issues`, `pull_request`) instead.
