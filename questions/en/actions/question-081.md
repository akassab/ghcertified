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
> **Simple:** Store starter YAML in the org's `.github` repo under `workflow-templates/` so "New workflow" offers a prefilled template.
>
> **Detailed:** Organization workflow templates live in a dedicated `.github` repository at the org level, in `workflow-templates/`. When a developer clicks **Actions → New workflow**, GitHub lists your templates with optional metadata from `properties.json` (name, description, categories).
>
> ```
> org-name/.github/
>   workflow-templates/
>     ci-starter.yml
>     ci-starter.properties.json
> ```
>
> Choosing a template copies the YAML into the target repo once at creation time. That spreads a standard CI pattern without manually pasting files into dozens of repositories—but each repo still owns its copy after that.

- [x] By defining the workflow in a central repository
> **Simple:** Define a reusable workflow with `on: workflow_call` in a central repo; other repos invoke it with `uses:`.
>
> **Detailed:** A **reusable workflow** is a workflow file that declares `on: workflow_call` and exposes `inputs` and `secrets`. Consumer repositories call it from a job instead of duplicating YAML:
>
> ```yaml
> # In service-repo/.github/workflows/deploy.yml
> jobs:
>   call-platform-ci:
>     uses: my-org/platform-pipelines/.github/workflows/ci.yml@main
>     with:
>       node-version: '20'
>     secrets: inherit
> ```
>
> Every run executes the **current** definition in the central repo, so security and build policy updates propagate without editing each service repo. That differs from templates, which copy YAML once at repo setup—reusable workflows stay the single source of truth as requirements evolve.
