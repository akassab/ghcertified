---
question: "以下の例のジョブ内でマトリックス内の変数の現在の値にどのようにアクセスできますか？"
documentation: "https://docs.github.com/en/actions/using-jobs/using-a-matrix-for-your-jobs#using-a-matrix-strategy"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

```yaml
jobs:
    example_matrix:
        strategy:
            matrix:
                version: [10, 12, 14]
                os: [ubuntu-latest, windows-latest]
```
- <input type="checkbox" disabled> `matrix.version` や `matrix.os` のような構文で `matrix` コンテキストを通じて変数を参照する
- <input type="checkbox" disabled> `matrix.property` 構文を使用する
- <input type="checkbox" disabled> ジョブ構成内で `context` キーワードを使用する
- <input type="checkbox" disabled> `version` や `os` の構文を使用して直接変数にアクセスする

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
    example_matrix:
        strategy:
            matrix:
                version: [10, 12, 14]
                os: [ubuntu-latest, windows-latest]
```
- [x] `matrix.version` や `matrix.os` のような構文で `matrix` コンテキストを通じて変数を参照する
- [ ] `matrix.property` 構文を使用する
- [ ] ジョブ構成内で `context` キーワードを使用する
- [ ] `version` や `os` の構文を使用して直接変数にアクセスする
