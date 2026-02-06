---
sidebar_position: 18
title: 'deleteState'
description: 'Deletes an OEE state by its ID.'
---

# system.mes.oee.deleteState

## Description

Deletes an OEE State by its ID. This operation cannot delete a state that has active references or is currently being used in data collection.

## Permissions

This method requires the `OEE.WRITE.DELETE` permission.

## Syntax

```python
system.mes.oee.deleteState(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                          |
| --------- | --------------- | -------- | ------------------------------------ |
| `id`      | `String` (ULID) | False    | The ULID of the OEE state to delete. |

## Returns

If successful, an ApiResponse Object is returned with the success bool set True. If unsuccessful, an IllegalArgumentException or ConstraintViolationException is thrown.
If the oee state that's being deleted has a reference, an ApiResponse Object is returned with details about the encountered error.

| Name      | Type      | Description                                                 |
| --------- | --------- | ----------------------------------------------------------- |
| `success` | `Boolean` | Indicates if the delete was successful.                     |
| `message` | `String`  | The reason why the deletion was successful or unsuccessful. |
| `data`    | `String`  | The data associated with the deletion.                      |
| `error`   | `String`  | The errors associated with the deletion.                    |

## Code Examples

```python
# Delete an oee state by ID
system.mes.oee.deleteState('01JCH3ENEB-SV2X8B3W-NFY8WZNK')
```
