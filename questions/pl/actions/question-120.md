---
question: "Jak wygląda poprawna składnia do określenia skryptu czyszczącego w akcji kontenerowej?"
documentation: "https://docs.github.com/en/actions/creating-actions/metadata-syntax-for-github-actions#runspost-entrypoint"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> 
```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  entrypoint: 'entrypoint.sh'
  post-entrypoint: 'cleanup.sh'
```

- <input type="checkbox" disabled> 
```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  entrypoint: 'entrypoint.sh'
  post: 'cleanup.sh'
```

- <input type="checkbox" disabled> 
```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  entrypoint: 'entrypoint.sh'
  after: 'cleanup.sh'
```

- <input type="checkbox" disabled> 
```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  entrypoint: 'entrypoint.sh'
  after-entrypoint: 'cleanup.sh'
```

- <input type="checkbox" disabled> 
```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  entrypoint: 'entrypoint.sh'
  cleanup: 'cleanup.sh'
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

- [x] 
```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  entrypoint: 'entrypoint.sh'
  post-entrypoint: 'cleanup.sh'
```

- [ ] 
```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  entrypoint: 'entrypoint.sh'
  post: 'cleanup.sh'
```

- [ ] 
```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  entrypoint: 'entrypoint.sh'
  after: 'cleanup.sh'
```

- [ ] 
```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  entrypoint: 'entrypoint.sh'
  after-entrypoint: 'cleanup.sh'
```

- [ ] 
```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
  entrypoint: 'entrypoint.sh'
  cleanup: 'cleanup.sh'
```
