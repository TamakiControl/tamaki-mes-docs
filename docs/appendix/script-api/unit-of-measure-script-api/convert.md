---
sidebar_position: 27
title: "convert"
description: "Converts the specified amount from one unit of measure to the other."
---

# system.mes.unitOfMeasure.convert

## Description

Converts the specified amount from one unit of measure to the other.

## Syntax

```python
system.mes.unitOfMeasure.convert(amount, from, to)
system.mes.unitOfMeasure.convert(amount, from, to, materialIdOrPath)
```

## Parameters

| Parameter          | Type     | Description                                                      |
| ------------------ | -------- | ---------------------------------------------------------------- |
| `amount`           | `Double` | The amount to convert.                                           |
| `from`             | `String` | The ULID or name of the from unit of measure to check.           |
| `to`               | `String` | The ULID or name of the to unit of measure to check.             |
| `materialIdOrPath` | `String` | The ULID or path of the material associated with the conversion. |

## Returns

Returns the amount converted.

## Example Usage

```python
# Convert the specified amount from one unit of measure to the other.
converted_amount = system.mes.unitOfMeasure.convert(100, 'Pound', 'Kg')

# Output the amount converted to new unit of measure
print(converted_amount)
```
