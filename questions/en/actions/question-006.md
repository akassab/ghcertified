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
> Jobs without a `needs` dependency run in parallel. You can also chain jobs so some run only after others finish.

- [x] Workflows can be triggered manually, by an event or run on a schedule
> The `on` key supports activity events (like `push`), manual `workflow_dispatch`, and `schedule` cron triggers.

- [x] Workflows have to be defined in the `.github/workflows` directory
> GitHub only loads workflow files from `.github/workflows/` in the repository. They must be YAML — JSON and TOML are not supported for workflows. Individual **actions** (not entire workflows) can be published to GitHub Marketplace.
