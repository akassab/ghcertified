---
question: "How can you cache dependencies to speed up workflow execution?"
documentation: "https://docs.github.com/en/enterprise-cloud@latest/actions/using-workflows/caching-dependencies-to-speed-up-workflows#about-caching-workflow-dependencies"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Using the cache keyword
- <input type="checkbox" disabled> Using the actions/cache action
- <input type="checkbox" disabled> By storing them in the repository
- <input type="checkbox" disabled> By using the store keyword

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

- [x] Using the actions/cache action
> **Simple:** Cache dependency folders with `actions/cache` or setup actions (e.g. `setup-node` with `cache: npm`)—there is no top-level `cache:` keyword.
>
> **Detailed:** GitHub Actions has no workflow-level `cache:` key. You restore and save directories inside a step:
>
> ```yaml
> - uses: actions/cache@v4
>   with:
>     path: ~/.npm
>     key: npm-${{ runner.os }}-${{ hashFiles('**/package-lock.json') }}
> ```
>
> Or use built-in caching on setup actions:
>
> ```yaml
> - uses: actions/setup-node@v4
>   with:
>     node-version: '20'
>     cache: 'npm'
> ```
>
> A matching `key` on a later run restores the folder and skips long downloads. Cache is for **speeding up installs** between runs; use `actions/upload-artifact` when you need durable build outputs for deploy or download.
