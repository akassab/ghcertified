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
> Steps run only when prior steps succeed unless you override with `if`. Using `if: failure() && steps.run-tests.outcome == 'failure'` limits the upload to the case where the test step failed, not a failure in an unrelated step. `${{ steps.run-tests.outcome }}` can be `success`, `failure`, `cancelled`, or `skipped`. Combine `failure()` with a step `id` when you need precise control over which failure triggers follow-up work.
