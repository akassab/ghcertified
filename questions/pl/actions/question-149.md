---
question: "Co powoduje zapis do `GITHUB_STEP_SUMMARY`?"
documentation: "https://docs.github.com/en/actions/reference/workflows-and-actions/workflow-commands#adding-a-job-summary"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

```yaml
- name: "Write results of test suite"
  run: |
    echo "The results of the testing suite are:" >> $GITHUB_STEP_SUMMARY
```
- <input type="checkbox" disabled> Dodaje tę linię do podsumowania zadania
- <input type="checkbox" disabled> Dodaje tę linię jako podtytuł do nazwy kroku w interfejsie GitHub Actions
- <input type="checkbox" disabled> Dodaje tę linię do wbudowanego artefaktu `github-steps-summary.md`
- <input type="checkbox" disabled> Wyświetla tę linię jako komunikat debugowania na poziomie kroku

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
- name: "Write results of test suite"
  run: |
    echo "The results of the testing suite are:" >> $GITHUB_STEP_SUMMARY
```
- [x] Dodaje tę linię do podsumowania zadania
> Zapis do `GITHUB_STEP_SUMMARY` dodaje do podsumowania zadania, które można wykorzystać jako uproszczoną wersję dziennika przebiegu workflow.
- [ ] Dodaje tę linię jako podtytuł do nazwy kroku w interfejsie GitHub Actions
- [ ] Dodaje tę linię do wbudowanego artefaktu `github-steps-summary.md`
- [ ] Wyświetla tę linię jako komunikat debugowania na poziomie kroku
> Aby wyświetlić komunikat debugowania w kroku, należy użyć składni `::debug::`. Zobacz sekcję "Setting a debug message" w podlinkowanej dokumentacji.
