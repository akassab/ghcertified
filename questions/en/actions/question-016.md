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
> **Simple:** Read matrix values with `${{ matrix.<key> }}`—for example `${{ matrix.os }}` in `runs-on`.
>
> **Detailed:** Example job:
>
> ```yaml
> jobs:
>   test:
>     strategy:
>       matrix:
>         node: [18, 20]
>         os: [ubuntu-latest, windows-latest]
>     runs-on: ${{ matrix.os }}
>     steps:
>       - uses: actions/setup-node@v4
>         with:
>           node-version: ${{ matrix.node }}
> ```
>
> Each spawned job gets its own `matrix` context for that combination. Misconception: `jobs.os` or `vars.OS`—repository **vars** are unrelated; matrix dimensions live only on **`matrix`**. You can also use `matrix` in `if:` and `env:` within that matrix job.
