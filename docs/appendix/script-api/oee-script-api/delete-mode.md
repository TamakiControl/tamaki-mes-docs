---
sidebar_position: 16
title: 'deleteMode'
description: 'Deletes an OEE mode record by its ID.'
---

# system.mes.oee.deleteMode

Deletes an OEE Mode by its ID. This operation cannot delete a mode that has references to it from other system components.

## Permissions

This method requires the `OEE.WRITE.DELETE` permission.

## Syntax

```python
system.mes.oee.deleteMode(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                         |
| --------- | --------------- | -------- | ----------------------------------- |
| `id`      | `String` (ULID) | False    | The ULID of the OEE mode to delete. |

## Returns

If successful, an ApiResponse Object is returned with the success bool set True. If unsuccessful, an IllegalArgumentException or ConstraintViolationException is thrown.
If the oee mode that's being deleted has a reference, an ApiResponse Object is returned with details about the encountered error.

| Name      | Type      | Description                                                 |
| --------- | --------- | ----------------------------------------------------------- |
| `success` | `Boolean` | Indicates if the delete was successful.                     |
| `message` | `String`  | The reason why the deletion was successful or unsuccessful. |
| `data`    | `String`  | The data associated with the deletion.                      |
| `error`   | `String`  | The errors associated with the deletion.                    |

## Code Examples

```python
# Delete an oee mode by ID
system.mes.oee.deleteMode('01JCH3ENEB-SV2X8B3W-NFY8WZNK')
```
