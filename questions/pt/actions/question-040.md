---
question: "No exemplo a seguir, o `workflow A` passa todos os seus secrets para o `workflow B`, utilizando a palavra-chave inherit. Em seguida, o `workflow B` chama o `workflow C`. Qual afirmação sobre os `secrets` é verdadeira para esse exemplo?"
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
- <input type="checkbox" disabled> Todos os secrets disponíveis para o `workflow A` também estarão disponíveis para o `workflow B`, mas não para o `workflow C`
- <input type="checkbox" disabled> Todos os secrets da organização `octo-org` e do repositório `octo-org/example-repo` estarão disponíveis para o `workflow B`, mas não para o `workflow C`
- <input type="checkbox" disabled> Todos os secrets disponíveis para o `workflow A` também estarão disponíveis para o `workflow B` e o `workflow C`
- <input type="checkbox" disabled> Somente os repository e environment secrets disponíveis para o `workflow A` estarão disponíveis para o `workflow B`, mas não para o `workflow C`. Secrets no escopo da organização não podem ser herdados

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
- [x] Todos os secrets disponíveis para o `workflow A` também estarão disponíveis para o `workflow B`, mas não para o `workflow C`
- [ ] Todos os secrets da organização `octo-org` e do repositório `octo-org/example-repo` estarão disponíveis para o `workflow B`, mas não para o `workflow C`
> Nem todos os secrets da organização `octo-org` precisam ser disponibilizados para `octo-org/example-repo`.
- [ ] Todos os secrets disponíveis para o `workflow A` também estarão disponíveis para o `workflow B` e o `workflow C`
> O `workflow B` precisaria adicionar `secrets: inherit` ao chamar o `workflow C`
- [ ] Somente os repository e environment secrets disponíveis para o `workflow A` estarão disponíveis para o `workflow B`, mas não para o `workflow C`. Secrets no escopo da organização não podem ser herdados
