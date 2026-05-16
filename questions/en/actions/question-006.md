---
question: "Which is true about workflows?"
documentation: "https://docs.github.com/en/actions/using-workflows/about-workflows"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Workflows can run one or multiple jobs at a time
- <input type="checkbox" disabled> Workflows can be triggered manually, by an event or run on a schedule
- <input type="checkbox" disabled> Workflows have to be defined in the `.github/workflows` directory
- <input type="checkbox" disabled> Workflows can only be run on a schedule
- <input type="checkbox" disabled> Workflow can run only one job at a time
- <input type="checkbox" disabled> Workflows are written in any of `.yaml`, `.json` or `.toml` formats
- <input type="checkbox" disabled> Workflows can be shared in GitHub Marketplace

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

- [x] Workflows can run one or multiple jobs at a time
> Jobs without a `needs` dependency start in parallel on available runners—for example, `lint` and `test` can run together. Chain jobs with `needs: [build]` when one must wait for another.

- [x] Workflows can be triggered manually, by an event or run on a schedule
> The `on` key supports activity events (`push`, `pull_request`), manual `workflow_dispatch`, and `schedule` cron triggers. A nightly backup might use `schedule: cron: '0 2 * * *'`.

- [x] Workflows have to be defined in the `.github/workflows` directory
> GitHub only discovers workflow YAML under `.github/workflows/`. Files elsewhere are ignored. Workflows must be YAML (`.yml`/`.yaml`)—not JSON or TOML. Individual **actions** can be published to Marketplace; entire workflows stay in your repo.
