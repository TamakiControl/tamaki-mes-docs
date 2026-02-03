---
title: "deleteRoles"
description: "Deletes multiple roles by their IDs."
sidebar_position: 8
---

# deleteRoles

## Overview
Deletes multiple roles with the specified IDs and returns a JSON response indicating success or failure.

## Parameters
| Parameter | Type           | Nullable | Description |
|-----------|----------------|----------|-------------|
| `ids`       | `List<String>` | False    | The list of unique identifiers of the roles to delete. |

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
response = system.mes.role.deleteRoles(["01JAP8RJBN-8ZTPXSGY-J9GSDPE1", "01JAP8R5RT-3FPXQABY-7KQZT6VF"])
```
