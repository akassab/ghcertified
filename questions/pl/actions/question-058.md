---
question: "Podczas korzystania z GitHub Actions w celu uzyskania dostępu do zasobów jednego z dostawców chmury (takich jak AWS, Azure lub GCP) najbezpieczniejszym i zalecanym sposobem uwierzytelniania jest"
documentation: "https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Korzystanie z OIDC
- <input type="checkbox" disabled> Korzystanie z Vault
- <input type="checkbox" disabled> Przechowywanie kluczy dostępu w `secrets`
- <input type="checkbox" disabled> Przechowywanie kluczy dostępu w `variables`

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

- [x] Korzystanie z OIDC
- [ ] Korzystanie z Vault
- [ ] Przechowywanie kluczy dostępu w `secrets`
> Stosowanie długotrwałych kluczy dostępu nie jest zalecane ze względu na ryzyko wycieku danych lub ataków, takich jak [injection skryptów](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions#understanding-the-risk-of-script-injections)
- [ ] Przechowywanie kluczy dostępu w `variables`
> Wartości wrażliwe nie powinny być przechowywane w `variables`
