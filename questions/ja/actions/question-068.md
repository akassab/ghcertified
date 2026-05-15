---
question: "シークレット `MY_SECRET` が設定されている場合にのみ `step` を実行するには、次のようにします:"
documentation: "https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions#example-using-secrets"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> シークレット `MY_SECRET` をジョブレベルの環境変数として設定し、その環境変数を参照してステップを条件付きで実行する
```yaml
my-job:
  runs-on: ubuntu-latest
  env:
    my_secret: ${{ secrets.MY_SECRET }}
  steps:
    - if: ${{ env.my_secret != '' }}
```
- <input type="checkbox" disabled> 以下の条件をジョブレベルで作成する
```yaml
my-job:
  runs-on: ubuntu-latest
  if: ${{ secrets.MY_SECRET == '' }}
```
- <input type="checkbox" disabled> 以下の条件をステップレベルで作成する
```yaml
my-job:
  runs-on: ubuntu-latest
  steps:
    - if: ${{ secrets.MY_SECRET == '' }}
```
- <input type="checkbox" disabled> 以下の条件をステップレベルで作成する
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

- [x] シークレット `MY_SECRET` をジョブレベルの環境変数として設定し、その環境変数を参照してステップを条件付きで実行する
```yaml
my-job:
  runs-on: ubuntu-latest
  env:
    my_secret: ${{ secrets.MY_SECRET }}
  steps:
    - if: ${{ env.my_secret != '' }}
```
- [ ] 以下の条件をジョブレベルで作成する
```yaml
my-job:
  runs-on: ubuntu-latest
  if: ${{ secrets.MY_SECRET == '' }}
```
> secrets は `if:` 条件内で直接参照することはできません
- [ ] 以下の条件をステップレベルで作成する
```yaml
my-job:
  runs-on: ubuntu-latest
  steps:
    - if: ${{ secrets.MY_SECRET == '' }}
```
> secrets は `if:` 条件内で直接参照することはできません
- [ ] 以下の条件をステップレベルで作成する
```yaml
my-job:
  runs-on: ubuntu-latest
  steps:
    - if: ${{ secrets.MY_SECRET }}
```
> secrets は `if:` 条件内で直接参照することはできません
