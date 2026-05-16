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
> **Simple:** Jobs without `needs` run in parallel; add `needs` when one job must wait for another.
>
> **Detailed:** A workflow is a graph of jobs. Independent jobs start together:
>
> ```yaml
> jobs:
>   lint:
>     runs-on: ubuntu-latest
>   test:
>     runs-on: ubuntu-latest
>   deploy:
>     needs: [lint, test]
> ```
>
> `lint` and `test` run concurrently on available runners; `deploy` waits for both. You are not limited to one job at a time unless you use `concurrency` or `max-parallel` to throttle.

- [x] Workflows can be triggered manually, by an event or run on a schedule
> **Simple:** Use `on:` for events, `workflow_dispatch` for manual runs, and `schedule` with cron for timed runs.
>
> **Detailed:** Triggers are declared at the top of the workflow:
>
> ```yaml
> on:
>   push:
>   pull_request:
>   workflow_dispatch:
>   schedule:
>     - cron: '0 2 * * *'
> ```
>
> Push/PR react to repository activity; **Run workflow** uses `workflow_dispatch`; nightly jobs use **schedule**. A workflow can list multiple trigger types.

- [x] Workflows have to be defined in the `.github/workflows` directory
> **Simple:** Workflow files must live under `.github/workflows/` as YAML (`.yml` or `.yaml`).
>
> **Detailed:** GitHub only loads workflow definitions from `.github/workflows/*.yml` (or `.yaml`). Paths like `ci/workflow.yml` at the repo root are ignored. **Actions** (reusable steps) can live in `action.yml` elsewhere or on Marketplace; **workflows** are repo automation entry points and stay in that directory. Misconception: storing workflow JSON or TOML—only YAML is supported for workflows.
