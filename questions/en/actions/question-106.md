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
> The `restore-keys` input lists prefix keys to try when the primary `key` does not match, enabling partial cache reuse. It does not report hit/miss, set cache paths, or enable cross-OS caching by itself.
