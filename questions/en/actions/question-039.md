---
question: "Is this statement true? `Workflows can be reused, but a reusable workflow cannot call another reusable workflow.`"
documentation: "https://docs.github.com/en/actions/using-workflows/reusing-workflows#nesting-reusable-workflows"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> False
- <input type="checkbox" disabled> True

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

- [x] False
> Reusable workflows can call other reusable workflows—GitHub documents nesting with limits on depth and which events may trigger nested calls. A caller might use `uses: org/app/.github/workflows/ci.yml@main`, and that reusable workflow can itself call another reusable workflow in a `jobs` entry. The statement that nesting is impossible is false; you cannot nest without bound, but chaining is supported when you stay within the documented limits.
