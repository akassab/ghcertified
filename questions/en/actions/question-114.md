---
question: "How can you access the current values of variables in a matrix within a job in the example below:"
documentation: "https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs#using-a-matrix-strategy"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

```yaml
jobs:
    example_matrix:
        strategy:
            matrix:
                version: [10, 12, 14]
                os: [ubuntu-latest, windows-latest]
```
- <input type="checkbox" disabled> reference variables through the `matrix` context with syntax like`matrix.version` and `matrix.os`
- <input type="checkbox" disabled> by using the `matrix.property` syntax
- <input type="checkbox" disabled> by using the `context` keyword within the job configuration
- <input type="checkbox" disabled> by accessing the variables directly with the syntax `version` and `os`

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
jobs:
    example_matrix:
        strategy:
            matrix:
                version: [10, 12, 14]
                os: [ubuntu-latest, windows-latest]
```
- [x] reference variables through the `matrix` context with syntax like`matrix.version` and `matrix.os`
> **Simple:** Use `${{ matrix.<axis> }}` (e.g. `${{ matrix.os }}`) inside the job for the current matrix combination.
>
> **Detailed:** Each matrix job receives a `matrix` context with one value per axis defined under `strategy.matrix`:
>
> ```yaml
> strategy:
>   matrix:
>     version: [10, 12, 14]
>     os: [ubuntu-latest, windows-latest]
> runs-on: ${{ matrix.os }}
> steps:
>   - uses: actions/setup-node@v4
>     with:
>       node-version: ${{ matrix.version }}
>   - run: echo "Testing on ${{ matrix.os }} Node ${{ matrix.version }}"
> ```
>
> Reference axes as `matrix.version` and `matrix.os` in expressions—bare `version` or `os` without the `matrix.` prefix is invalid. Use the same names you declared in the matrix map; there is no separate `context:` keyword for matrix values.
