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
> The `check_run` event listens for check run activity on the repository. The `types` array lists which activities fire the workflow, such as `rerequested` when someone re-runs a check and `completed` when a check finishes. `started` is not a supported type for this webhook. The key is `types`, not `type` or `filter`.
