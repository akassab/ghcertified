---
question: "コミットまたはプルリクエストを作成する際に、次のワークフローの実行をスキップするにはどうすればよいですか？"
documentation: "https://docs.github.com/en/actions/managing-workflow-runs/skipping-workflow-runs"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

```yaml
name: Build
on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    name: Extract artifact version
...
```

- <input type="checkbox" disabled> コミットメッセージまたはプルリクエストのタイトルに以下のいずれかのキーワードを含めることでスキップ可能
```yaml
[skip ci]
[ci skip]
[no ci]
[skip actions]
[actions skip]
```

- <input type="checkbox" disabled> コミットメッセージに `SKIP_WORKFLOW` を含める
- <input type="checkbox" disabled> 上記のワークフローは、すべての push や pull request イベントで必ず実行される

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
name: Build
on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    name: Extract artifact version
...
```

- [x] コミットメッセージまたはプルリクエストのタイトルに以下のいずれかのキーワードを含めることでスキップ可能
```yaml
[skip ci]
[ci skip]
[no ci]
[skip actions]
[actions skip]
```

- [ ] コミットメッセージに `SKIP_WORKFLOW` を含める
- [ ] 上記のワークフローは、すべての push や pull request イベントで必ず実行される
