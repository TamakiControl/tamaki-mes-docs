---
sidebar_position: 3
title: "saveUnitOfMeasure"
description: "Creates or updates a unit of measure with specified parameters."
---

# system.mes.unitOfMeasure.saveUnitOfMeasure

## Description

Creates or updates a [Units Of Measure](../../data-model/utility-models/unit-of-measure-model/unit-of-measure) record in the system based on the provided parameters.

## Syntax

```python
system.mes.unitOfMeasure.saveUnitOfMeasure(**uomData)
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

Returns a JSON representation of the saved unit of measure.

## Code Examples

```python
# Generate the object structure for a new unit of measure object, set the parameters and save it
newUom = system.mes.unitOfMeasure.newUnitOfMeasure()
newUom['name'] = 'Pound'
newUom['symbol'] = 'lb'
savedUom = system.mes.unitOfMeasure.saveUnitOfMeasure(**newUom)

# Output the JSON representation of the saved unit of measure
print(savedUom)

# Generate the object structure for another new unit of measure object to update the previous unit of measure
uomData = system.mes.unitOfMeasure.newUnitOfMeasure()

# Set basic attributes for the updated unit of measure
uomData['id'] = savedUom.id
uomData['name'] = 'Pound'
uomData['symbol'] = 'lb'
uomData['notes'] = 'The weight'
# (You can continue setting other properties as needed here)

# Save the unit of measure to update it in the system
updatedUom = system.mes.unitOfMeasure.saveUnitOfMeasure(**uomData)

# Output the JSON representation of the updated unit of measure
print(updatedUom)
```
