---
title: "deleteRole"
description: "Deletes a role by its ID."
---

# deleteRole

## Overview
Deletes the role with the specified ID and returns a JSON response indicating success or failure.

## Parameters
| Parameter | Type   | Nullable | Description |
|-----------|--------|----------|-------------|
| `id`        | `String` | False    | The unique identifier of the role to delete. |

## Returns

If successful, an ApiResponse object is returned with the success flag set to true. If unsuccessful, an
IllegalArgumentException or ConstraintViolationException is thrown. If the shift being deleted has references, an
ApiResponse object is returned with details about the error.

| Name      | Type      | Description                                                 |
|-----------|-----------|-------------------------------------------------------------|
| `success` | `Boolean` | Indicates if the delete was successful.                     |
| `message` | `String`  | The reason why the deletion was successful or unsuccessful. |
| `data`    | `String`  | The data associated with the deletion.                      |
| `error`   | `String`  | The errors associated with the deletion.                    |

## Example
```python
response = system.mes.role.deleteRole("01JAP8RJBN-8ZTPXSGY-J9GSDPE1")
```
