---
sidebar_position: 12
title: "deleteUnitOfMeasureWithReferences"
description: "Deletes the unit of measure with the given ID and any immediate references to this location if possible."
---

# system.mes.unitOfMeasure.deleteUnitOfMeasureWithReferences

## Description

Deletes a [Units Of Measure](../../data-model/utility-models/unit-of-measure-model/unit-of-measure) record by its ID.
Also deletes immediate references to this unit of measure if possible.

## Syntax

```python
system.mes.unitOfMeasure.deleteUnitOfMeasureWithReferences(id)
```

## Parameters

| Parameter | Type            | Description                              |
| --------- | --------------- | ---------------------------------------- |
| `id`      | `String` (ULID) | The ID of the unit of measure to delete. |

## Returns

If successful, no response is returned. If unsuccessful, an IllegalArgumentException or ConstraintViolationException is thrown.

## Code Examples

```python
# Delete a unit of measure by ID and all immediate references
system.mes.unitOfMeasure.deleteUnitOfMeasureWithReferences('01JS27F59C-BRW0RCQ0-VBC38S4K')
```
