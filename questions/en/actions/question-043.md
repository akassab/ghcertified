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
> **Simple:** Yes—workflows on feature branches can restore caches saved on the default branch when no exact branch match exists for that cache key.
>
> **Detailed:** A cache saved on **`main`** is available as a **fallback** to workflows on other branches (for example `feature-a`) when there is no exact branch match for the same cache key. A PR branch can restore an `npm-${{ hashFiles('**/package-lock.json') }}` cache first created on `main`, avoiding a cold `npm ci` on every branch. Caches are **not** limited to the same branch only. Access does **not** depend on whether files changed on the feature branch—GitHub matches by **cache key** and documented **branch scope** rules (default-branch caches are broadly restorable; feature-branch caches have tighter scope).
