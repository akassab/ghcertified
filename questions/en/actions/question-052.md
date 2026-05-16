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
> **Simple:** True—Docker actions usually pay image pull/build cost before running, so JavaScript actions are typically faster for small, frequent steps.
>
> **Detailed:** **Docker container actions** must **pull or build** an image before the action runs—startup latency on every cold run. **JavaScript actions** execute directly on the runner's Node runtime (`node20`); a small action that sets an output can start in seconds.
>
> | Use case | Prefer |
> |----------|--------|
> | Label PRs, parse JSON | JavaScript |
> | Specific OS/toolchain in image | Docker |
>
> Docker fits when you need a fixed environment inside the container; JavaScript fits quick, frequent steps.
