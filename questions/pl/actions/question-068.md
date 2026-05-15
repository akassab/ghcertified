---
question: "Aby uruchomić `step` tylko wtedy, gdy tajemnica `MY_SECRET` została ustawiona, możesz:"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-using-secrets"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Ustawić tajemnicę `MY_SECRET` jako zmienną środowiskową na poziomie zadania, a następnie odwołać się do tej zmiennej środowiskowej, aby warunkowo uruchomić krok
```yaml
my-job:
  runs-on: ubuntu-latest
  env:
    my_secret: ${{ secrets.MY_SECRET }}
  steps:
    - if: ${{ env.my_secret != '' }}
```
- <input type="checkbox" disabled> Tworząc następujący warunek na poziomie zadania
```yaml
my-job:
  runs-on: ubuntu-latest
  if: ${{ secrets.MY_SECRET == '' }}
```
- <input type="checkbox" disabled> Tworząc następujący warunek na poziomie kroku
```yaml
my-job:
  runs-on: ubuntu-latest
  steps:
    - if: ${{ secrets.MY_SECRET == '' }}
```
- <input type="checkbox" disabled> Tworząc następujący warunek na poziomie kroku
```yaml
my-job:
  runs-on: ubuntu-latest
  steps:
    - if: ${{ secrets.MY_SECRET }}
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

- [x] Ustawić tajemnicę `MY_SECRET` jako zmienną środowiskową na poziomie zadania, a następnie odwołać się do tej zmiennej środowiskowej, aby warunkowo uruchomić krok
```yaml
my-job:
  runs-on: ubuntu-latest
  env:
    my_secret: ${{ secrets.MY_SECRET }}
  steps:
    - if: ${{ env.my_secret != '' }}
```
- [ ] Tworząc następujący warunek na poziomie zadania
```yaml
my-job:
  runs-on: ubuntu-latest
  if: ${{ secrets.MY_SECRET == '' }}
```
> secrets nie mogą być bezpośrednio odwoływane w warunkach if:
- [ ] Tworząc następujący warunek na poziomie kroku
```yaml
my-job:
  runs-on: ubuntu-latest
  steps:
    - if: ${{ secrets.MY_SECRET == '' }}
```
> secrets nie mogą być bezpośrednio odwoływane w warunkach if:
- [ ] Tworząc następujący warunek na poziomie kroku
```yaml
my-job:
  runs-on: ubuntu-latest
  steps:
    - if: ${{ secrets.MY_SECRET }}
```
> secrets nie mogą być bezpośrednio odwoływane w warunkach if:
