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
> **Simple:** On job B, set `needs: jobA` so B waits until A finishes successfully.
>
> **Detailed:** Dependencies are declared on the **dependent** job:
>
> ```yaml
> jobs:
>   build:
>     runs-on: ubuntu-latest
>     steps:
>       - run: npm run build
>   deploy:
>     needs: build
>     runs-on: ubuntu-latest
>     steps:
>       - run: npm run deploy
> ```
>
> `deploy` (job B) lists `build` (job A). There is no `requires:` keyword. Misconception: adding `waits-for: deploy` on `build`—only `needs` on the downstream job is valid. Multiple prerequisites: `needs: [build, test]`.
