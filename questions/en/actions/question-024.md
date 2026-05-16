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
> Many webhook events (for example `issues`, `pull_request`, `release`) emit multiple activity types. The `types` array under `on.<event>` limits which of those activities actually start your workflow, so you do not run on every sub-event.
