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
- [ ] by using the `matrix.property` syntax
- [ ] by using the `context` keyword within the job configuration
- [ ] by accessing the variables directly with the syntax `version` and `os`
