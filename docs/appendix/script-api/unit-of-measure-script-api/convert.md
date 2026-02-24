---
sidebar_position: 27
title: "convert"
description: "Converts the specified amount from one unit of measure to the other."
---

# system.mes.unitOfMeasure.convert

## Description

Converts the specified amount from one unit of measure to the other.There are a few cases that can happen where the return is not straightforward, so the behavior is as follows:
- If a conversion is found that matches the from and to units of measure and the material, that converted value is returned.
- If a conversion going in the opposite direction is found that matches the from and to units of measure and the material, that conversion is used with the conversion factor inverted (1/conversionFactor).
- If no direct conversion is found but a path of conversions can be found that matches the from and to units of measure and the material, then the path with the fewest number of conversions is used to calculate the conversion factor and that conversion is returned.
- If none of the above cases find a valid conversion for the material and the **strict parameter is false**, then the strategy above is attempted again with a null material to try find a generic conversion if one exists.
- If no conversion is found in any of the above cases, then a ResourceNotFoundException is thrown that can be caught in the python script using try/except.

## Syntax

```python
system.mes.unitOfMeasure.convert(amount, fromIdOrName, toIdOrName)
system.mes.unitOfMeasure.convert(amount, fromIdOrName, toIdOrName, materialIdOrPath)
system.mes.unitOfMeasure.convert(amount, fromIdOrName, toIdOrName, materialIdOrPath, strict)
```

## Parameters

| Parameter          | Type     | Nullable | Description                                                                                                                                                                                                                                                                                    |
|--------------------|----------|----------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `amount`           | `Double` | False    | The amount to convert.                                                                                                                                                                                                                                                                         |
| `fromIdOrName`     | `String`  | False    | The ULID or name of the from unit of measure to check.                                                                                                                                                                                                                                         |
| `toIdOrName`       | `String`  | False    | The ULID or name of the to unit of measure to check.                                                                                                                                                                                                                                           |
| `materialIdOrPath` | `String`  | True     | The ULID or path the material associated with the conversion.                                                                                                                                                                                                                                  |
| `strict`           | `boolean` | True     | Whether to use strict mode or not. True to only find a conversion that matches the specified material. False to fall back to finding a conversion for the specified units of measure that is not specific to any material if a material-specific conversion cannot be found. Default is false. |

## Returns

Returns the amount converted.

## Example Usage

```python
# Convert the specified amount from one unit of measure to the other.
convertedAmount = system.mes.unitOfMeasure.convert(100, 'Pound', 'Kg', '01JCH3TP3Y-4B080WHN-MSR8RVP5', True)

# Output the amount converted to new unit of measure
print(convertedAmount)
```
