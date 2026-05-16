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
> **Simple:** You can register self-hosted runners at **repository** scope in Settings → Actions → Runners.
>
> **Detailed:** Repository runners are tied to one repo. After installing the agent and registering it under **Settings → Actions → Runners**, workflows in that repository can target it when labels match:
>
> ```yaml
> runs-on: [self-hosted, linux]
> ```
>
> This is the **narrowest** scope—useful when only one project needs a private network or special hardware. You do not register runners on individual workflow files or steps; registration is at the repo (or higher) level, and YAML only references labels.
- [x] You can add a self-hosted runner to an organization
> **Simple:** Organization runners can be shared across repos in the org via runner groups and access rules.
>
> **Detailed:** Org administrators register runners at the organization level and assign them to **runner groups**. Repositories in the org can use those runners when group policy allows:
>
> ```yaml
> runs-on: [self-hosted, gpu]
> ```
>
> A platform team might operate one GPU pool that dozens of microservices reference with the same labels. One physical machine is registered once; many repos queue jobs to it according to org settings—not one registration per workflow YAML file.
- [x] You can add a self-hosted runner to an enterprise
> **Simple:** Enterprise admins can register runners usable across the enterprise—the broadest self-hosted scope.
>
> **Detailed:** At **enterprise** scope, administrators deploy runners for many organizations under one GitHub Enterprise account. The same runner agent binary is used at repo, org, and enterprise levels; what changes is **who may assign jobs** and how policies are enforced.
>
> A large company might run a single hardened image fleet at enterprise scope while individual orgs only consume labeled capacity (`enterprise-linux`). Registration is still per machine; workflows in allowed repos reference labels with `runs-on`—never a separate "enterprise workflow" registration step.
