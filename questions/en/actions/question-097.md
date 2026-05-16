---
question: "How does the `actions/cache` action in GitHub Actions handle a cache miss?"
documentation: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#managing-caches"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> by requiring manual intervention to create a new cache
- <input type="checkbox" disabled> by searching for a cache in other repositories
- <input type="checkbox" disabled> by automatically creating a new cache if the job is completed successfully
- <input type="checkbox" disabled> by terminating the workflow if a cache miss occurs

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

- [x] by automatically creating a new cache if the job is completed successfully
> When the primary `key` does not match an existing cache, restore steps continue without failing the job. If the job later completes successfully, `actions/cache` saves a new entry for future runs. On a miss you pay the full install cost once; the next run with the same key may hit the cache. Cache does not search other repositories or require manual creation in the UI.
