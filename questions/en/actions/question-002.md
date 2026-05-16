---
question: "What are the different permission levels you can assign to `GITHUB_TOKEN` in the `permissions` block?"
documentation: "https://docs.github.com/en/actions/using-jobs/assigning-permissions-to-jobs"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> none, write, read
- <input type="checkbox" disabled> read, write, delete
- <input type="checkbox" disabled> read, write

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

- [x] none, write, read
> For each permission category (such as `contents` or `pull-requests`), the `permissions` key accepts `read`, `write`, or `none`. For example, `permissions: contents: read` lets the token clone and read files but not push commits; `contents: write` allows pushes. There is no separate `delete` level—destructive operations are covered by `write`. Use `none` to remove a scope entirely from the token for that job.
