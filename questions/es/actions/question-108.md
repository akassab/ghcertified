---
question: "¿Qué configuración es adecuada para activar un workflow que se ejecute en eventos de webhook relacionados con acciones de check_run?"
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

- [ ] 
```yaml
on:
    check_run:
        types: [started]
```

- [ ] 
```yaml
on:
    check_run:
        type: [closed]
```

- [ ] 
```yaml
on:
    check_run:
        filter: [requested]
```
