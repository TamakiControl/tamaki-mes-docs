---
sidebar_position: 24
title: "addConversion"
description: "Adds a unit of measure conversion from one unit of measure to another for the specified material with the specified conversion factor."
---

# system.mes.unitOfMeasure.addConversion

## Description

Adds a [Unit Of Measure Conversions](../../data-model/utility-models/unit-of-measure-model/unit-of-measure-conversion) record from one unit of measure to another for the specified material with the specified conversion factor.

## Syntax

```python
system.mes.unitOfMeasure.addConversion(fromIdOrName, toIdOrName, conversionFactor, materialId)
```

## Parameters

| Parameter          | Type            | Nullable | Description                                              |
|--------------------|-----------------|----------|----------------------------------------------------------|
| `fromIdOrName`     | `String`        | False    | The ULID or name of the from unit of measure to check.   |
| `toIdOrName`       | `String`        | False    | The ULID or name of the to unit of measure to check.     |
| `conversionFactor` | `Double`        | False    | The conversion factor between the units of measure.      |
| `materialId`       | `String` (ULID) | True     | The ULID of the material associated with the conversion. |

## Returns

Returns a JSON representation of the added unit of measure conversion object.

## Code Examples

```python
# Add a unit of measure conversion using the parameters
add_uomc = system.mes.unitOfMeasure.addConversion('Pound', 'Kg', 0.33, '01JCH3TP3Y-4B080WHN-MSR8RVP5')

# Output the JSON representation of the added unit of measure conversion
print(add_uomc)
```
