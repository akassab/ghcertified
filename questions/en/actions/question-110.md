---
question: "Dave is creating a templated workflow for his organization. Where must Dave store the workflow files and associated metadata files for the templated workflow?"
documentation: "https://docs.github.com/en/actions/using-workflows/creating-starter-workflows-for-your-organization"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> inside a directory named `workflow-templates` within a repository named `.github`
- <input type="checkbox" disabled> inside a directory named `workflow-templates` within the current repository
- <input type="checkbox" disabled> inside a directory named `.github/org-templates`
- <input type="checkbox" disabled> inside a directory named `.github/workflow-templates`

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

- [x] inside a directory named `workflow-templates` within a repository named `.github`
> **Simple:** Org templates go in the org's `.github` repo under `workflow-templates/`, with optional `properties.json` metadata.
>
> **Detailed:** Dave must use the organization's dedicated **`.github` repository**, not each member repo's tree:
>
> ```
> my-org/.github/
>   workflow-templates/
>     deploy-starter.yml
>     deploy-starter.properties.json
> ```
>
> `properties.json` beside the YAML sets the name, description, and categories in **Actions → New workflow**. Member repositories see these starters in the template picker. Storing files only in `my-service/.github/workflow-templates/` does **not** publish an organization-wide template—centralize in `my-org/.github` so every repo in the org gets the same starting point.
