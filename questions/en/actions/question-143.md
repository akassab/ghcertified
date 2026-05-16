---
question: "Your organization wants to lower the retention period for stored artifacts, citing storage concerns. How can this be done at an organizational level?"
documentation: "https://docs.github.com/en/organizations/managing-organization-settings/configuring-the-retention-period-for-github-actions-artifacts-and-logs-in-your-organization"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> By navigating to the organization's Actions settings and editing the value of the "Artifact and log retention" setting
- <input type="checkbox" disabled> By using self-hosted runners, creating a `.github/retention-policy.yml` file, and specifying the value of the `artifact-retention-period` key 
- <input type="checkbox" disabled> This cannot be done at an organizational level. All workflows that utilize `actions/upload-artifact` must use the required `retention-days` input.
- <input type="checkbox" disabled> This cannot be done: artifacts are strictly stored for 90 days across all systems implementing Github Actions. 

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

- [x] By navigating to the organization's Actions settings and editing the value of the "Artifact and log retention" setting
> **Simple:** Org admins set **Artifact and log retention** under **Organization settings → Actions** for a default across all repos.
>
> **Detailed:** Individual repos can use a shorter period but typically cannot exceed the org maximum unless policy allows. This centralizes compliance (for example “keep logs 90 days”) without editing hundreds of workflow files. Workflow-level `retention-days` on upload still applies per artifact within those caps.
