---
question: "Fill in the blank: When using self-hosted runners, the tool cache ___"
documentation: "https://docs.github.com/en/enterprise-server/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/setting-up-the-tool-cache-on-self-hosted-runners-without-internet-access"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> starts off empty and must be populated in order to save tools between runs
- <input type="checkbox" disabled> starts off the same as GitHub-hosted runners in that it is pre-populated with certain tools
- <input type="checkbox" disabled> starts with the same tools GitHub-hosted runners do, as well as a selected assortment of custom tools to enhance self-hosted runner management
- <input type="checkbox" disabled> cannot be populated

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

- [x] starts off empty and must be populated in order to save tools between runs
> On self-hosted runners, the tools cache directory starts **empty** and must be populated over time. When a job runs `actions/setup-node` or `actions/setup-python`, downloaded runtimes are stored there so later jobs on the same runner can reuse them instead of downloading again. Without that cache, every run repeats full tool downloads, which slows CI on self-hosted machines compared to GitHub-hosted runners that already ship with common toolchains.
