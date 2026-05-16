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
> **Simple:** A machine you deploy and manage that runs GitHub Actions jobs when `runs-on` labels match.
>
> **Detailed:** You install the GitHub Actions runner agent on your own server, VM, or device. When a workflow job's `runs-on` matches the runner's labels—for example `runs-on: [self-hosted, linux]`—GitHub queues that job to your machine instead of a GitHub-hosted runner.
>
> The runner executes the same steps as cloud runners: `actions/checkout`, shell `run` commands, and `uses:` actions. You control the OS image, installed software, and network access, which is useful for private APIs, custom hardware, or compliance requirements.
>
> ```yaml
> jobs:
>   deploy:
>     runs-on: [self-hosted, linux, x64]
>     steps:
>       - uses: actions/checkout@v4
>       - run: ./deploy-to-internal-network.sh
> ```
>
> A self-hosted runner is **not** a code-upload endpoint, an automatic workload factory, or a pull request management service—it only executes workflow jobs you assign via label matching.
