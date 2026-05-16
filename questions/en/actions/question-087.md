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
> Workflow YAML has no built-in `cache:` keyword; you cache directories with the `actions/cache` action or with setup actions that support caching (such as `actions/setup-node` with `cache: npm`). You specify a `path` to store (for example `~/.npm`) and a `key` so later runs can restore dependencies and skip full downloads. A cache hit can cut minutes off install steps on pull requests. This speeds up workflows; it does not replace storing artifacts for deployment.
