---
question: "このワークフローは、以下の条件を満たすすべてのPull Requestで実行されます:"
documentation: "https://docs.github.com/en/actions/using-workflows/triggering-a-workflow#example-including-and-excluding-branches"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

```yaml
on:
  pull_request:
    branches:
      - 'release/**'
      - '!release/**-alpha'
```
- <input type="checkbox" disabled> 対象ブランチ名が `release` で始まり、`-alpha` で終わらない
- <input type="checkbox" disabled> 対象ブランチ名が `release` で始まる
- <input type="checkbox" disabled> ソースブランチ名が `release` で始まり、`-alpha` で終わらない
- <input type="checkbox" disabled> ソースブランチ名が `release` で始まる

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
on:
  pull_request:
    branches:
      - 'release/**'
      - '!release/**-alpha'
```
- [x] 対象ブランチ名が `release` で始まり、`-alpha` で終わらない
- [ ] 対象ブランチ名が `release` で始まる
- [ ] ソースブランチ名が `release` で始まり、`-alpha` で終わらない
- [ ] ソースブランチ名が `release` で始まる
