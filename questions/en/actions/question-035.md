---
question: "To prevent a job from failure when one of the steps fails you can include:"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> `continue-on-error` flag in the failing step
```yaml
steps:
    - uses: my-org/failing-action@v1
      continue-on-error: true
```
- <input type="checkbox" disabled> `ignore-error` flag in the failing step
```yaml
steps:
    - uses: my-org/failing-action@v1
      ignore-error: true
```
- <input type="checkbox" disabled> `failure()` conditional in the failing step
```yaml
steps:
    - uses: my-org/failing-action@v1
      if: failure()
```
- <input type="checkbox" disabled> `always()` conditional in the failing step
```yaml
steps:
    - uses: my-org/failing-action@v1
      if: always()
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

- [x] `continue-on-error` flag in the failing step
```yaml
steps:
    - uses: my-org/failing-action@v1
      continue-on-error: true
```
- [ ] `ignore-error` flag in the failing step
```yaml
steps:
    - uses: my-org/failing-action@v1
      ignore-error: true
```
- [ ] `failure()` conditional in the failing step
```yaml
steps:
    - uses: my-org/failing-action@v1
      if: failure()
```
- [ ] `always()` conditional in the failing step
```yaml
steps:
    - uses: my-org/failing-action@v1
      if: always()
```
