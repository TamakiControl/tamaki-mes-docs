---
sidebar_position: 4
title: "doesUnitOfMeasureExist"
description: "Checks if a unit of measure with the given ID or name exists."
---

# system.mes.unitOfMeasure.doesUnitOfMeasureExist

Checks if a [Units Of Measure](../../data-model/utility-models/unit-of-measure-model/unit-of-measure) object with the given ID or name exists.

## Syntax

```python
system.mes.unitOfMeasure.doesUnitOfMeasureExist(idOrName)
```

## Parameters

| Parameter  | Type     | Description                                       |
| ---------- | -------- | ------------------------------------------------- |
| `idOrName` | `String` | The ULID or name of the unit of measure to check. |

## Returns

Returns a boolean indicating whether the unit of measure exists.

## Code Examples

```python
# Check whether the unit of measure exists
uom_exists = system.mes.unitOfMeasure.doesUnitOfMeasureExist('Pound')

# Output the boolean result
print(uom_exists)
```
