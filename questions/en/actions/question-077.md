---
question: "What is a self-hosted runner?"
documentation: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/about-self-hosted-runners"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> A self-hosted runner is a system that you deploy and manage to execute jobs from GitHub Actions on GitHub.com
- <input type="checkbox" disabled> A self-hosted runner is a system to upload code to a private server
- <input type="checkbox" disabled> A self-hosted runner is a system to be able to create workloads automatically
- <input type="checkbox" disabled> A self-hosted runner is a system to manage pull requests from users of the organization

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

- [x] A self-hosted runner is a system that you deploy and manage to execute jobs from GitHub Actions on GitHub.com
> You install the runner agent on your own machine or VM, and GitHub queues jobs when a workflow's `runs-on` label matches the runner's labels (for example `self-hosted` and `linux`). Self-hosted runners execute the same job steps as GitHub-hosted runners—checking out code, running `run` scripts, and invoking actions—but you control the OS image, installed tools, and network access. Teams often use them to reach private resources on an internal network or to run jobs that need specialized hardware. Unlike the distractors, a self-hosted runner is not a code upload endpoint or a pull request management service.
