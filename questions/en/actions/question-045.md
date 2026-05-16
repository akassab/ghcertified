---
question: "What should you use to store coverage reports or screenshots generated during a workflow that runs automated testing for a repository?"
documentation: "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#comparing-artifacts-and-dependency-caching"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Artifacts
- <input type="checkbox" disabled> Caches
- <input type="checkbox" disabled> Packages
- <input type="checkbox" disabled> Releases

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

- [x] Artifacts
> **Simple:** Upload coverage reports and test screenshots as workflow artifacts so reviewers can download them from the run summary.
>
> **Detailed:** Test output—coverage HTML, JUnit XML, Playwright screenshots—belongs in **artifacts**, not caches or releases:
>
> ```yaml
> - uses: actions/upload-artifact@v4
>   with:
>     name: playwright-report
>     path: playwright-report/
> ```
>
> Reviewers download from the Actions run summary after CI finishes. **Caches** speed dependency installs and are keyed for reuse across runs, not for retaining reports you inspect post-run. **Packages** and **Releases** publish distributable software to users, not ad hoc CI attachments.
