---
question: "How should a dependent job reference the `output1` value produced by a job named `job1` earlier in the same workflow?"
documentation: "https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/passing-information-between-jobs"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> `${{needs.job1.outputs.output1}}`
- <input type="checkbox" disabled> `${{job1.outputs.output1}}`
- <input type="checkbox" disabled> `${{needs.job1.output1}}`
- <input type="checkbox" disabled> `${{depends.job1.output1}}`

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

- [x] `${{needs.job1.outputs.output1}}`
> In a dependent job, read another job’s outputs with `needs.<job_id>.outputs.<name>`. Omitting `needs`, using `job1` directly, or `depends` is invalid syntax.
