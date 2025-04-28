---
sidebar_position: 23
title: "deleteUnitOfMeasureConversionWithReferences"
description: "Deletes the unit of measure conversion with the given ID and any immediate references to this location if possible."
---

# system.mes.unitOfMeasure.deleteUnitOfMeasureConversionWithReferences

## Description

Deletes a [Unit Of Measure Conversions](../../data-model/utility-models/unit-of-measure-model/unit-of-measure-conversion) record by its ID.
Also deletes immediate references to this unit of measure conversion if possible.

## Syntax

```python
system.mes.unitOfMeasure.deleteUnitOfMeasureConversionWithReferences(id)
```

## Parameters

| Parameter | Type            | Description                                         |
| --------- | --------------- | --------------------------------------------------- |
| `id`      | `String` (ULID) | The ID of the unit of measure conversion to delete. |

## Returns

If successful, no response is returned. If unsuccessful, an IllegalArgumentException or ConstraintViolationException is thrown.

## Code Examples

```python
# Delete a unit of measure conversion by ID and all immediate references
system.mes.unitOfMeasure.deleteUnitOfMeasureConversionWithReferences('01JCH4NZH2-C7494ZJT-P52KRZEY')
```
