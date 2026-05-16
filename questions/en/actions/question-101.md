---
question: "How do you ensure that `Upload Failure test report` step is executed only if `Run Tests` step fails?"
documentation: "https://docs.github.com/en/actions/learn-github-actions/expressions#status-check-functions"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> 
```yaml
- name: Run Tests
  id: run-tests
  run: npm run test

- name: Upload Failure test report
  if: failure() && steps.run-tests.outcome == 'failure'
  uses: actions/upload-artifact@v3
  with:
    name: test-report
    path: test-reports.html
```

- <input type="checkbox" disabled> 
```yaml
- name: Run Tests
  id: run-tests
  run: npm run test

- name: Upload Failure test report
  if: always()
  uses: actions/upload-artifact@v3
  with:
    name: test-report
    path: test-reports.html
```

- <input type="checkbox" disabled> 
```yaml
- name: Run Tests
  id: run-tests
  run: npm run test

- name: Upload Failure test report
  if: steps.run-tests.outcome == 'failure'
  uses: actions/upload-artifact@v3
  with:
    name: test-report
    path: test-reports.html
```

- <input type="checkbox" disabled> 
```yaml
- name: Run Tests
  id: run-tests
  run: npm run test

- name: Upload Failure test report
  uses: actions/upload-artifact@v3
  with:
    name: test-report
    path: test-reports.html
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
- name: Run Tests
  id: run-tests
  run: npm run test

- name: Upload Failure test report
  if: failure() && steps.run-tests.outcome == 'failure'
  uses: actions/upload-artifact@v3
  with:
    name: test-report
    path: test-reports.html
```
> **Simple:** Give the test step an `id` and use `if: failure() && steps.<id>.outcome == 'failure'` on the upload step.
>
> **Detailed:** By default, steps after a failure are skipped. `failure()` is true when **any** earlier step in the job failed—which is too broad if you only want artifacts when **tests** failed:
>
> ```yaml
> - name: Run Tests
>   id: run-tests
>   run: npm run test
>
> - name: Upload Failure test report
>   if: failure() && steps.run-tests.outcome == 'failure'
>   uses: actions/upload-artifact@v3
>   with:
>     name: test-report
>     path: test-reports.html
> ```
>
> If an earlier setup step failed, `failure()` is true but `steps.run-tests.outcome` may be `skipped`, so the upload does not run. `outcome` for a step can be `success`, `failure`, `cancelled`, or `skipped`. Pair `failure()` with a step `id` when you need precise control over which failure triggers follow-up work.
