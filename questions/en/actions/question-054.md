---
question: "When creating custom GitHub Actions - in what file does all the action `metadata` have to be defined?"
documentation: "https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

Metadata examples: name, description, outputs or required inputs
- <input type="checkbox" disabled> In the `action.yml` or `action.yaml` file in the action repository
- <input type="checkbox" disabled> In the repository `README` file
- <input type="checkbox" disabled> It's edited in GitHub Marketplace UI when published for sharing
- <input type="checkbox" disabled> In the `action.yml` or `action.yaml` file in the action repository, but it is not required if the action is not meant to be shared and used by the public

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

Metadata examples: name, description, outputs or required inputs
- [x] In the `action.yml` or `action.yaml` file in the action repository
> **Simple:** All action metadata—name, inputs, outputs, and how it runs—belongs in `action.yml` (or `action.yaml`) at the action root.
>
> **Detailed:** Every action must ship **`action.yml`** at the root of the action path. GitHub reads it before running the action. It defines `name`, `description`, `inputs`, `outputs`, and `runs.using` (`node20`, `docker`, or `composite`):
>
> ```yaml
> name: My Action
> description: Does something useful
> inputs:
>   token:
>     required: true
> runs:
>   using: node20
>   main: dist/index.js
> ```
>
> Composite actions list bundled `steps:`; JavaScript actions point at `main`. README alone is not sufficient—the marketplace and `uses:` resolution depend on this manifest. Required for private actions too, not only public sharing.
