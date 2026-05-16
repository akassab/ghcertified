---
question: "Which is true about `Starter Workflows` ?"
documentation: "https://docs.github.com/en/actions/using-workflows/creating-starter-workflows-for-your-organization"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> They allow users to leverage ready-to-use (or requiring minimal changes) workflow templates
- <input type="checkbox" disabled> GitHub provides and maintains starter workflows for different categories, languages and tooling
- <input type="checkbox" disabled> Your organization can create custom starter workflows for users in your organization
- <input type="checkbox" disabled> Starter workflows cannot call reusable workflows
- <input type="checkbox" disabled> Starter workflows are a paid GitHub feature
- <input type="checkbox" disabled> Starter workflows are provided ready-to-use and cannot be modified or enhanced

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

- [x] They allow users to leverage ready-to-use (or requiring minimal changes) workflow templates
> Starter workflows appear in the **Actions → New workflow** UI so users pick a vetted template instead of an empty `.yml`. A Node project might start from "Node.js CI" with test and lint jobs already sketched. Teams adopt org or GitHub patterns with minimal edits—starter workflows are not a paid-only feature and they can be modified after selection.

- [x] GitHub provides and maintains starter workflows for different categories, languages and tooling
> GitHub publishes maintained templates (CI, deploy, labeler, CodeQL, etc.) for common languages and ecosystems. They are updated on GitHub's side and surfaced in the workflow picker by category. Starter workflows are templates for new workflow files; they are not locked "ready-only" and can call reusable workflows like any other workflow once created.

- [x] Your organization can create custom starter workflows for users in your organization
> Organizations can add private starter workflows in a `.github` repo under `.github/workflow-templates/` with a `metadata.json` beside each template. Members in the org then see those pipelines when creating workflows—useful for standardizing deploy or security scanning. That is separate from GitHub's public catalog but uses the same "pick a template" experience.
