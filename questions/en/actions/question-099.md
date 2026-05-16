---
question: "What is the recommended approach for storing secrets larger than 48 KB?"
documentation: "https://docs.github.com/en/actions/security-guides/using-secrets-in-github-actions#limits-for-secrets"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> avoid storing large secrets entirely to ensure security
- <input type="checkbox" disabled> secrets larger than 48 KB cannot be stored
- <input type="checkbox" disabled> encrypt and store secrets in the repository but keep the decryption passphrase as a secret
- <input type="checkbox" disabled> store large secrets directly as repository secrets to avoid limitations

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

- [x] encrypt and store secrets in the repository but keep the decryption passphrase as a secret
> Individual secrets are limited to 48 KB. For larger sensitive data, GitHub recommends encrypting the payload, committing the ciphertext, and storing only the decryption key as a secret—not storing huge blobs directly as secrets or avoiding secrets entirely.
