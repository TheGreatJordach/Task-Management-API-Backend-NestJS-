---
title: Merge Dev into Main
---
# Introduction

This document will walk you through the implementation of the automated pull request creation feature from the dev branch to the main branch.

The feature ensures that changes in the dev branch are automatically proposed for merging into the main branch if all checks pass.

We will cover:

1. Why we use <SwmToken path="/.github/workflows/dev-branch-pipeline.yml" pos="119:13:13" line-data="            git config --global user.name &quot;github-actions&quot;">`github`</SwmToken> Actions for this process.
2. How we ensure all jobs pass before creating the pull request.
3. How we set up Git and authenticate the <SwmToken path="/.github/workflows/dev-branch-pipeline.yml" pos="119:13:13" line-data="            git config --global user.name &quot;github-actions&quot;">`github`</SwmToken> CLI.
4. How the pull request is created automatically.

# Using <SwmToken path="/.github/workflows/dev-branch-pipeline.yml" pos="119:13:13" line-data="            git config --global user.name &quot;github-actions&quot;">`github`</SwmToken> Actions

We use <SwmToken path="/.github/workflows/dev-branch-pipeline.yml" pos="119:13:13" line-data="            git config --global user.name &quot;github-actions&quot;">`github`</SwmToken> Actions to automate the process of creating a pull request from the dev branch to the main branch. This ensures consistency and reduces manual effort.

# Ensuring all jobs pass

<SwmSnippet path=".github/workflows/dev-branch-pipeline.yml" line="107">

---

We define a job that runs on <SwmToken path="/.github/workflows/dev-branch-pipeline.yml" pos="109:6:8" line-data="    runs-on: ubuntu-latest">`ubuntu-latest`</SwmToken> and depends on the successful completion of lint, coverage, and build jobs. This ensures that only if all these jobs pass, the pull request will be created.

```

    name: Create Pull Request from Dev to Main # If All Pass
    runs-on: ubuntu-latest
    needs: [ lint, coverage, build ] # Ensure all jobs pass
    steps:
        - name: Checkout the dev branch
          uses: actions/checkout@v4
          with:
            ref: dev
```

---

</SwmSnippet>

# Setting up Git and authenticating <SwmToken path="/.github/workflows/dev-branch-pipeline.yml" pos="119:13:13" line-data="            git config --global user.name &quot;github-actions&quot;">`github`</SwmToken> CLI

<SwmSnippet path=".github/workflows/dev-branch-pipeline.yml" line="116">

---

We configure Git with a user name and email for the <SwmToken path="/.github/workflows/dev-branch-pipeline.yml" pos="119:13:13" line-data="            git config --global user.name &quot;github-actions&quot;">`github`</SwmToken> Actions bot. This is necessary for committing and pushing changes.

```

        - name: Set up Git
          run: |
            git config --global user.name "github-actions"
            git config --global user.email "github-actions@github.com"

        - name: Authenticate GitHub CLI
```

---

</SwmSnippet>

<SwmSnippet path=".github/workflows/dev-branch-pipeline.yml" line="123">

---

Next, we authenticate the <SwmToken path="/.github/workflows/dev-branch-pipeline.yml" pos="119:13:13" line-data="            git config --global user.name &quot;github-actions&quot;">`github`</SwmToken> CLI using a personal access token stored in <SwmToken path="/.github/workflows/dev-branch-pipeline.yml" pos="119:13:13" line-data="            git config --global user.name &quot;github-actions&quot;">`github`</SwmToken> Secrets. This allows the CLI to perform actions on behalf of the user.

```

          run: |
            echo "${{ secrets.GH_PAT }}" | gh auth login --with-token

        - name: Create Pull Request
          run: |
            gh pr create --base main --head dev --title "Merge Dev into Main" --body "This pull request merges the changes from the dev branch into the main branch."
```

---

</SwmSnippet>

# Creating the pull request

<SwmSnippet path=".github/workflows/dev-branch-pipeline.yml" line="123">

---

Finally, we use the <SwmToken path="/.github/workflows/dev-branch-pipeline.yml" pos="119:13:13" line-data="            git config --global user.name &quot;github-actions&quot;">`github`</SwmToken> CLI to create a pull request from the dev branch to the main branch. The pull request includes a title and a body explaining the purpose of the merge.

```

          run: |
            echo "${{ secrets.GH_PAT }}" | gh auth login --with-token

        - name: Create Pull Request
          run: |
            gh pr create --base main --head dev --title "Merge Dev into Main" --body "This pull request merges the changes from the dev branch into the main branch."
```

---

</SwmSnippet>

This setup ensures that the process of merging changes from the dev branch to the main branch is automated, reliable, and requires minimal manual intervention.

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBVGFzay1NYW5hZ2VtZW50LUFQSS1CYWNrZW5kLU5lc3RKUy0lM0ElM0FUaGVHcmVhdEpvcmRhY2g=" repo-name="Task-Management-API-Backend-NestJS-"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>
