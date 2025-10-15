---
title: 'newRole'
description: 'Creates a new role object.'
---

# newRole

## Overview

Creates a new role object and returns its JSON representation. This is typically used as a template for creating or editing roles before saving.

## Permissions

This method does not require any permissions.

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

JSON representation of a new RoleDTO object.

## Example

```python
role = system.mes.role.newRole()
role["security_levels"] = ["Authenticated/Roles/Administrator"]
role["permissions"] = ["MATERIALS.WRITE" , "INVENTORY.READ"]
role["role_requirement_type"] = "ALL_OF"
```
