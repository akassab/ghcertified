---
question: "Which of the following statements are true about adding a self-hosted runner in GitHub Actions?"
documentation: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/adding-self-hosted-runners#adding-a-self-hosted-runner-to-a-repository"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> You can add a self-hosted runner to a repository
- <input type="checkbox" disabled> You can add a self-hosted runner to an organization
- <input type="checkbox" disabled> You can add a self-hosted runner to an enterprise
- <input type="checkbox" disabled> You can add a self-hosted runner to a workflow
- <input type="checkbox" disabled> You can add a self-hosted runner to a step

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

- [x] You can add a self-hosted runner to a repository
> Repository-level runners are registered in **Settings → Actions → Runners** and are available to workflows in that repo when `runs-on` matches their labels. This is the smallest scope—ideal when only one project needs access to private hardware or networks. Runners are not registered on individual workflows or steps.
- [x] You can add a self-hosted runner to an organization
> Organization-level runners can be shared across repositories in the org according to runner group and access settings. A platform team might maintain one pool labeled `gpu` that many services use. Registration still happens once per machine, not per workflow file.
- [x] You can add a self-hosted runner to an enterprise
> Enterprise administrators can register runners for use across the enterprise, the broadest scope for large organizations with centralized infrastructure. The same runner agent software is used at every level; only who can assign jobs to the runner changes with scope.
