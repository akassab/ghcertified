---
question: "Aby zapobiec awarii zadania, gdy jeden z kroków zawodzi, możesz użyć:"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idstepscontinue-on-error"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> flagi `continue-on-error` w zawodzącym kroku
```yaml
steps:
    - uses: my-org/failing-action@v1
      continue-on-error: true
```
- <input type="checkbox" disabled> flagi `ignore-error` w zawodzącym kroku
```yaml
steps:
    - uses: my-org/failing-action@v1
      ignore-error: true
```
- <input type="checkbox" disabled> warunku `failure()` w zawodzącym kroku
```yaml
steps:
    - uses: my-org/failing-action@v1
      if: failure()
```
- <input type="checkbox" disabled> warunku `always()` w zawodzącym kroku
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

- [x] flagi `continue-on-error` w zawodzącym kroku
```yaml
steps:
    - uses: my-org/failing-action@v1
      continue-on-error: true
```
- [ ] flagi `ignore-error` w zawodzącym kroku
```yaml
steps:
    - uses: my-org/failing-action@v1
      ignore-error: true
```
- [ ] warunku `failure()` w zawodzącym kroku
```yaml
steps:
    - uses: my-org/failing-action@v1
      if: failure()
```
- [ ] warunku `always()` w zawodzącym kroku
```yaml
steps:
    - uses: my-org/failing-action@v1
      if: always()
```
