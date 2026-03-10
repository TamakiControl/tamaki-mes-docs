---
sidebar_position: 34
title: 'deletePerformanceReason'
description: 'Deletes an OEE performance reason by its ID.'
---

# system.mes.oee.deletePerformanceReason

## Description

Deletes an OEE Performance Reason by its unique identifier. This operation will permanently remove the performance
reason from the system.

## Permissions

This method requires the `OEE.WRITE.DELETE` permission.

## Syntax

```python
system.mes.oee.deletePerformanceReason(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                                   |
|-----------|-----------------|----------|-----------------------------------------------|
| `id`      | `String` (ULID) | False    | The ULID of the performance reason to delete. |

## Returns

If successful, an ApiResponse Object is returned with the success bool set True. If unsuccessful, an
IllegalArgumentException or ConstraintViolationException is thrown.
If the oee performance reason that's being deleted has a reference, an ApiResponse Object is returned with details
about the encountered error.

| Name      | Type      | Description                                                 |
|-----------|-----------|-------------------------------------------------------------|
| `success` | `Boolean` | Indicates if the delete was successful.                     |
| `message` | `String`  | The reason why the deletion was successful or unsuccessful. |
| `data`    | `String`  | The data associated with the deletion.                      |
| `error`   | `String`  | The errors associated with the deletion.                    |

## Code Examples

```python
# Delete an oee performance reason by ID
system.mes.oee.deletePerformanceReason('01JCH3ENEB-SV2X8B3W-NFY8WZNK')
```

