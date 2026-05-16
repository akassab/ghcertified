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
> **Simple:** Use `types:` under an event to run only on specific activities (opened, labeled, published, etc.).
>
> **Detailed:** Many events have sub-activities:
>
> ```yaml
> on:
>   pull_request:
>     types: [opened, synchronize, reopened]
>   issues:
>     types: [opened, labeled]
>   release:
>     types: [published]
> ```
>
> Without `types`, GitHub uses defaults for that event (not "every possible subtype" for all events). A label-only change on a PR might not match if you omitted `labeled` from `types`. Misconception: `types` filters branches or paths—that is `branches` / `paths`; **activity types** are the webhook action names (`opened`, `closed`, …).
