---
question: "In the following example, `workflow A` passes all of its secrets to `workflow B`, by using the inherit keyword. Then `workflow B` calls `workflow C`. Which statement regarding `secrets` is true for that example?"
documentation: "https://docs.github.com/en/actions/using-workflows/reusing-workflows#passing-secrets-to-nested-workflows"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

```yaml
jobs:
  workflowA-calls-workflowB:
    uses: octo-org/example-repo/.github/workflows/B.yml@main
    secrets: inherit
```

```yaml
jobs:
  workflowB-calls-workflowC:
    uses: different-org/example-repo/.github/workflows/C.yml@main
```
- <input type="checkbox" disabled> All secrets available to `workflow A` will be also available to `workflow B`, but not to `workflow C`
- <input type="checkbox" disabled> All secrets from `octo-org` organization and `octo-org/example-repo` repository will be available to `workflow B`, but not to `workflow C`
- <input type="checkbox" disabled> All secrets available to `workflow A` will be also available to `workflow B` and `workflow C`
- <input type="checkbox" disabled> Only repository and environment secrets available to `workflow A` will be available to `workflow B`, but not to `workflow C`. Organization scoped secrets cannot be inherited

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
  workflowA-calls-workflowB:
    uses: octo-org/example-repo/.github/workflows/B.yml@main
    secrets: inherit
```

```yaml
jobs:
  workflowB-calls-workflowC:
    uses: different-org/example-repo/.github/workflows/C.yml@main
```
- [x] All secrets available to `workflow A` will be also available to `workflow B`, but not to `workflow C`
> **Simple:** `secrets: inherit` from A to B passes A's secrets to B; B's call to C does not inherit them unless B also uses `secrets: inherit` or maps secrets explicitly.
>
> **Detailed:** Workflow A calls B with `secrets: inherit`, so **all secrets available to A** (repository, environment, and organization secrets the caller can access) flow to **workflow B**. Workflow B calls C in `different-org` **without** `secrets: inherit`, so **workflow C does not automatically get A's secrets**. C only receives secrets B explicitly passes:
>
> ```yaml
> secrets:
>   MY_TOKEN: ${{ secrets.MY_TOKEN }}
> ```
>
> or `secrets: inherit` on B's `uses:` job to C. In the example, B has A's secrets; C does not unless B configures the second call. Secrets do not cascade across nested reusable workflows by default.
