---
title: Merge Dev into Main
---
# Introduction

This document will walk you through the implementation of the merge from the development branch into the main branch. The feature focuses on setting up a robust CI/CD pipeline for the main branch.

We will cover:

1. Why we need separate pipelines for the dev and main branches.
2. The steps involved in the main branch pipeline.
3. How we handle database migrations and deployments.
4. The cleanup process after deployment.

# Separate pipelines for dev and main branches

<SwmSnippet path=".github/workflows/dev-branch-pipeline.yml" line="71">

---

We have defined a pipeline specifically for the development branch to run unit tests and check code coverage. This ensures that only tested and verified code reaches the main branch.

```
    name: Unit Tests & Coverage
```

---

</SwmSnippet>

# Main branch pipeline setup

<SwmSnippet path=".github/workflows/main-branch-pipeline.yml" line="57">

---

The main branch pipeline is more comprehensive. It starts by validating the environment and proceeds only if the validation is successful.

```
    needs: validate-env
    if: success()
```

---

</SwmSnippet>

# Creating a new branch for deployment

<SwmSnippet path=".github/workflows/main-branch-pipeline.yml" line="69">

---

The first step in the main branch pipeline is to create a new branch for deployment. This branch is used to isolate deployment-specific changes.

```
    if: success()
    runs-on: ubuntu-latest
    steps:
      # STEP-1: Create a new Branch for deployment
```

---

</SwmSnippet>

<SwmSnippet path=".github/workflows/main-branch-pipeline.yml" line="81">

---

We specify the branch name and use an API key for authentication.

```
          branch_name: Task-deployment  # <-------------------- Add the branch name to be created
          api_key: ${{ secrets.NEON_API_KEY }}

```

---

</SwmSnippet>

# Running database migrations

<SwmSnippet path=".github/workflows/main-branch-pipeline.yml" line="84">

---

Before deploying, we need to ensure that the database is correctly set up. We first check if the <SwmToken path="/src/configuration/env.validation.ts" pos="19:1:1" line-data="  DATABASE_URL:string">`DATABASE_URL`</SwmToken> is set.

```
      # STEP-2: Run Migration
      - name: Check Database Connection and Run Migration
        run: |
          # Check if DATABASE_URL is set
          if [ -z "${{ secrets.DATABASE_URL }}" ]; then
            echo "DATABASE_URL is not set. Cannot proceed with migration."
            exit 1
          fi
```

---

</SwmSnippet>

<SwmSnippet path=".github/workflows/main-branch-pipeline.yml" line="92">

---

Next, we test if the database is reachable.

```

          # Test if the database is reachable
          PGPASSWORD=$(echo "${{ secrets.DATABASE_URL }}" | sed -n 's/.*:\/\/*:\([^@]*\).*/\1/p') \
          psql $(echo "${{ secrets.DATABASE_URL }}" | sed -n 's/\(.*@\)\(.*\)\/.*/\2/p') -c '\q'

          if [ $? -ne 0 ]; then
            echo "Cannot connect to the database. Please check the connection settings."
            exit 1
          fi
```

---

</SwmSnippet>

<SwmSnippet path=".github/workflows/main-branch-pipeline.yml" line="101">

---

If the database connection is successful, we run the migration.

```

          # Run the migration if everything is okay
          yarn run db:migrate
        env:
          DATABASE_URL: "${{ secrets.DATABASE_URL }}"


  # STEP-3: if no error on Migration Ok then Deploy to vercel
  deploy_to_vercel:
    name: Deploy to Vercel
    needs: deploy_to_neon
    if : success()
```

---

</SwmSnippet>

# Deploying to Vercel

<SwmSnippet path=".github/workflows/main-branch-pipeline.yml" line="101">

---

If the migration is successful, we proceed to deploy the application to Vercel.

```

          # Run the migration if everything is okay
          yarn run db:migrate
        env:
          DATABASE_URL: "${{ secrets.DATABASE_URL }}"


  # STEP-3: if no error on Migration Ok then Deploy to vercel
  deploy_to_vercel:
    name: Deploy to Vercel
    needs: deploy_to_neon
    if : success()
```

---

</SwmSnippet>

# Building documentation

<SwmSnippet path=".github/workflows/main-branch-pipeline.yml" line="124">

---

After deploying to Vercel, we build the project documentation.

```
    # STEP-4: if Deploy to Vercel Ok, then Deploy the docs
    name: Build Documentation
    runs-on: ubuntu-latest
    needs: deploy_to_vercel
    if: success()
```

---

</SwmSnippet>

# Cleanup process

<SwmSnippet path=".github/workflows/main-branch-pipeline.yml" line="146">

---

Regardless of the success or failure of the previous steps, we clean up by deleting the deployment branch.

```
    # STEP-5: Wait for the end of the process and clean up regardless of success or failure
    name: Delete Neon Deployment Branch
    runs-on: ubuntu-latest
    needs: [ deploy_to_neon, deploy_to_vercel, build ] # Depends on previous jobs
    if: always() # Run regardless of success or failure
    steps:
      - name: Delete Neon Deployment Branch
        uses: neondatabase/delete-branch-action@v3
        with:
          api_key: ${{ secrets.NEON_API_KEY }}
          project_id: ${{ secrets.NEON_PROJECT_ID }}
          branch_name: Task-deployment # <-------------------- Add the branch name to be deleted

```

---

</SwmSnippet>

# Adding project badge

<SwmSnippet path="README.md" line="7">

---

Finally, we add a <SwmToken path="/.github/workflows/main-branch-pipeline.yml" pos="26:1:1" line-data="  sonarcloud:">`sonarcloud`</SwmToken> badge to the README for code quality tracking.

```
[![SonarCloud](https://sonarcloud.io/images/project_badges/sonarcloud-black.svg)](https://sonarcloud.io/summary/new_code?id=TheGreatJordach_Task-Management-API-Backend-NestJS-)

```

---

</SwmSnippet>

This setup ensures that our main branch is always in a deployable state, with all necessary checks and balances in place.

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBVGFzay1NYW5hZ2VtZW50LUFQSS1CYWNrZW5kLU5lc3RKUy0lM0ElM0FUaGVHcmVhdEpvcmRhY2g=" repo-name="Task-Management-API-Backend-NestJS-"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>
