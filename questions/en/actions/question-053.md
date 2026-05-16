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
> Custom actions live in their own repository or folder with an `action.yml` at the root of the action path—not inside `.github/workflows/`. Workflow files belong under `.github/workflows/*.yml` and orchestrate jobs; actions are reusable units referenced with `uses: ./.github/actions/my-action` or `uses: org/repo/path@v1`. Putting an action definition only in a workflow file without `action.yml` would not be a publishable action others can `uses:`.
