---
question: "When should you use `caching`?"
documentation: "https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> When you want to reuse files that don't change often between jobs or workflow runs, such as build dependencies from a package management system.
- <input type="checkbox" disabled> When you want to reuse files that do change often between jobs or workflow runs, such as build dependencies from a package management system.
- <input type="checkbox" disabled> When you want to save files produced by a job to view after a workflow run has ended, such as built binaries or build logs.
- <input type="checkbox" disabled> When you want to save binaries produced by a build job to use in a subsequent deploy job to deploy a new version of an application

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

- [x] When you want to reuse files that don't change often between jobs or workflow runs, such as build dependencies from a package management system.
> **Simple:** Use caching for infrequently changing files (like dependency folders) to speed up later jobs or workflow runs—not for build outputs you inspect after CI finishes.
>
> **Detailed:** `actions/cache` is for files that are **expensive to download or rebuild** but **change infrequently**—`~/.npm`, Maven `.m2`, Gradle caches, etc. Key a cache and restore it across jobs or runs:
>
> ```yaml
> - uses: actions/cache@v4
>   with:
>     path: ~/.npm
>     key: npm-${{ hashFiles('**/package-lock.json') }}
> ```
>
> When the lockfile hash matches, restore skips `npm ci` work. Caching is **not** for binaries, test reports, or logs you need after the run ends (use **artifacts**). "Files that change often" or "save build logs" describes the wrong tool.
