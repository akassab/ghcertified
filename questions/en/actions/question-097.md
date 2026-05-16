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
> **Simple:** On a cache miss, restore does not fail the job; a successful run saves a new cache for that `key`.
>
> **Detailed:** `actions/cache` has separate restore and save phases. When the exact `key` is not found, the restore step reports a miss but the workflow **continues**—your install step runs normally:
>
> ```yaml
> - uses: actions/cache@v4
>   id: cache
>   with:
>     path: ~/.npm
>     key: npm-${{ hashFiles('**/package-lock.json') }}
> - run: npm ci
> ```
>
> If the job finishes successfully, the action uploads a new cache entry for that key. The next run with the same key may **hit** and skip most of `npm ci`. A miss does not search other repositories or require creating cache entries manually in the UI; misses simply mean "install from scratch this time."
