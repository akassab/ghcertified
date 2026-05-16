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
> GitHub Actions supports three action types declared in `action.yml`: **Docker** (`runs.using: docker`), **JavaScript** (`runs.using: node20`), and **composite** (`runs.using: composite` with bundled `steps`). Docker actions run inside an image; JavaScript actions run on the host runner's Node runtime; composite actions chain shell steps behind one `uses:` line. There is no separate platform type named "Python action" or "Custom action"—other languages usually ship via Docker or composite `run` steps.
