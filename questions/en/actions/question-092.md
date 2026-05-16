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
> Pin Node.js with the official `actions/setup-node` action and the `node-version` input. The action name must include the `actions/` owner prefix and a version tag; `setup-node` alone or inputs like `version` or `node` are not valid.
