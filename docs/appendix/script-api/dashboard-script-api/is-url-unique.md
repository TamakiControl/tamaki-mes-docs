---
sidebar_position: 32
title: "isUrlUnique"
description: "Checks whether a dashboard URL is unique for a given user, with optional excludeId for updates."
---

# system.mes.dashboard.isUrlUnique

## Description

Checks if a URL is unique and available for use by a specific user. A URL is unavailable if it already exists for either
the same username or any public dashboard (username is null).

## Syntax

```python
system.mes.dashboard.isUrlUnique(url, username)
system.mes.dashboard.isUrlUnique(url, username, excludeId)
```

## Parameters

### Method 1: URL and Username

| Parameter  | Type     | Nullable | Description                               |
|------------|----------|----------|-------------------------------------------|
| `url`      | `String` | False    | The URL to check for uniqueness.          |
| `username` | `String` | False    | The username that will own the dashboard. |

### Method 2: URL, Username, and Exclude ID

| Parameter   | Type            | Nullable | Description                                                                           |
|-------------|-----------------|----------|---------------------------------------------------------------------------------------|
| `url`       | `String`        | False    | The URL to check for uniqueness.                                                      |
| `username`  | `String`        | False    | The username that will own the dashboard.                                             |
| `excludeId` | `String` (ULID) | True     | An existing dashboard ID to exclude from the uniqueness check (useful when updating). |

## Returns

Returns a Boolean indicating whether the URL is unique and can be used.

## Code Examples

```python
# Check URL availability for current user
isUnique = system.mes.dashboard.isUrlUnique('production-overview', 'operator01')
print(isUnique)

# Check URL availability while updating an existing dashboard
isUnique = system.mes.dashboard.isUrlUnique('production-overview', 'operator01', '01JAP8RJBN-8ZTPXSGY-J9GSDPE1')
print(isUnique)
```
