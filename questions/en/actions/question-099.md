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
> **Simple:** Secrets are capped at 48 KB; encrypt large blobs, commit ciphertext, and store only the decryption key in secrets.
>
> **Detailed:** Each secret value in GitHub cannot exceed **48 KB**. For larger sensitive files (cert bundles, license files), GitHub recommends encrypting offline and committing the encrypted artifact:
>
> ```yaml
> steps:
>   - run: |
>       openssl enc -d -aes-256-cbc -in secrets.enc -out secrets.bin \
>         -pass pass:${{ secrets.DECRYPT_PASSPHRASE }}
> ```
>
> The repo holds only ciphertext; `${{ secrets.DECRYPT_PASSPHRASE }}` supplies the key at runtime. That keeps bulky material out of the secret store while avoiding plaintext secrets in git history. Rotate the passphrase secret if the encrypted file is replaced.
