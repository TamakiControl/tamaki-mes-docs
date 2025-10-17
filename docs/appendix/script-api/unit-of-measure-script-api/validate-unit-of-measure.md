---
sidebar_position: 10
title: 'validateUnitOfMeasure'
description: 'Validates the specified parameters for a unit of measure.'
---

# system.mes.unitOfMeasure.validateUnitOfMeasure

## Description

Validates the specified parameters for a [Units Of Measure](../../data-model/utility-models/unit-of-measure-model/unit-of-measure) record and returns any validation errors.
This only checks if the unit of measure object can be saved based on the attributes given, without actually creating or modifying the unit of measure. Use this function to verify your parameters before executing a save unit of measure operation.

## Permissions

This method requires the `UNIT_OF_MEASURE.READ.VALIDATE` permission.

## Syntax

```python
system.mes.unitOfMeasure.validateUnitOfMeasure(**uom_data)
```

## Parameters

| Parameter | Type            | Nullable | Description                                                                                |
| --------- | --------------- | -------- | ------------------------------------------------------------------------------------------ |
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
uom_data = system.mes.unitOfMeasure.newUnitOfMeasure()

# Set basic attributes for the new unit of measure
uom_data['name'] = 'Pound'
uom_data['symbol'] = 'lb'
# (You can continue setting other properties as needed here)

# Validate unit of measure parameters
validation_errors = system.mes.unitOfMeasure.validateUnitOfMeasure(**uom_data)

if len(validation_errors) > 0:
    print('Validation errors found:', validation_errors)
else:
    print('Unit of measure parameters are valid.')
```
