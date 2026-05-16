---
question: "What is the purpose of the `restore-keys` parameter in `actions/cache` in GitHub Actions?"
documentation: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#managing-caches"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> provide alternative keys to use in case of a cache miss
- <input type="checkbox" disabled> indicate whether a cache hit occurred
- <input type="checkbox" disabled> specify the location of the cached files
- <input type="checkbox" disabled> enable cross-OS cache functionality

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

- [x] provide alternative keys to use in case of a cache miss
> **Simple:** `restore-keys` lists prefix keys to try when the exact `key` misses, reusing the newest partial match.
>
> **Detailed:** The primary `key` must match exactly for a full hit. `restore-keys` provides fallback prefixes, tried in order, when the exact key is missing:
>
> ```yaml
> - uses: actions/cache@v4
>   with:
>     path: ~/.npm
>     key: npm-${{ runner.os }}-${{ hashFiles('**/package-lock.json') }}
>     restore-keys: |
>       npm-${{ runner.os }}-
> ```
>
> If the lockfile hash changes, `npm-Linux-newhash` misses, but `npm-Linux-` may restore an older `npm-Linux-oldhash` cache—partial reuse instead of a cold install. It does not replace `path` (what to cache), does not log hits by itself, and does not share caches across OS unless you design keys and paths for that.
