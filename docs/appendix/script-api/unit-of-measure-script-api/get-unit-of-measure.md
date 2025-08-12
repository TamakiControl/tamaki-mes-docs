---
sidebar_position: 7
title: "getUnitOfMeasure"
description: "Retrieves the unit of measure with the given ID or name."
---

# system.mes.unitOfMeasure.getUnitOfMeasure

## Description

Retrieves a [Units Of Measure](../../data-model/utility-models/unit-of-measure-model/unit-of-measure) record by its ID or name.

## Syntax

```python
system.mes.unitOfMeasure.getUnitOfMeasure(idOrName)
```

## Parameters

| Parameter  | Type     | Nullable | Description                                        |
|------------|----------|----------|----------------------------------------------------|
| `idOrName` | `String` | False    | The ID or name of the unit of measure to retrieve. |

## Returns

Returns a JSON representation of the unit of measure. Returns nothing if no unit of measure is found.

| Name      | Type            | Description                                             |
|-----------|-----------------|---------------------------------------------------------|
| `name`    | `String`        | The name of the unit of measure.                        |
| `symbol`  | `String`        | The symbol of the unit of measure.                      |
| `id`      | `String` (ULID) | The ULID of the unit of measure.                        |
| `notes`   | `String`        | Notes related to the unit of measure.                   |
| `enabled` | `Boolean`       | Indicates if the unit of measure is active and enabled. |
| `spare1`  | `String`        | Additional field for user-defined context.              |
| `spare2`  | `String`        | Additional field for user-defined context.              |
| `spare3`  | `String`        | Additional field for user-defined context.              |

## Code Examples

```python
# Retrieve a unit of measure by ID or name
uom = system.mes.unitOfMeasure.getUnitOfMeasure('Pound')

# Output the unit of measure
print(uom)
```
