---
question: "What are `activity types` of an event used for ?"
documentation: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#about-events-that-trigger-workflows"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Limiting workflow runs to specific activity types using the `types` filter
- <input type="checkbox" disabled> Checking if the activity comes from an user or a bot
- <input type="checkbox" disabled> Reacting to new activity on a repository (e.g new contributor)

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

- [x] Limiting workflow runs to specific activity types using the `types` filter
> Many webhook events (`issues`, `pull_request`, `release`, etc.) emit multiple **activity types** (opened, closed, labeled, …). The `types` array under `on.<event>` limits which activities start your workflow—for example `on: pull_request: types: [opened, synchronize]` ignores label-only updates.
