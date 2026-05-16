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
> GitHub Actions branch and path filters use **glob** syntax, not full regex. Examples: `feature/*` matches `feature/login`; `!dependabot/**` excludes dependabot branches under `push` or `pull_request` filters. URL schemes and a special `action` pattern type are not used for these filters.
