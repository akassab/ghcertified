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
> Weekday-only schedules use `on.schedule` with cron expressions in UTC, such as `cron: '0 9 * * 1-5'` for 09:00 UTC Monday through Friday. There is no built-in `weekdays:` trigger type. A job-level `if` does not schedule runs—it only filters jobs after an event already fired. Put the cron under `schedule` so GitHub enqueues the workflow on the default branch.
