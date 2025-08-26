---
sidebar_position: 20
title: "deleteShiftRecord"
description: "Deletes the schedule shift record with the given ID."
---

# system.mes.schedule.shift.deleteShiftRecord

## Description

Deletes a [Schedule Shift Records](../../data-model/schedule-shift-model/schedule-shift-record) record by its ID.
This cannot delete a record with references to it.

## Syntax

```python
system.mes.schedule.shift.deleteShiftRecord(id)
```

## Parameters

| Parameter | Type     | Nullable | Description                                    |
|-----------|----------|----------|------------------------------------------------|
| `id`      | `String` | False    | The ID of the schedule shift record to delete. |

## Returns

If successful, an ApiResponse Object is returned with the success bool set True. If unsuccessful, an
IllegalArgumentException or ConstraintViolationException is thrown.
If the record that's being deleted has a reference, an ApiResponse Object is returned with details about the encountered
error.

| Name      | Type      | Description                                                 |
|-----------|-----------|-------------------------------------------------------------|
| `success` | `Boolean` | Indicates if the delete was successful.                     |
| `message` | `String`  | The reason why the deletion was successful or unsuccessful. |
| `data`    | `String`  | The data associated with the deletion.                      |
| `error`   | `String`  | The errors associated with the deletion.                    |

## Code Examples

```python
# Delete a shift record by ID
system.mes.schedule.shift.deleteShiftRecord('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')
```
