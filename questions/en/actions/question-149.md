---
question: "What does writing to `GITHUB_STEP_SUMMARY` do?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands#adding-a-job-summary"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

```yaml
- name: "Write results of test suite"
  run: |
    echo "The results of the testing suite are:" >> $GITHUB_STEP_SUMMARY
```
- <input type="checkbox" disabled> Adds this line to the job summary
- <input type="checkbox" disabled> Adds this line as a subtitle to the step name in the GitHub Actions UI
- <input type="checkbox" disabled> Adds this line to the built-in artifact `github-steps-summary.md`
- <input type="checkbox" disabled> Prints this line as a step-level debug message

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

```yaml
- name: "Write results of test suite"
  run: |
    echo "The results of the testing suite are:" >> $GITHUB_STEP_SUMMARY
```
- [x] Adds this line to the job summary
> Writing to `GITHUB_STEP_SUMMARY` adds to the job summary, which can be used as a streamlined version of a workflow log.
