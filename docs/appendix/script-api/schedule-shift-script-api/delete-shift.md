---
sidebar_position: 9
title: "deleteShift"
description: "Deletes the schedule shift with the given ID."
---

# system.mes.schedule.shift.deleteShift

## Description

Deletes a [Schedule Shifts](../../data-model/schedule-shift-model/schedule-shift) record by its ID.
This cannot delete a schedule shift with references to it.

## Syntax

```python
system.mes.schedule.shift.deleteShift(id)
```

## Parameters

| Parameter | Type     | Nullable | Description                             |
|-----------|----------|----------|-----------------------------------------|
| `id`      | `String` | False    | The ID of the schedule shift to delete. |

## Returns

If successful, an ApiResponse Object is returned with the success bool set True. If unsuccessful, an
IllegalArgumentException or ConstraintViolationException is thrown.
If the schedule shift that's being deleted has a reference, an ApiResponse Object is returned with details about the
encountered error.

| Name      | Type      | Description                                                 |
|-----------|-----------|-------------------------------------------------------------|
| `success` | `Boolean` | Indicates if the delete was successful.                     |
| `message` | `String`  | The reason why the deletion was successful or unsuccessful. |
| `data`    | `String`  | The data associated with the deletion.                      |
| `error`   | `String`  | The errors associated with the deletion.                    |

## Code Examples

```python
# Delete a schedule shift by ID
system.mes.schedule.shift.deleteShift('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')
```
