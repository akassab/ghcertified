---
question: "Jakie zakresy są zdefiniowane dla niestandardowych zmiennych w workflow?"
documentation: "https://docs.github.com/en/actions/learn-github-actions/variables#defining-environment-variables-for-a-single-workflow"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Cały workflow, używając `env` na najwyższym poziomie pliku workflow
- <input type="checkbox" disabled> Zawartość zadania w workflow, używając `jobs.<job_id>.env`
- <input type="checkbox" disabled> Konkretnego kroku w zadaniu, używając `jobs.<job_id>.steps[*].env`
- <input type="checkbox" disabled> Wszystkie zadania w workflow, używając `jobs.env`
- <input type="checkbox" disabled> Cały workflow, używając `custom.env` na najwyższym poziomie pliku workflow
- <input type="checkbox" disabled> Konkretnego środowiska w repository, używając `environment.<environment_id>.env` na najwyższym poziomie pliku workflow

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

- [x] Cały workflow, używając `env` na najwyższym poziomie pliku workflow
- [x] Zawartość zadania w workflow, używając `jobs.<job_id>.env`
- [x] Konkretnego kroku w zadaniu, używając `jobs.<job_id>.steps[*].env`
- [ ] Wszystkie zadania w workflow, używając `jobs.env`
- [ ] Cały workflow, używając `custom.env` na najwyższym poziomie pliku workflow
- [ ] Konkretnego środowiska w repository, używając `environment.<environment_id>.env` na najwyższym poziomie pliku workflow
