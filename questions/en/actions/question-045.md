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
> Test output such as coverage HTML, JUnit XML, or Playwright screenshots should be uploaded as workflow artifacts so reviewers can download them from the run summary. A typical step uses `actions/upload-artifact` with `path: coverage/` or `playwright-report/`. Caches speed up repeated dependency installs and are keyed for reuse, not for retaining reports you inspect after CI finishes. Packages and Releases are for publishing distributable software, not ad hoc CI attachments.
