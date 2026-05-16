---
question: "ジョブ `production-deploy` が `my-org/my-repo` リポジトリでのみトリガーされるようにするための `jobs.job_id.if` 条件式は何ですか？"
documentation: "https://docs.github.com/en/actions/learn-github-actions/contexts#github-context"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

```yaml
jobs:
  production-deploy:  
    if: <CONDITION>
    runs-on: ubuntu-latest
    steps:
      ...
```
- <input type="checkbox" disabled> `if: github.repository == 'my-org/my-repo'`
- <input type="checkbox" disabled> `if: ${{ github.repository == 'my-org/my-repo' }}`
- <input type="checkbox" disabled> `if: ${{ github.organization == 'my-org' && github.repository == 'my-repo' }}`
- <input type="checkbox" disabled> `if: ${{ github.org == 'my-org' && github.repository == 'my-repo' }}`

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
  production-deploy:  
    if: <CONDITION>
    runs-on: ubuntu-latest
    steps:
      ...
```
- [x] `if: github.repository == 'my-org/my-repo'`
- [x] `if: ${{ github.repository == 'my-org/my-repo' }}`
- [ ] `if: ${{ github.organization == 'my-org' && github.repository == 'my-repo' }}`
> https://docs.github.com/en/actions/learn-github-actions/contexts#github-context
- [ ] `if: ${{ github.org == 'my-org' && github.repository == 'my-repo' }}`
> https://docs.github.com/en/actions/learn-github-actions/contexts#github-context
