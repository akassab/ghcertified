---
question: "How do you access matrix variables in a matrix strategy job?"
documentation: "https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs#using-a-matrix-strategy"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Using the `vars` context
- <input type="checkbox" disabled> Using the `matrix` context
- <input type="checkbox" disabled> Using the `job` context
- <input type="checkbox" disabled> Using the `jobs` context

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

- [x] Using the `matrix` context
> Each matrix combination exposes its values on `${{ matrix.<key> }}` (the `matrix` context). For example, `${{ matrix.os }}` resolves to the OS value for that matrix job. There is no `job` or `jobs` context for matrix values, and `vars` holds configuration variables, not matrix dimensions.
