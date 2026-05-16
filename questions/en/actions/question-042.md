---
question: "When should you use `artifacts`?"
documentation: "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#about-workflow-artifacts"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Use artifacts to save files produced by a job to view after a workflow run has ended, such as test results or build logs.
- <input type="checkbox" disabled> Use artifacts to save binaries produced by a build job to use in a subsequent deploy job to deploy a new version of an application
- <input type="checkbox" disabled> Use artifacts to reuse files that don't change often between jobs or workflow runs, such as build dependencies from a package management system.
- <input type="checkbox" disabled> Use artifacts to create new versions of your application together with release notes, mentions and/or contributors

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

- [x] Use artifacts to save files produced by a job to view after a workflow run has ended, such as test results or build logs.
> **Simple:** Upload artifacts so you can download test reports, logs, or screenshots from the workflow run after it finishes.
>
> **Detailed:** Use `actions/upload-artifact` to persist files when a job completes. They appear on the run summary for anyone with access:
>
> ```yaml
> - uses: actions/upload-artifact@v4
>   with:
>     name: coverage
>     path: coverage/
> ```
>
> This is for **inspection after the run**—not for speeding up the next run (that is **cache**) or shipping a product release to users (that is **Releases**).

- [x] Use artifacts to save binaries produced by a build job to use in a subsequent deploy job to deploy a new version of an application
> **Simple:** Pass build output to a later job in the same workflow by uploading in `build` and downloading in `deploy`.
>
> **Detailed:** Artifacts are the standard way to hand off binaries between jobs when `needs` chains them:
>
> ```yaml
> # build job
> - uses: actions/upload-artifact@v4
>   with:
>     name: app
>     path: dist/app.zip
> # deploy job (needs: build)
> - uses: actions/download-artifact@v4
>   with:
>     name: app
> ```
>
> The deploy job gets the same `app` artifact without committing build output to git. Caches reuse dependencies across runs; artifacts carry **this run's** outputs.
