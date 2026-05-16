---
question: "How can you reuse a defined workflow in multiple repositories?"
documentation: "https://docs.github.com/en/actions/using-workflows/creating-starter-workflows-for-your-organization"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> By copying the workflow file to each repository
- <input type="checkbox" disabled> By using workflow templates
- <input type="checkbox" disabled> By creating a reusable action
- <input type="checkbox" disabled> By defining the workflow in a central repository

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

- [x] By using workflow templates
> Organization workflow templates live in the organization's `.github` repository under `workflow-templates/`. When someone clicks "New workflow" in a repo, GitHub can show your template as a starting point with prefilled YAML. A `properties.json` file alongside the template can set display name and categories. This spreads a standard CI pattern across many repositories without copying files manually into each repo.

- [x] By defining the workflow in a central repository
> Reusable workflows let a central repository expose `workflow_call` entry points that other repos invoke with `uses: org/platform-repo/.github/workflows/ci.yml@main`. Callers pass inputs and secrets explicitly, so one canonical pipeline serves dozens of services. That differs from only sharing a template once at repo creation—central definitions stay the single source of truth as requirements evolve.
