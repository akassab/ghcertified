---
question: "If a workflow runs on a `feature-a` branch, can it restore `caches` created in the default `main` branch?"
documentation: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#restrictions-for-accessing-a-cache"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Yes, all branches can restore caches created on the default branch
- <input type="checkbox" disabled> Yes, all caches can be accessed by workflows on any branch within the same repository
- <input type="checkbox" disabled> No, caches can only be restored from the same branch
- <input type="checkbox" disabled> Yes but only if no files were changed on `feature-a` branch

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

- [x] Yes, all branches can restore caches created on the default branch
> A cache saved on the default branch is available as a fallback to workflows on other branches when no exact branch match exists. That lets feature branches benefit from dependency caches warmed on `main`.
