---
sidebar_position: 11
title: "deleteUnitOfMeasure"
description: "Deletes the unit of measure with the given ID."
---

# system.mes.unitOfMeasure.deleteUnitOfMeasure

## Description

Deletes a [Units Of Measure](../../data-model/utility-models/unit-of-measure-model/unit-of-measure) record by its ID.
This cannot delete a unit of measure with references to it.

## Syntax

```python
system.mes.unitOfMeasure.deleteUnitOfMeasure(id)
```

## Parameters

| Parameter | Type            | Description                              |
| --------- | --------------- | ---------------------------------------- |
| `id`      | `String` (ULID) | The ID of the unit of measure to delete. |

## Returns

If successful, an ApiResponse Object is returned with the success bool set True. If unsuccessful, an InUseException, IllegalArgumentException or ConstraintViolationException is thrown.
If the unit of measure that's being deleted has a reference, an ApiResponse Object is returned with details about the encountered error.

| Name      | Type      | Description                                                 |
| --------- | --------- | ----------------------------------------------------------- |
| `success` | `Boolean` | Indicates if the delete was successful.                     |
| `message` | `String`  | The reason why the deletion was successful or unsuccessful. |
| `data`    | `String`  | The data associated with the deletion.                      |
| `error`   | `String`  | The errors associated with the deletion.                    |

## Code Examples

```python
# Delete a unit of measure by ID
system.mes.unitOfMeasure.deleteUnitOfMeasure('01JS27F59C-BRW0RCQ0-VBC38S4K')
```
