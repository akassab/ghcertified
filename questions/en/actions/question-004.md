---
question: "Are GitHub Actions free for public repositories?"
documentation: "https://docs.github.com/en/billing/concepts/product-billing/github-actions#how-use-of-github-actions-is-measured"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> Yes, when using standard GitHub-hosted runners
- <input type="checkbox" disabled> No, all GitHub Actions usage is billed
- <input type="checkbox" disabled> Yes, but only for the first 2,000 minutes per month
- <input type="checkbox" disabled> No, only self-hosted runners are free for public repositories

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

- [x] Yes, when using standard GitHub-hosted runners
> **Simple:** Standard GitHub-hosted runners are free for workflows in **public** repos (within fair-use limits); private repos consume billable minutes.
>
> **Detailed:** Billing measures **minutes** on GitHub-hosted runners by OS and size. For **public** repositories, usage on standard labels (`ubuntu-latest`, `windows-latest`, `macos-latest`, etc.) is free—so a typical `on: push` CI workflow on every PR does not charge your account. **Private** repos use included minutes then paid usage. Exceptions and misconceptions:
>
> - **Larger runners** (for example `ubuntu-latest-4-cores`) and **self-hosted** runners follow different rules—self-hosted does not bill GitHub minutes but you supply the machine.
> - **Public** does not mean unlimited abuse; GitHub may apply usage policies.
> - Storage/artifacts and other products can still incur costs separately from runner minutes.
>
> Check current billing docs for your plan; the exam answer is "yes" for standard hosted runners on public repos.
