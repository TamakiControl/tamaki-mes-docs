---
title: "userHasAtLeastOnePermission"
description: "Checks if the current user has at least one of the specified permissions."
sidebar_position: 12
---

# system.mes.role.userHasAtLeastOnePermission

## Description

Checks if the current user has at least one of the specified permissions.

## Syntax
```python
system.mes.role.userHasAtLeastOnePermission(permissions)
```

## Parameters

| Parameter      | Type          | Nullable | Description                                                                    |
|----------------|---------------|----------|--------------------------------------------------------------------------------|
| `permissions` | `List<String>` | False    | A list of permission strings to check against the current user's permissions.  |

## Returns

Returns `True` if the current user has at least one of the specified permissions, otherwise returns `False`.

## Code Examples

```python
permissions = ['INVENTORY_READ', 'MATERIAL_READ', 'LOCATION_READ']
hasAnyPermission = system.mes.role.userHasAtLeastOnePermission(permissions)
if hasAnyPermission:
    print("User has at least one of the specified permissions.")
else:
    print("User does not have any of the specified permissions.")
```
