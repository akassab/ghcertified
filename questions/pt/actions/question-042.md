---
question: "Quando você deve usar `artifacts`?"
documentation: "https://docs.github.com/en/actions/using-workflows/storing-workflow-data-as-artifacts#about-workflow-artifacts"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Use artifacts para salvar arquivos produzidos por um job para visualização após a execução de um workflow ter terminado, como resultados de testes ou logs de build.
- <input type="checkbox" disabled> Use artifacts para salvar binários produzidos por um job de build para usar em um job de deploy subsequente para implantar uma nova versão de uma aplicação.
- <input type="checkbox" disabled> Use artifacts para reutilizar arquivos que não mudam frequentemente entre jobs ou execuções de workflow, como dependências de build de um sistema de gerenciamento de pacotes.
- <input type="checkbox" disabled> Use artifacts para criar novas versões do seu aplicativo junto com notas de release, menções e/ou contribuidores.

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

- [x] Use artifacts para salvar arquivos produzidos por um job para visualização após a execução de um workflow ter terminado, como resultados de testes ou logs de build.
- [x] Use artifacts para salvar binários produzidos por um job de build para usar em um job de deploy subsequente para implantar uma nova versão de uma aplicação.
- [ ] Use artifacts para reutilizar arquivos que não mudam frequentemente entre jobs ou execuções de workflow, como dependências de build de um sistema de gerenciamento de pacotes.
> O caching deve ser usado para isso https://docs.github.com/en/actions/using-workflows/caching-dependencies-to-speed-up-workflows#comparing-artifacts-and-dependency-caching
- [ ] Use artifacts para criar novas versões do seu aplicativo junto com notas de release, menções e/ou contribuidores.
> Esse é um caso de uso para releases, não artifacts.
