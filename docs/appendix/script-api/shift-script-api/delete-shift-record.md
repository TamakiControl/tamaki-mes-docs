---
sidebar_position: 20
title: "deleteShiftRecord"
description: "Deletes the shift record with the given ID."
---

# system.mes.shift.deleteShiftRecord

## Description

Deletes a [Shift Records](../../data-model/shift-model/shift-record) record by its ID. This cannot delete a record with references to it.

## Syntax

```python
system.mes.shift.deleteShiftRecord(id)
```

## Parameters

| Parameter | Type     | Nullable | Description                           |
|-----------|----------|----------|---------------------------------------|
| `id`      | `String` | False    | The ID of the shift record to delete. |

## Returns

If successful, an ApiResponse object is returned with the success flag set to true. If unsuccessful, an IllegalArgumentException or ConstraintViolationException is thrown. If the record being deleted has a reference, an ApiResponse object is returned with details about the error.

| Name      | Type      | Description                                                 |
|-----------|-----------|-------------------------------------------------------------|
| `success` | `Boolean` | Indicates if the delete was successful.                     |
| `message` | `String`  | The reason why the deletion was successful or unsuccessful. |
| `data`    | `String`  | The data associated with the deletion.                      |
| `error`   | `String`  | The errors associated with the deletion.                    |

## Code Examples

```python
# Delete a shift record by ID
system.mes.shift.deleteShiftRecord('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')
```
