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
> When a job finishes successfully and no matching cache exists for the key, `actions/cache` saves a new cache entry automatically. You do not search other repositories, require manual cache creation, or fail the workflow on a cache miss.
