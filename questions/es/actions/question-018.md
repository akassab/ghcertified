---
question: "Este workflow se ejecutará en todos los pull requests donde:"
documentation: "https://docs.github.com/en/actions/using-workflows/triggering-a-workflow#example-including-and-excluding-branches"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

```yaml
on:
  pull_request:
    branches:
      - 'release/**'
      - '!release/**-alpha'
```
- <input type="checkbox" disabled> el nombre de la rama objetivo comienza con `release` pero no termina con `-alpha`
- <input type="checkbox" disabled> el nombre de la rama objetivo comienza con `release`
- <input type="checkbox" disabled> el nombre de la rama de origen comienza con `release` pero no termina con `-alpha`
- <input type="checkbox" disabled> el nombre de la rama de origen comienza con `release`

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
on:
  pull_request:
    branches:
      - 'release/**'
      - '!release/**-alpha'
```
- [x] el nombre de la rama objetivo comienza con `release` pero no termina con `-alpha`
- [ ] el nombre de la rama objetivo comienza con `release`
- [ ] el nombre de la rama de origen comienza con `release` pero no termina con `-alpha`
- [ ] el nombre de la rama de origen comienza con `release`
