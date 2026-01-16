---
sidebar_position: 10
title: "validateUnitOfMeasure"
description: "Validates the specified parameters for a unit of measure."
---

# system.mes.unitOfMeasure.validateUnitOfMeasure

## Description

Validates the specified parameters for a [Units Of Measure](../../data-model/utility-models/unit-of-measure-model/unit-of-measure) record and returns any validation errors.
This only checks if the unit of measure object can be saved based on the attributes given, without actually creating or modifying the unit of measure. Use this function to verify your parameters before executing a save unit of measure operation.

## Syntax

```python
system.mes.unitOfMeasure.validateUnitOfMeasure(**uomData)
```

## Parameters

| Parameter | Type            | Nullable | Description                                                                                |
|-----------|-----------------|----------|--------------------------------------------------------------------------------------------|
| `name`    | `String`        | False    | The name of the unit of measure.                                                           |
| `symbol`  | `String`        | False    | The symbol of the unit of measure.                                                         |
| `id`      | `String` (ULID) | True     | The ULID of the unit of measure (optional, used for updating an existing unit of measure). |
| `notes`   | `String`        | True     | Notes related to the unit of measure.                                                      |
| `enabled` | `Boolean`       | True     | Indicates if the unit of measure is active and enabled. Default value is `true`            |
| `spare1`  | `String`        | True     | Additional field for user-defined context.                                                 |
| `spare2`  | `String`        | True     | Additional field for user-defined context.                                                 |
| `spare3`  | `String`        | True     | Additional field for user-defined context.                                                 |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new unit of measure object
uomData = system.mes.unitOfMeasure.newUnitOfMeasure()

# Set basic attributes for the new unit of measure
uomData['name'] = 'Pound'
uomData['symbol'] = 'lb'
# (You can continue setting other properties as needed here)

# Validate unit of measure parameters
validationErrors = system.mes.unitOfMeasure.validateUnitOfMeasure(**uomData)

if len(validationErrors) > 0:
    print('Validation errors found:', validationErrors)
else:
    print('Unit of measure parameters are valid.')
```
