---
question: "Czy w procesie z wieloma zadaniami, wszystkie uruchamiane na runnerach hostowanych przez GitHub, można zagwarantować, że wszystkie zadania będą uruchamiane na tej samej maszynie runnera?"
documentation: "https://docs.github.com/en/actions/using-jobs/choosing-the-runner-for-a-job#choosing-github-hosted-runners"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Nie
- <input type="checkbox" disabled> Tak  
- <input type="checkbox" disabled> Tylko jeśli są uruchamiane równolegle  
- <input type="checkbox" disabled> Tylko jeśli używają tego samego etykiety `runs-on`  

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

- [x] Nie
- [ ] Tak  
> Każde zadanie uruchamiane jest w świeżej instancji obrazu runnera określonego w `runs-on`
- [ ] Tylko jeśli są uruchamiane równolegle  
> Każde zadanie uruchamiane jest w świeżej instancji obrazu runnera określonego w `runs-on`
- [ ] Tylko jeśli używają tego samego etykiety `runs-on`  
> Każde zadanie uruchamiane jest w świeżej instancji obrazu runnera określonego w `runs-on`
