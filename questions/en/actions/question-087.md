---
question: "How can you cache dependencies to speed up workflow execution?"
documentation: "https://docs.github.com/en/enterprise-cloud@latest/actions/using-workflows/caching-dependencies-to-speed-up-workflows#about-caching-workflow-dependencies"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Using the cache keyword
- <input type="checkbox" disabled> Using the actions/cache action
- <input type="checkbox" disabled> By storing them in the repository
- <input type="checkbox" disabled> By using the store keyword

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

- [x] Using the actions/cache action
> GitHub Actions does not provide a `cache` or `store` keyword in workflow YAML. You cache dependencies by using the `actions/cache` action (or cache support on setup actions) to save and restore directories such as package manager caches between workflow runs.
