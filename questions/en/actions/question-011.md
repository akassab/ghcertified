---
question: "In a workflow with multiple jobs the default behavior is:"
documentation: "https://docs.github.com/en/actions/using-workflows/about-workflows#creating-dependent-jobs"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> All jobs run in parallel
- <input type="checkbox" disabled> Jobs run in sequence
- <input type="checkbox" disabled> Jobs run based on the order they are defined in the workflow file
- <input type="checkbox" disabled> Only the first job runs, others require manual approval

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

- [x] All jobs run in parallel
> By default, jobs with no `needs` dependency start at the same time and run in parallel on available runners. Sequential execution only happens when you declare dependencies with `needs`; definition order in the YAML file does not control run order.
