---
question: "¿Cómo puedes omitir la siguiente ejecución del flujo de trabajo cuando realizas un commit o creas un PR?"
documentation: "https://docs.github.com/en/actions/managing-workflow-runs/skipping-workflow-runs"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

```yaml
name: Build
on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    name: Extract artifact version
...
```

- <input type="checkbox" disabled> Incluyendo cualquiera de las siguientes palabras clave en el mensaje del commit o en el título del pull-request
```yaml
[skip ci]
[ci skip]
[no ci]
[skip actions]
[actions skip]
```

- <input type="checkbox" disabled> Proporcionar `SKIP_WORKFLOW` en el mensaje del commit
- <input type="checkbox" disabled> El flujo de trabajo anterior se ejecutará en cada evento de push o pull request en todos los casos

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
name: Build
on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    name: Extract artifact version
...
```

- [x] Incluyendo cualquiera de las siguientes palabras clave en el mensaje del commit o en el título del pull-request
```yaml
[skip ci]
[ci skip]
[no ci]
[skip actions]
[actions skip]
```

- [ ] Proporcionar `SKIP_WORKFLOW` en el mensaje del commit
- [ ] El flujo de trabajo anterior se ejecutará en cada evento de push o pull request en todos los casos
