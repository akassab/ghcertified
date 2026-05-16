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
> Dependency caching with `actions/cache` is for files that are expensive to download or rebuild but change infrequently—think `~/.npm`, Maven `.m2`, or Gradle caches. You key a cache (for example `npm-${{ hashFiles('**/package-lock.json') }}`) and restore it in later jobs or workflow runs to skip re-downloading dependencies. Caching is not for binaries, test reports, or logs you need after the run ends; those belong in artifacts. Choosing "files that change often" or "save build logs" describes artifacts or the wrong caching use case.
