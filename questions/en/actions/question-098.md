---
question: "How can you specify the schedule of a GitHub actions workflow to run on weekdays only?"
documentation: "https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows#schedule"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> add a condition in the workflow YAML for weekdays
- <input type="checkbox" disabled> it is not possible in GitHub actions
- <input type="checkbox" disabled> use the on: schedule: weekdays event trigger
- <input type="checkbox" disabled> use the on: schedule: cron event trigger

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

- [x] use the on: schedule: cron event trigger
> **Simple:** Use `on.schedule` with a cron expression in UTC; weekday field `1-5` means Monday–Friday.
>
> **Detailed:** There is no `weekdays:` trigger. Restrict runs to weekdays with standard cron under `schedule`:
>
> ```yaml
> on:
>   schedule:
>     - cron: '0 9 * * 1-5'   # 09:00 UTC, Mon–Fri
> jobs:
>   weekday-report:
>     runs-on: ubuntu-latest
>     steps:
>       - run: ./generate-report.sh
> ```
>
> Cron uses **UTC** and runs against the default branch. A job-level `if: github.event.schedule == '...'` does **not** create scheduled runs—it only skips jobs after some other event already started the workflow. Put timing logic in `on.schedule` so GitHub enqueues the workflow on the intended cadence.
