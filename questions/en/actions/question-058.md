---
question: "When using GitHub Actions to access resources in one of the cloud providers (such as AWS, Azure or GCP) the safest and recommended way to authenticate is"
documentation: "https://docs.github.com/en/actions/deployment/security-hardening-your-deployments/about-security-hardening-with-openid-connect"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Using OIDC
- <input type="checkbox" disabled> Using Vault
- <input type="checkbox" disabled> Storing access keys in `secrets`
- <input type="checkbox" disabled> Storing access keys in `variables`

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

- [x] Using OIDC
> OpenID Connect (OIDC) lets the workflow exchange a short-lived token with AWS, Azure, or GCP without storing long-lived access keys in GitHub secrets. You configure a trust relationship (audience, subject claims) in the cloud and use `permissions: id-token: write` plus the provider's login action—for example `aws-actions/configure-aws-credentials` with `role-to-assume`. GitHub's security hardening guide recommends OIDC over static `AWS_ACCESS_KEY_ID` secrets in repositories.
