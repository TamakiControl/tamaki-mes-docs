---
sidebar_position: 27
title: 'convert'
description: 'Converts the specified amount from one unit of measure to the other.'
---

# system.mes.unitOfMeasure.convert

## Description

Converts the specified amount from one unit of measure to the other.

## Permissions

This method requires the `UNIT_OF_MEASURE.READ.GET` permission.

## Syntax

```python
system.mes.unitOfMeasure.convert(amount, from, to)
system.mes.unitOfMeasure.convert(amount, from, to, materialIdOrPath)
```

## Parameters

### Method 1: Convert without material context

| Parameter | Type     | Nullable | Description                                   |
| --------- | -------- | -------- | --------------------------------------------- |
| `amount`  | `Double` | False    | The amount to convert.                        |
| `from`    | `String` | False    | The ULID or name of the from unit of measure. |
| `to`      | `String` | False    | The ULID or name of the to unit of measure.   |

### Method 2: Convert with material context

| Parameter          | Type     | Nullable | Description                                                      |
| ------------------ | -------- | -------- | ---------------------------------------------------------------- |
| `amount`           | `Double` | False    | The amount to convert.                                           |
| `from`             | `String` | False    | The ULID or name of the from unit of measure.                    |
| `to`               | `String` | False    | The ULID or name of the to unit of measure.                      |
| `materialIdOrPath` | `String` | False    | The ULID or path of the material associated with the conversion. |

## Returns

Returns the amount converted.

## Example Usage

```python
# Convert the specified amount from one unit of measure to the other.
converted_amount = system.mes.unitOfMeasure.convert(100, 'Pound', 'Kg')

# Output the amount converted to new unit of measure
print(converted_amount)
```
