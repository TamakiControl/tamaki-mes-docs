---
sidebar_position: 26
title: "getConversion"
description: "Retrieves the unit of measure conversion with the given ID."
---

# system.mes.unitOfMeasure.getConversion

## Description

Retrieves a [Unit Of Measure Conversions](../../data-model/utility-models/unit-of-measure-model/unit-of-measure-conversion) record by its ID.

## Syntax

```python
system.mes.unitOfMeasure.getConversion(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                                           |
|-----------|-----------------|----------|-------------------------------------------------------|
| `id`      | `String` (ULID) | False    | The ID of the unit of measure conversion to retrieve. |

## Returns

Returns a JSON representation of the unit of measure conversion. Returns nothing if no unit of measure conversion is found.

| Name               | Type            | Description                                                              |
|--------------------|-----------------|--------------------------------------------------------------------------|
| `fromId`           | `String` (ULID) | The unit of measure the conversion is converting from.                   |
| `toId`             | `String` (ULID) | The unit of measure the conversion is converting to.                     |
| `conversionFactor` | `Double`        | The number used to change the unit of measure from one set to the other. |
| `materialId`       | `String` (ULID) | The material associated with the unit of measure conversion.             |
| `id`               | `String` (ULID) | The ULID of the unit of measure conversion.                              |
| `notes`            | `String`        | Notes related to the unit of measure conversion.                         |
| `enabled`          | `Boolean`       | Indicates if the unit of measure conversion is active and enabled.       |
| `spare1`           | `String`        | Additional field for user-defined context.                               |
| `spare2`           | `String`        | Additional field for user-defined context.                               |
| `spare3`           | `String`        | Additional field for user-defined context.                               |

## Code Examples

```python
# Retrieve a unit of measure conversion by ID
uomc = system.mes.unitOfMeasure.getConversion('01JDMG34NA-3B7BF1C1-W89E99PW')

# Output the unit of measure conversion
print(uomc)
```
