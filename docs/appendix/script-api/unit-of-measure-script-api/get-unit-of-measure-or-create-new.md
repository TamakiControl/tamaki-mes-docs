---
sidebar_position: 6
title: 'getUnitOfMeasureOrCreateNew'
description: 'Retrieves or creates a unit of measure by its name and symbol depending on if it exists.'
---

# system.mes.unitOfMeasure.getUnitOfMeasureOrCreateNew

## Description

Retrieves a [Units Of Measure](../../data-model/utility-models/unit-of-measure-model/unit-of-measure) record if an existing unit of measure exists with the specified name and symbol.
Otherwise, creates a new [Units Of Measure](../../data-model/utility-models/unit-of-measure-model/unit-of-measure) record with the specified name and symbol.

## Permissions

This method requires the `UNIT_OF_MEASURE.WRITE.SAVE` permission.

## Syntax

```python
system.mes.unitOfMeasure.getUnitOfMeasureOrCreateNew(name, symbol)
```

## Parameters

| Parameter | Type     | Nullable | Description                        |
| --------- | -------- | -------- | ---------------------------------- |
| `name`    | `String` | False    | The name of the unit of measure.   |
| `symbol`  | `String` | False    | The symbol of the unit of measure. |

## Returns

Returns a JSON representation of the unit of measure property.

## Code Examples

```python
# Get the unit of measure if it exists, otherwise creates it with the the parameters
uom = system.mes.unitOfMeasure.getUnitOfMeasureOrCreateNew('Pound', 'lb')

# Output the JSON representation of the unit of measure
print(uom)
```
