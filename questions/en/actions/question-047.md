---
question: "In job `deploy`, if you want to access binaries (containing your application) that were created in job `build` you should"
documentation: "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#comparing-artifacts-and-dependency-caching"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> upload the binaries as artifacts in `build` and download them in `deploy`
- <input type="checkbox" disabled> upload the binaries as artifacts in `deploy` and download them in `build`
- <input type="checkbox" disabled> cache the binaries in `build` and read the files from cache in `deploy`
- <input type="checkbox" disabled> cache the binaries in `deploy` and read the files from cache in `build`

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

- [x] upload the binaries as artifacts in `build` and download them in `deploy`
> The job that produces the binaries should run `actions/upload-artifact` (for example `path: ./out/app`); the downstream `deploy` job runs `actions/download-artifact` after `needs: build` so deploy starts only after the artifact exists. Reversing upload/download or using cache in the wrong job would not pass a fresh build output reliably. Caches are keyed for reuse across runs (often dependencies), not for shipping a new binary build to deploy in the same workflow.
