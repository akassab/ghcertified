---
question: "If job B requires job A to be finished you have to:"
documentation: "https://docs.github.com/en/actions/using-workflows/about-workflows#creating-dependent-jobs"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> use the `needs` keyword in job B to create this dependency
- <input type="checkbox" disabled> use the `needs` keyword in job A to create this dependency
- <input type="checkbox" disabled> use the `requires` keyword in job B to create this dependency
- <input type="checkbox" disabled> use the `requires` keyword in job A to create this dependency

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

- [x] use the `needs` keyword in job B to create this dependency
> Job B should list job A under `needs` so B waits for A to finish successfully—for example, `deploy` with `needs: build` runs only after `build` completes. The keyword is `needs`, not `requires`. You declare the dependency on the **downstream** job (`deploy`), not on the job that must finish first (`build`).
