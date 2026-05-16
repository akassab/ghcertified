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
> The `issue_comment` event runs when someone creates, edits, or deletes a comment on an issue or pull request. Use `on.issue_comment` with optional `types: [created]` to react only to new comments. Valid event names are not `issues.comment`, bare `issues` for comments, or `comment`. This is the trigger Dave needs for notifications when a comment is added.
