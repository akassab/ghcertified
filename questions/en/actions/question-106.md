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
> `restore-keys` lists prefix keys tried in order when the exact `key` has no match, enabling reuse of a previous partial cache (for example `npm-${{ runner.os }}-` matching `npm-Linux-abc123`). That softens cache busts when lockfiles change slightly. It does not log hit or miss by itself, define which paths are cached, or enable cross-OS sharing unless keys and paths are designed for that.
