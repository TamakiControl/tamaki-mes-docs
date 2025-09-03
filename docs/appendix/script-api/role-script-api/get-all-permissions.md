---
title: "getAllPermissions"
description: "Retrieves all possible MES permissions."
---

# getAllPermissions

## Overview
Retrieves a list of all possible MES permissions that can be assigned to roles.

## Parameters
| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns
List of all MES permission strings.

## Example
```python
permissions = system.mes.role.getAllPermissions()
```
