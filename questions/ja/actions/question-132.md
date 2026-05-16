---
question: "次のうち、GitHub Enterprise Server (GHES) に関して正しいものはどれですか？"
documentation: "https://docs.github.com/en/enterprise-server/admin/overview/about-github-enterprise-server"
---

<!-- Unchecked choices are shown first; correct answers are below the spacer. -->

- <input type="checkbox" disabled> デフォルトでは、GHESのワークフローはGitHub.comおよびGitHub Marketplace actionsにアクセスできません。
- <input type="checkbox" disabled> `actions/actions-sync`は主にGitHub.comのactionsをGHESインスタンスに移動するために使用されます。
- <input type="checkbox" disabled> GHESでは、GitHubホストランナーの拡張バージョンを使用できます。
- <input type="checkbox" disabled> GitHub Connectを使用すると、ユーザーはGitHub.comのactionsにアクセスするために手動プロセスを実行できます。このプロセスは、望むアクションごとに一度実行する必要があります。
- <input type="checkbox" disabled> GitHub Enterprise Serverインスタンスはセルフホステッド型であるのに対し、GitHub Enterprise Cloud (GHEC)はGitHubによってホストおよび管理されています。

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

- [x] デフォルトでは、GHESのワークフローはGitHub.comおよびGitHub Marketplace actionsにアクセスできません。
- [x] `actions/actions-sync`は主にGitHub.comのactionsをGHESインスタンスに移動するために使用されます。
> GitHub.comからActionsを同期する主な方法は、GitHub Connectまたは`actions-sync`を使用することです。`actions/actions-sync`ツールは、[手動で](https://docs.github.com/en/enterprise-server/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom)このプロセスを実行する方法です。
- [ ] GHESでは、GitHubホストランナーの拡張バージョンを使用できます。
> GHESは、GitHubホストランナーをまったく利用できません。これは[`actions/actions-sync`のドキュメント](https://docs.github.com/en/enterprise-server/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/manually-syncing-actions-from-githubcom)にも記載されています。
- [ ] GitHub Connectを使用すると、ユーザーはGitHub.comのactionsにアクセスするために手動プロセスを実行できます。このプロセスは、望むアクションごとに一度実行する必要があります。
> GitHub Connectを使用すると、GitHub.comのactionsに自動的にアクセスできます。ユーザーはセットアッププロセスを遵守する必要がありますが、このプロセスは通常一度実行すれば済みます。詳細は[GitHub Connectのドキュメント](https://docs.github.com/en/enterprise-server/admin/managing-github-actions-for-your-enterprise/managing-access-to-actions-from-githubcom/enabling-automatic-access-to-githubcom-actions-using-github-connect#enabling-automatic-access-to-public-githubcom-actions)をご参照ください。
- [x] GitHub Enterprise Serverインスタンスはセルフホステッド型であるのに対し、GitHub Enterprise Cloud (GHEC)はGitHubによってホストおよび管理されています。
> [GitHub Enterprise Server](https://docs.github.com/en/enterprise-server/admin/overview/about-github-enterprise-server)はGitHubプラットフォームのセルフホステッドバージョンです。[GitHub Enterprise Cloud](https://docs.github.com/en/enterprise-cloud@latest/admin/overview/about-github-enterprise-cloud)のインスタンスは、GHE.comの専用サブドメイン上でホストされます。すべてのGHE.comサブドメインはGitHubによってホストされています。
