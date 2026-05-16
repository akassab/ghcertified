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
> **Simple:** Each permission category (like `contents`) accepts only `read`, `write`, or `none`—not a separate `delete` level.
>
> **Detailed:** The workflow or job `permissions` block maps each scope to one of three levels:
>
> ```yaml
> permissions:
>   contents: read      # clone/fetch, read files
>   pull-requests: write # comment, label, merge (where allowed)
>   issues: none        # remove issues scope from token
> ```
>
> `read` is read-only access for that resource; `write` includes create/update/delete operations GitHub groups under that scope (there is no standalone `delete` keyword). `none` explicitly withholds that scope. Misconception: listing `delete` as a fourth level—use `write` for destructive repo operations or `none` to deny the scope entirely. Fine-grained PATs are a different product; `GITHUB_TOKEN` in Actions uses these three levels per [documented scopes](https://docs.github.com/en/actions/security-guides/automatic-token-authentication#permissions-for-the-github_token).
