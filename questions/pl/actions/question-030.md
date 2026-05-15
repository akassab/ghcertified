---
question: "Kiedy uruchomi się job3?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-not-requiring-successful-dependent-jobs"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    if: ${{ always() }}
    needs: [job1, job2]
```
- <input type="checkbox" disabled> job3 uruchomi się po zakończeniu job1 i job2, niezależnie od tego, czy zakończyły się sukcesem
- <input type="checkbox" disabled> Nie możesz używać `if: ${{ always() }}` razem z `needs`. Workflow zakończy się błędem podczas uruchamiania.
- <input type="checkbox" disabled> job3 uruchomi się po pomyślnym zakończeniu job1 i job2
- <input type="checkbox" disabled> job3 uruchomi się po tym, jak zarówno job1, jak i job2 zakończą się błędem

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

```yaml
jobs:
  job1:
  job2:
    needs: job1
  job3:
    if: ${{ always() }}
    needs: [job1, job2]
```
- [x] job3 uruchomi się po zakończeniu job1 i job2, niezależnie od tego, czy zakończyły się sukcesem
- [ ] Nie możesz używać `if: ${{ always() }}` razem z `needs`. Workflow zakończy się błędem podczas uruchamiania.
- [ ] job3 uruchomi się po pomyślnym zakończeniu job1 i job2
- [ ] job3 uruchomi się po tym, jak zarówno job1, jak i job2 zakończą się błędem
