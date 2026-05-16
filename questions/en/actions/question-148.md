---
question: "Which statement is true regarding `github.ref` when the workflow is triggered by a push event?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/contexts#github-context"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> In push events, `github.ref` is the fully-formed ref of the branch or tag ref that was pushed. 
- <input type="checkbox" disabled> In push events, `github.ref` is the message of the commit that triggered the workflow.
- <input type="checkbox" disabled> In push events, `github.ref` is SHA of the commit that triggered the workflow.
- <input type="checkbox" disabled> In push events, `github.ref` is the description of the commit that triggered the workflow.
- <input type="checkbox" disabled> In push events, `github.ref` is the type of fully-formed ref that triggered the workflow run. The value will either be `branch`, `tag`, or `null` (if the ref was not fully-formed).

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

- [x] In push events, `github.ref` is the fully-formed ref of the branch or tag ref that was pushed. 
> **Simple:** On **push** events, `github.ref` is the fully qualified ref that was pushed—for example `refs/heads/main` or `refs/tags/v1.0.0`.
>
> **Detailed:** Use it in `if:` conditions or scripts when behavior should differ for branches versus tags—for example `if: startsWith(github.ref, 'refs/tags/')` for release-only jobs. `github.ref_name` is the short name (`main`, `v1.0.0`) without the `refs/heads/` or `refs/tags/` prefix.
