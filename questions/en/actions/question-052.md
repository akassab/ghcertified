---
question: "Is this statement true? `Docker container actions are usually slower than JavaScript actions`"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> True
- <input type="checkbox" disabled> False

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

- [x] True
> Docker container actions must pull or build an image before the action runs, which adds startup latency compared to JavaScript actions that execute directly on the runner's Node runtime. A small `node20` action that sets an output can start in seconds; a container action may wait on `docker pull` every cold run. For quick, frequent steps (labeling PRs, parsing JSON), JavaScript actions are usually faster—Docker fits when you need a specific OS/toolchain inside the image.
