---
question: "Workflows are defined in which format"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> yaml
- <input type="checkbox" disabled> toml
- <input type="checkbox" disabled> json
- <input type="checkbox" disabled> xml

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

- [x] yaml
> **Simple:** Workflows are YAML files (`.yml` or `.yaml`) in `.github/workflows/`—not JSON, TOML, or XML.
>
> **Detailed:** Example path: `.github/workflows/ci.yml`. GitHub parses workflow syntax as YAML with keys like `on`, `jobs`, `steps`, and `${{ }}` expressions. Composite actions use their own `action.yml` (also YAML), but the **workflow** definition format for this question is YAML only. Misconception: using `workflow.json` or Terraform to define the workflow file itself—those tools may generate YAML, but Actions expects YAML workflow files in the workflows directory.
