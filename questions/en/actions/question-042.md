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
> Artifacts persist files from a workflow run so you can download or inspect them from the Actions UI after the run completes—ideal for test reports, screenshots, and logs. Use `actions/upload-artifact` with paths like `coverage/` or `test-results.xml`, then download them from the run summary. That is different from caching (speeding up installs) or Releases (shipping versioned software to users).

- [x] Use artifacts to save binaries produced by a build job to use in a subsequent deploy job to deploy a new version of an application
> Upload artifacts in the build job (`path: dist/app.zip`) and download them in a later deploy job with `needs: build` so the deploy step receives the exact binaries that job produced. `actions/download-artifact` pulls the bundle into the deploy runner's workspace. Caching is for dependencies with stable keys, not passing fresh build outputs between jobs in the same workflow.
