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
> Individual GitHub secrets are limited to 48 KB. For larger sensitive blobs, GitHub recommends encrypting the data (for example with OpenSSL), storing the ciphertext in the repo, and keeping only the decryption passphrase in secrets. At runtime a workflow step decrypts the file using `${{ secrets.DECRYPT_KEY }}`. That pattern avoids oversized secret values while keeping key material out of plain text in the repository.
