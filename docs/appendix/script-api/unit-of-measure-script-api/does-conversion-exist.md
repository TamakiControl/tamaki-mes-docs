---
sidebar_position: 15
title: 'doesConversionExist'
description: 'Checks if a unit of measure conversion with the given to and from unit of measures and the material ID exists.'
---

# system.mes.unitOfMeasure.doesConversionExist

Checks if a [Unit Of Measure Conversions](../../data-model/utility-models/unit-of-measure-model/unit-of-measure-conversion) object with the given parameters exists.

## Permissions

This method requires the `UNIT_OF_MEASURE.READ.GET` permission.

## Syntax

```python
system.mes.unitOfMeasure.doesConversionExist(fromIdOrName, toIdOrName, materialId)
```

## Parameters

| Parameter      | Type            | Nullable | Description                                              |
| -------------- | --------------- | -------- | -------------------------------------------------------- |
| `fromIdOrName` | `String`        | False    | The ULID or name of the from unit of measure to check.   |
| `toIdOrName`   | `String`        | False    | The ULID or name of the to unit of measure to check.     |
| `materialId`   | `String` (ULID) | True     | The ULID of the material associated with the conversion. |

## Returns

Returns a boolean indicating whether the unit of measure conversion exists.

## Code Examples

```python
# Check whether the unit of measure conversion exists
uomc_exists = system.mes.unitOfMeasure.doesConversionExist('Pound', 'Kilogram', '01JCH3TP3Y-4B080WHN-MSR8RVP5')

# Output the boolean result
print(uomc_exists)
```
