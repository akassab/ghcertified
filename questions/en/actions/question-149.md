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
> Appending markdown to `$GITHUB_STEP_SUMMARY` renders in the run’s **Job summary** tab on GitHub.com. The example line becomes visible documentation for reviewers without scrolling the full log. You can add tables, headings, and links—GitHub interprets the file as Markdown. Multiple steps append to the same summary for the job.
