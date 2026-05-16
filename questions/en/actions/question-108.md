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
> The `check_run` event uses the `types` array with supported activity types such as `rerequested` and `completed`. `started` is not a valid type here, and `type` or `filter` are not the correct keys.
