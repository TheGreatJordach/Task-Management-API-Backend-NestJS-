---
title: Untitled doc
---
# Introduction

This document will walk you through the implementation of the environment validation feature.

The feature ensures that the provided environment configuration is validated against a predefined schema, catching any errors early in the application startup process.

We will cover:

1. Why we need environment validation.
2. How the validation is implemented.
3. What happens when validation fails.

# Why we need environment validation

Environment validation is necessary to ensure that all required environment variables are present and correctly formatted before the application starts. This prevents runtime errors due to missing or malformed configuration.

# How the validation is implemented

<SwmSnippet path="/src/configuration/env.validation.ts" line="30">

---

The validation logic is encapsulated in the <SwmToken path="/src/configuration/env.validation.ts" pos="30:4:4" line-data="export function envValidator(providedConfig:Record&lt;string, unknown&gt; ){">`envValidator`</SwmToken> function. This function converts the provided configuration into an instance of <SwmToken path="/src/configuration/env.validation.ts" pos="5:4:4" line-data="export class EnvironmentVariables {">`EnvironmentVariables`</SwmToken> and validates it.

```typescript
export function envValidator(providedConfig:Record<string, unknown> ){
  const validatedConfig = plainToInstance(EnvironmentVariables,providedConfig,{
    enableCircularCheck:true
  })

  const errors = validateSync(validatedConfig, {
    skipMissingProperties:false
  })

  if (errors.length > 0) {
    throw new Error(`${errors.length} not valid environment variable found`)
  }

  return validatedConfig;
```

---

</SwmSnippet>

# What happens when validation fails

If any environment variables are missing or invalid, the <SwmToken path="/src/configuration/env.validation.ts" pos="30:4:4" line-data="export function envValidator(providedConfig:Record&lt;string, unknown&gt; ){">`envValidator`</SwmToken> function throws an error, stopping the application from starting with an incorrect configuration. This ensures that configuration issues are caught early, making debugging easier.

This concludes the walkthrough of the environment validation feature.

<SwmMeta version="3.0.0" repo-id="Z2l0aHViJTNBJTNBVGFzay1NYW5hZ2VtZW50LUFQSS1CYWNrZW5kLU5lc3RKUy0lM0ElM0FUaGVHcmVhdEpvcmRhY2g=" repo-name="Task-Management-API-Backend-NestJS-"><sup>Powered by [Swimm](https://app.swimm.io/)</sup></SwmMeta>
