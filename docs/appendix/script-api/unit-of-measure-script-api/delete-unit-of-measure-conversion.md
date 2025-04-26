---
sidebar_position: 22
title: "deleteUnitOfMeasureConversion"
description: "Deletes the unit of measure conversion with the given ID."
---

# system.mes.unitOfMeasure.deleteUnitOfMeasureConversion

## Description

Deletes a [Unit Of Measure Conversions](../../data-model/utility-models/unit-of-measure-model/unit-of-measure-conversion) record by its ID.
This cannot delete a unit of measure conversion with references to it.

## Syntax

```python
system.mes.unitOfMeasure.deleteUnitOfMeasureConversion(id)
```

## Parameters

| Parameter | Type            | Description                                         |
| --------- | --------------- | --------------------------------------------------- |
| `id`      | `String` (ULID) | The ID of the unit of measure conversion to delete. |

## Returns

If successful, no response is returned. If unsuccessful, an InUseException, IllegalArgumentException or ConstraintViolationException is thrown.
If the unit of measure conversion that's being deleted has a reference, an ApiResponse Object is returned with details about the encountered error.

| Name      | Type      | Description                                                 |
| --------- | --------- | ----------------------------------------------------------- |
| `success` | `Boolean` | Indicates if the delete was successful.                     |
| `message` | `String`  | The reason why the deletion was successful or unsuccessful. |
| `data`    | `String`  | The data associated with the deletion.                      |
| `error`   | `String`  | The errors associated with the deletion.                    |

## Code Examples

```python
# Delete a unit of measure conversion by ID
system.mes.unitOfMeasure.deleteUnitOfMeasureConversion('01JCH4NZH2-C7494ZJT-P52KRZEY')
```
