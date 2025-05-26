---
sidebar_position: 25
title: "getConversionFor"
description: "Retrieves the unit of measure conversion with the given to and from unit of measure and material ID."
---

# system.mes.unitOfMeasure.getConversionFor

## Description

Retrieves a [Unit Of Measure Conversions](../../data-model/utility-models/unit-of-measure-model/unit-of-measure-conversion) record by the given to and from unit of measure and material ID.

## Syntax

```python
system.mes.unitOfMeasure.getConversionFor(fromIdOrName, toIdOrName, materialId)
```

## Parameters

| Parameter      | Type            | Description                                              |
| -------------- | --------------- | -------------------------------------------------------- |
| `fromIdOrName` | `String`        | The ULID or name of the from unit of measure to check.   |
| `toIdOrName`   | `String`        | The ULID or name of the to unit of measure to check.     |
| `materialId`   | `String` (ULID) | The ULID of the material associated with the conversion. |

## Returns

Returns a JSON representation of the unit of measure conversion. Returns nothing if no unit of measure conversion is found.

## Code Examples

```python
# Retrieve a unit of measure conversion by the units of measure and the material ID.
uomc = system.mes.unitOfMeasure.getConversionFor('Pound', 'Kilogram', '01JCH3TP3Y-4B080WHN-MSR8RVP5')

# Output the unit of measure conversion
print(uomc)
```
