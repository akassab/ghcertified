---
question: "You are writing a reusable workflow which has `branch-name` as an input. How can you conditionally run a step in that workflow if the branch name begins with 'smoke-test'?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/expressions#startswith"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Use the built-in `startsWith` method in combination with `jobs.<job_id>.steps[*].if`
```yaml
    if: startsWith(inputs.branch-name, 'smoke-test')
```

- <input type="checkbox" disabled> Use the built-in `startsWith` method in combination with `jobs.<job_id>.steps[*].if`
```yaml
    if: inputs.branch-name.startsWith('smoke-test')
``` 
- <input type="checkbox" disabled> Use the `branches` filter under `workflow_call`
```yaml
on:
  workflow_call:
    branches:
        - 'smoke-test/**'
```

- <input type="checkbox" disabled> Use shell conditionals in combination with `jobs.<job_id>.steps[*].if`
```yaml
    if: [[ "${{inputs.branch-name}}" == "smoke-test"* ]]
```

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

- [x] Use the built-in `startsWith` method in combination with `jobs.<job_id>.steps[*].if`
```yaml
    if: startsWith(inputs.branch-name, 'smoke-test')
```
> **Simple:** Use expression function `startsWith(searchString, prefix)` in `if:`—not JavaScript-style `.startsWith()` on strings.
>
> **Detailed:** `if: startsWith(inputs.branch-name, 'smoke-test')` runs the step only when a reusable workflow input branch name begins with that prefix. Shell tests like `[[ ... ]]` belong in `run:` scripts. `branches` is not a `workflow_call` input type for this pattern—`inputs` with string values and `startsWith` is the documented approach.
