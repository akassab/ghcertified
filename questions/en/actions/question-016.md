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
> Each matrix combination exposes its values on `${{ matrix.<key> }}`—the `matrix` context. For example, `runs-on: ${{ matrix.os }}` picks the OS for that leg, and `node-version: ${{ matrix.version }}` might select Node 12 vs 14. There is no `job` or `jobs` context for matrix dimensions; `vars` holds repository configuration variables instead.
