---
sidebar_position: 9
title: "deleteShift"
description: "Deletes the shift with the given ID."
---

# system.mes.shift.deleteShift

## Description

Deletes a [Shifts](../../data-model/shift-model/shift) record by its ID. This cannot delete a shift with references to it.

## Syntax

```python
system.mes.shift.deleteShift(id)
```

## Parameters

| Parameter | Type     | Nullable | Description                 |
|-----------|----------|----------|-----------------------------|
| `id`      | `String` | False    | The ID of the shift to delete. |

## Returns

If successful, an ApiResponse object is returned with the success flag set to true. If unsuccessful, an IllegalArgumentException or ConstraintViolationException is thrown. If the shift being deleted has references, an ApiResponse object is returned with details about the error.

| Name      | Type      | Description                                                 |
|-----------|-----------|-------------------------------------------------------------|
| `success` | `Boolean` | Indicates if the delete was successful.                     |
| `message` | `String`  | The reason why the deletion was successful or unsuccessful. |
| `data`    | `String`  | The data associated with the deletion.                      |
| `error`   | `String`  | The errors associated with the deletion.                    |

## Code Examples

```python
# Delete a shift by ID
system.mes.shift.deleteShift('01JAP8RJBN-8ZTPXSGY-J9GSDPE1')
```
