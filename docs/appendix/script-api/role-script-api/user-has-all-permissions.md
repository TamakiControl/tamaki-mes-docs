---
title: "userHasAllPermissions"
description: "Checks if the current user has all of the specified permissions."
---

# system.mes.role.userHasAllPermissions

## Description

Checks if the current user has all of the specified permissions.

## Syntax
```python
system.mes.role.userHasAllPermissions(permissions)
```

## Parameters

| Parameter      | Type          | Nullable | Description                                                                    |
|----------------|---------------|----------|--------------------------------------------------------------------------------|
| `permissions` | `List<Sring>` | False    | A list of permission strings to check against the current user's permissions.  |

## Returns

Returns `True` if the current user has all of the specified permissions, otherwise returns `False`.

## Code Examples

```python
permisssions = ['INVENTORY_READ', 'MATERIAL_READ', 'LOCATION_READ']
hasAllPermissions = system.mes.role.userHasAllPermissions(permisssions)
if hasAllPermissions:
    print("User has all specified permissions.")
else:
    print("User does not have all specified permissions.")
```

