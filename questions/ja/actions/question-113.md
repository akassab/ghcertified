---
question: "次のワークフロー構成が`octo/my-dev-repo`リポジトリに対してトリガーされた場合、正しいのはどれですか？"
documentation: "https://docs.github.com/en/actions/using-jobs/using-conditions-to-control-job-execution"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

```yaml
name: deploy-workflow
on: [push]
jobs:
    production-deploy:
        if: github.repository == 'octo/my-prod-repo'
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v4
            - uses: actions/setup-node@v4
              with:
                  node-version: '14'
            - run: npm install -g bats
```
- <input type="checkbox" disabled> `production-deploy`ジョブはスキップとしてマークされる
- <input type="checkbox" disabled> `production-deploy`ジョブはエラーになる
- <input type="checkbox" disabled> `production-deploy`ジョブは3つのステップを実行する
- <input type="checkbox" disabled> `production-deploy`ジョブは`node-version`が`14`の場合に実行される

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
name: deploy-workflow
on: [push]
jobs:
    production-deploy:
        if: github.repository == 'octo/my-prod-repo'
        runs-on: ubuntu-latest
        steps:
            - uses: actions/checkout@v4
            - uses: actions/setup-node@v4
              with:
                  node-version: '14'
            - run: npm install -g bats
```
- [x] `production-deploy`ジョブはスキップとしてマークされる
- [ ] `production-deploy`ジョブはエラーになる
- [ ] `production-deploy`ジョブは3つのステップを実行する
- [ ] `production-deploy`ジョブは`node-version`が`14`の場合に実行される
