---
sidebar_position: 25
title: "getConversionFor"
description: "Retrieves the unit of measure conversion with the given to and from unit of measure and material ID."
---

# system.mes.unitOfMeasure.getConversionFor

## Description

Retrieves a [Unit Of Measure Conversions](../../data-model/utility-models/unit-of-measure-model/unit-of-measure-conversion) record by the given to and from unit of measure and material ID. There are a few cases that can happen where the return is not straightforward, so the behavior is as follows:
- If a conversion is found that matches the from and to units of measure and the material, that conversion is returned.
- If a conversion going in the opposite direction is found that matches the from and to units of measure and the material, that conversion is returned with the conversion factor inverted (1/conversionFactor).
- If no conversion for the material is found and the **strict parameter is false**, then a conversion that matches the from and to units of measure that is not specific to any material is returned if found.
- If no conversion is found in any of the above cases, then nothing is returned.

## Syntax

```python
system.mes.unitOfMeasure.getConversionFor(fromIdOrName, toIdOrName)
system.mes.unitOfMeasure.getConversionFor(fromIdOrName, toIdOrName, materialIdOrPath)
system.mes.unitOfMeasure.getConversionFor(fromIdOrName, toIdOrName, materialIdOrPath, strict)
```

## Parameters

| Parameter          | Type      | Nullable | Description                                                                                                                                                                                                                                                                                     |
|--------------------|-----------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `fromIdOrName`     | `String`  | False    | The ULID or name of the from unit of measure to check.                                                                                                                                                                                                                                          |
| `toIdOrName`       | `String`  | False    | The ULID or name of the to unit of measure to check.                                                                                                                                                                                                                                            |
| `materialIdOrPath` | `String`  | True     | The ULID or path the material associated with the conversion.                                                                                                                                                                                                                                   |
| `strict`           | `boolean` | True     | Whether to use strict mode or not. True to only find a conversion that matches the specified material. False to fall back to finding a conversion for the specified units of measure that is not specific to any material if a material-specific conversion cannot be found. Default is false. |

## Returns

Returns a JSON representation of the unit of measure conversion. Returns nothing if no unit  of measure conversion is found.

## Code Examples

```python
# Retrieve a unit of measure conversion by the units of measure and the material ID.
uomc = system.mes.unitOfMeasure.getConversionFor('Pound', 'Kilogram', '01JCH3TP3Y-4B080WHN-MSR8RVP5', True)

# Output the unit of measure conversion
print(uomc)
```
