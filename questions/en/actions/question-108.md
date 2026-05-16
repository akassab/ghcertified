---
question: "Which configuration is appropriate for triggering a workflow to run on webhook events related to check_run actions?"
documentation: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#check_run"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> 
```yaml
on:
    check_run:
        types: [rerequested, completed]
```

- <input type="checkbox" disabled> 
```yaml
on:
    check_run:
        types: [started]
```

- <input type="checkbox" disabled> 
```yaml
on:
    check_run:
        type: [closed]
```

- <input type="checkbox" disabled> 
```yaml
on:
    check_run:
        filter: [requested]
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

- [x] 
```yaml
on:
    check_run:
        types: [rerequested, completed]
```
> **Simple:** Use `on.check_run` with a `types` array (e.g. `rerequested`, `completed`) to filter check run webhook activity.
>
> **Detailed:** The `check_run` event fires when check runs are created or updated on the repository. Narrow which activities start your workflow with `types`:
>
> ```yaml
> on:
>   check_run:
>     types: [rerequested, completed]
> jobs:
>   respond:
>     runs-on: ubuntu-latest
>     steps:
>       - run: echo "Check run ${{ github.event.check_run.name }}"
> ```
>
> `rerequested` runs when someone re-runs a check from the UI; `completed` runs when a check finishes. `started` is **not** a supported `types` value for this event. The YAML key must be **`types`** (plural), not `type` or `filter`.
