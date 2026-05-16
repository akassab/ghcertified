---
question: "When creating a custom GitHub Action you have to store the source code in `.github/workflows` directory"
documentation: "https://docs.github.com/en/actions/creating-actions/about-custom-actions#choosing-a-location-for-your-action"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> False
- <input type="checkbox" disabled> True
- <input type="checkbox" disabled> Only if the action is reusable
- <input type="checkbox" disabled> Only for Docker container actions

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

- [x] False
> **Simple:** False—custom actions live with `action.yml` in their own path or repo, not in `.github/workflows/`.
>
> **Detailed:** **Workflows** orchestrate jobs under `.github/workflows/*.yml`. **Actions** are reusable units with `action.yml` at the action root—for example:
>
> ```
> .github/actions/my-action/action.yml
> ```
>
> Reference them with:
>
> ```yaml
> - uses: ./.github/actions/my-action
> # or
> - uses: org/repo/path@v1
> ```
>
> Putting logic only in a workflow file without `action.yml` is not a publishable action others can `uses:`.
