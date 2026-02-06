---
sidebar_position: 26
title: 'deleteDowntimeReason'
description: 'Deletes an OEE downtime reason by its ID.'
---

# system.mes.oee.deleteDowntimeReason

## Description

Deletes an OEE Downtime Reason by its unique identifier. This operation will permanently remove the downtime reason from the system.

## Permissions

This method requires the `OEE.WRITE.DELETE` permission.

## Syntax

```python
system.mes.oee.deleteDowntimeReason(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                                |
| --------- | --------------- | -------- | ------------------------------------------ |
| `id`      | `String` (ULID) | False    | The ULID of the downtime reason to delete. |

## Returns

If successful, an ApiResponse Object is returned with the success bool set True. If unsuccessful, an IllegalArgumentException or ConstraintViolationException is thrown.
If the oee downtime reason that's being deleted has a reference, an ApiResponse Object is returned with details about the encountered error.

| Name      | Type      | Description                                                 |
| --------- | --------- | ----------------------------------------------------------- |
| `success` | `Boolean` | Indicates if the delete was successful.                     |
| `message` | `String`  | The reason why the deletion was successful or unsuccessful. |
| `data`    | `String`  | The data associated with the deletion.                      |
| `error`   | `String`  | The errors associated with the deletion.                    |

## Code Examples

```python
# Delete an oee downtime reason by ID
system.mes.oee.deleteDowntimeReason('01JCH3ENEB-SV2X8B3W-NFY8WZNK')
```
