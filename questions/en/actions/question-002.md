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
> For each permission category (such as `contents` or `pull-requests`), the `permissions` key accepts `read`, `write`, or `none`. There is no `delete` level — write access covers mutating operations, and `none` removes that scope from the token entirely.
