---
question: "Praca o nazwie `job2` korzysta z artefaktów stworzonych w `job1`. Dlatego ważne jest, aby upewnić się, że `job1` kończy się zanim `job2` zacznie szukać artefaktów. Jak należy stworzyć tę zależność?"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#jobsjob_idneeds"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> utwórz tę zależność za pomocą słowa kluczowego `needs` w `job2`
- <input type="checkbox" disabled> ta zależność jest tworzona domyślnie podczas używania `actions/download-artifact` do pobierania artefaktów z `job1`
- <input type="checkbox" disabled> utwórz tę zależność, definiując `job2` po `job1` w definicji pliku `.yaml` workflow
- <input type="checkbox" disabled> utwórz tę zależność za pomocą słowa kluczowego `concurrency` w `job2`

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

- [x] utwórz tę zależność za pomocą słowa kluczowego `needs` w `job2`
- [ ] ta zależność jest tworzona domyślnie podczas używania `actions/download-artifact` do pobierania artefaktów z `job1`
- [ ] utwórz tę zależność, definiując `job2` po `job1` w definicji pliku `.yaml` workflow
- [ ] utwórz tę zależność za pomocą słowa kluczowego `concurrency` w `job2`
