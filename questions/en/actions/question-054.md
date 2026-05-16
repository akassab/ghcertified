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
> Every action must ship an `action.yml` (or `.yaml`) at the root of the action path. That file defines `name`, `description`, `inputs`, `outputs`, and whether the action is `docker`, `node`, or `composite`—GitHub reads it to run and display the action.
