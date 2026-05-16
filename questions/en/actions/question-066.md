---
question: "How can you validate that your GitHub self-hosted-runner can access all required GitHub services?"
documentation: "https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/monitoring-and-troubleshooting-self-hosted-runners#checking-self-hosted-runner-network-connectivity"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Using a GitHub provided script on the runner machine
- <input type="checkbox" disabled> By trying to access the runner machine by `ssh` to validate the network connectivity
- <input type="checkbox" disabled> By using the predefined GitHub Actions workflow `network-connectivity.yml`
- <input type="checkbox" disabled> GitHub will validate the network connectivity automatically when the runner application is installed on the runner machine

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

- [x] Using a GitHub provided script on the runner machine
> **Simple:** Run GitHub's documented connectivity check script on the runner host to verify it can reach required GitHub endpoints.
>
> **Detailed:** GitHub documents **connectivity check scripts** you run on the runner machine after install or network changes. They verify outbound HTTPS to required endpoints (API, blob storage, etc.). Installing the runner service does **not** automatically prove firewall/proxy reachability.
>
> **SSH** validates OS access, not GitHub service reachability. There is no built-in **`network-connectivity.yml`** starter workflow for this—use the script on the host.
