---
question: "Fill in the blank: When using `push` event trigger filters you can use <____> patterns to target multiple branches"
documentation: "https://docs.github.com/en/actions/using-workflows/triggering-a-workflow#using-filters-to-target-specific-branches-or-tags-for-push-events"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> glob
- <input type="checkbox" disabled> regex
- <input type="checkbox" disabled> scheme
- <input type="checkbox" disabled> action

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

- [x] glob
> **Simple:** Branch and path filters use **glob** patterns (`*`, `**`, `?`), not full regex.
>
> **Detailed:** Under `push` or `pull_request`:
>
> ```yaml
> on:
>   push:
>     branches:
>       - 'feature/*'
>       - '!dependabot/**'
>     paths:
>       - 'src/**'
> ```
>
> `feature/*` matches one segment; `**` matches across slashes. Negation uses `!` prefix. Misconception: PCRE-style regex like `^release-.*$`—use glob instead. "URL" and "action" are distractors; filter pattern type for branches/paths is **glob** per GitHub docs.
