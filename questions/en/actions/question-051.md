---
question: "What are the three types of Actions?"
documentation: "https://docs.github.com/en/actions/creating-actions/about-custom-actions#types-of-actions"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> `Docker container actions`, `JavaScript Actions`, `Composite Actions`
- <input type="checkbox" disabled> `Python Actions`, `JavaScript Actions`, `Custom Actions`
- <input type="checkbox" disabled> `Docker container Actions`, `JavaScript Actions`, `Custom Actions`
- <input type="checkbox" disabled> `Docker container actions`, `Java Actions`, `Composite Actions`

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

- [x] `Docker container actions`, `JavaScript Actions`, `Composite Actions`
> **Simple:** The three action types are Docker container, JavaScript (Node), and composite—declared in `action.yml` with `runs.using`.
>
> **Detailed:** Every custom action ships `action.yml` with one of:
>
> | Type | `runs.using` | Runs on |
> |------|----------------|---------|
> | **Docker** | `docker` | Container image |
> | **JavaScript** | `node20` (etc.) | Runner's Node runtime |
> | **Composite** | `composite` | Bundled `steps:` (shell/`uses`) |
>
> Example JavaScript action:
>
> ```yaml
> runs:
>   using: node20
>   main: dist/index.js
> ```
>
> There is no separate "Python action" or "Custom action" type—other languages usually ship via **Docker** or **composite** `run` steps.
