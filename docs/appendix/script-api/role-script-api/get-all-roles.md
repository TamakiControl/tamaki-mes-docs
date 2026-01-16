---
title: "getAllRoles"
description: "Retrieves all roles."
sidebar_position: 3
---

# getAllRoles

## Overview
Retrieves all roles in the system and returns their JSON representations.

## Parameters
| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns
JSON array of all RoleDTO objects.

## Example
```python
roles = system.mes.role.getAllRoles()
```
