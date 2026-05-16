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
> **Simple:** OIDC is the recommended way to authenticate to AWS, Azure, or GCP without storing long-lived access keys in GitHub secrets.
>
> **Detailed:** **OpenID Connect (OIDC)** lets the workflow exchange a **short-lived token** with the cloud provider. Configure a trust relationship (audience, subject claims) in AWS/Azure/GCP, then in the workflow:
>
> ```yaml
> permissions:
>   id-token: write
>   contents: read
> steps:
>   - uses: aws-actions/configure-aws-credentials@v4
>     with:
>       role-to-assume: arn:aws:iam::123456789012:role/my-github-role
>       aws-region: us-east-1
> ```
>
> GitHub's security hardening guide recommends OIDC over static `AWS_ACCESS_KEY_ID` in secrets. Vault is an optional secret store, not the default GitHub-recommended cloud auth pattern.
