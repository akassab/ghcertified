---
question: "Which of these is not a valid event that could trigger a workflow?"
documentation: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#about-events-that-trigger-workflows"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Cloning the repository
- <input type="checkbox" disabled> Committing a file to master branch
- <input type="checkbox" disabled> A branch is created
- <input type="checkbox" disabled> Adding a label to a pull request

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

- [x] Cloning the repository
> Workflows run in response to **GitHub events** recorded on the platform—`push`, `pull_request`, `issues`, `schedule`, and others listed in the docs. Running `git clone https://github.com/org/repo.git` on your laptop does not notify GitHub, so no workflow runs. By contrast, `git push origin main` creates a `push` event, and adding a label via the UI fires `pull_request` label activity that can match `on: pull_request: types: [labeled]`.
