---
question: "In a GitHub Actions workflow, how do you specify a specific version of Node.js to use in a job?"
documentation: "https://docs.github.com/en/actions/automating-builds-and-tests/building-and-testing-nodejs#specifying-the-nodejs-version"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> 
```yaml
uses: actions/setup-node@v4
with:
  node-version: 20
```
- <input type="checkbox" disabled> 
```yaml
uses: actions/node-setup@v4
with:
  node-version: 20
```
- <input type="checkbox" disabled> 
```yaml
uses: setup-node@v4
with:
  version: 20
```
- <input type="checkbox" disabled> 
```yaml
uses: setup-node@v4
with:
  node: 20
```

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

- [x] 
```yaml
uses: actions/setup-node@v4
with:
  node-version: 20
```
> **Simple:** Use `actions/setup-node` with `with.node-version` (e.g. `20`) before `run` steps that need Node.
>
> **Detailed:** The official action installs Node and adds `node` and `npm` to `PATH` for later steps in the same job:
>
> ```yaml
> - uses: actions/setup-node@v4
>   with:
>     node-version: 20
> - run: node --version && npm ci
> ```
>
> The reference must include the `actions/` owner and a version tag (`@v4`); bare `setup-node` is invalid. Wrong inputs include `version` or `node`—the metadata defines **`node-version`**. You can also pass `'lts/*'`, a semver range, or read from `.nvmrc` depending on your setup action version.
