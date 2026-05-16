---
question: "Why might you use `hashFiles` when utilizing `actions/cache`?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/expressions#hashfiles"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

```yaml
  - uses: actions/cache@v5
    with:
      path: ~/.npm
      key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}
```
- <input type="checkbox" disabled> If a cache key contains the dependencies file wrapped in `hashFiles`, the key changes when the dependencies file is updated, which helps keep it up to date.
- <input type="checkbox" disabled> `hashFiles` is required for compatibility with Windows runners.
- <input type="checkbox" disabled> When using `hashFiles` as part of a cache key, if there is a cache miss, `hashFiles` gives additional debug info.  
- <input type="checkbox" disabled> When using `hashFiles` as part of a cache key, an additional step will be generated in the caller workflow. This workflow step prints the value of the SHA-256 hash of the cache key for reference purposes.  

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

```yaml
  - uses: actions/cache@v5
    with:
      path: ~/.npm
      key: ${{ runner.os }}-build-${{ env.cache-name }}-${{ hashFiles('**/package-lock.json') }}
```
- [x] If a cache key contains the dependencies file wrapped in `hashFiles`, the key changes when the dependencies file is updated, which helps keep it up to date.
> `hashFiles('**/package-lock.json')` hashes matching files so the cache **key** changes when dependencies change. Combined with `runner.os` in the key, you get a fresh cache after `npm install` updates the lockfile instead of reusing stale `node_modules`. Without `hashFiles`, you might hit an old cache and miss new packages until the key expires.
