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
> **Simple:** Upload binaries in `build` with `upload-artifact`; download them in `deploy` after `needs: build`.
>
> **Detailed:** The producer job uploads; the consumer job downloads with an explicit dependency:
>
> ```yaml
> jobs:
>   build:
>     runs-on: ubuntu-latest
>     steps:
>       - run: ./build.sh
>       - uses: actions/upload-artifact@v4
>         with:
>           name: app
>           path: ./out/app
>   deploy:
>     needs: build
>     runs-on: ubuntu-latest
>     steps:
>       - uses: actions/download-artifact@v4
>         with:
>           name: app
>       - run: ./deploy.sh
> ```
>
> Reversing upload/download or using **cache** for fresh binaries is unreliable—caches are keyed for dependency reuse across runs, not shipping a new build to deploy in the same workflow.
