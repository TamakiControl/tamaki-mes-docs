---
title: "getRole"
description: "Retrieves a role by its ID."
---

# getRole

## Overview
Retrieves the role with the specified ID and returns its JSON representation.

## Parameters
| Parameter | Type   | Nullable | Description |
|-----------|--------|----------|-------------|
| `id`        | `String` | False    | The unique identifier of the role to retrieve. |

## Returns
JSON representation of the RoleDTO object with the given ID.

## Example
```python
role = system.mes.role.getRole("01JAP8RJBN-8ZTPXSGY-J9GSDPE1")
```
