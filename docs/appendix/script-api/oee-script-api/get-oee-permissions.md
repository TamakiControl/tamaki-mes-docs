---
sidebar_position: 20
title: "getOeePermissions"
description: "Gets all OEE role permissions."
---

# system.mes.oee.getOeePermissions

## Description

Retrieves a list of all role permission strings related to OEE. This can be used to check what permissions are available for OEE operations.

## Syntax

```python
system.mes.oee.getOeePermissions()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a list of strings representing all OEE role permissions.

| Name            | Type           | Description                       |
|-----------------|----------------|-----------------------------------|
| `permissions`   | `List<String>` | List of all OEE role permissions. |

## Code Examples

```python
# Retrieve all OEE permissions
permissions = system.mes.oee.getOeePermissions()

# Output the list of permissions
print(permissions)

# Check if a specific permission exists
if 'OEE_READ' in permissions:
    print("Read permission is available")
```
