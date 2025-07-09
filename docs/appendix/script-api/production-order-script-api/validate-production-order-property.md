---
sidebar_position: 18
title: "validateProductionOrderProperty"
description: "Validates a production order property based on provided parameters."
---

# system.mes.productionOrder.validateProductionOrderProperty

## Description

Validates the specified parameters for a [Production Order Properties](../../data-model/production-order-model/production-order-property) record and returns any validation errors.
This only checks if the production order property object can be saved based on the attributes given, without actually creating or modifying the production order property. Use this function to verify your parameters before executing a save production order property operation.

## Syntax

```python
system.mes.productionOrder.validateProductionOrderProperty(**property_data)
```

## Parameters

| Parameter             | Type            | Description                                                                                                          |
| --------------------- | --------------- | -------------------------------------------------------------------------------------------------------------------- |
| `name`                | `String`        | The name of the production order property.                                                                           |
| `description`         | `String`        | A description of the production order property.                                                                      |
| `dataType`            | `String`        | The data type of the property (e.g., Integer, String, Float).                                                        |
| `lowLimit`            | `Double`        | The minimum value allowed for a numerical property.                                                                  |
| `highLimit`           | `Double`        | The maximum value allowed for a numerical property.                                                                  |
| `format`              | `String`        | The format of the property, if applicable.                                                                           |
| `unitOfMeasureId`     | `String` (ULID) | The ULID of the unit of measure for this production order property.                                                  |
| `unitOfMeasureName`   | `String`        | The name of the unit of measure for this production order property. For display purposes only.                       |
| `unitOfMeasureSymbol` | `String`        | The symbol of the unit of measure for this production order property. For display purposes only.                     |
| `options`             | `String`        | List of possible values for the property (e.g., `"[option1, option2]"`).                                             |
| `nullable`            | `Boolean`       | Defines if the property can accept null values.                                                                      |
| `defaultValue`        | `Mixed`         | The default value assigned to the property if none is provided. The type is mixed as it depends on what dataType is. |
| `id`                  | `String` (ULID) | The ULID of the production order property (optional, for updating an existing property).                             |
| `notes`               | `String`        | Notes related to the production order property.                                                                      |
| `enabled`             | `Boolean`       | Indicates if the property is active and enabled.                                                                     |
| `spare1`              | `String`        | Additional field for user-defined context.                                                                           |
| `spare2`              | `String`        | Additional field for user-defined context.                                                                           |
| `spare3`              | `String`        | Additional field for user-defined context.                                                                           |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new production order property object
production_order_property = system.mes.productionOrder.newProductionOrderProperty()

# Define production order property details
production_order_property['name'] = 'Batch Size'
production_order_property['description'] = 'Batch size property'
# (You can continue setting other properties as needed here)

# Validate production order property parameters
validation_errors = system.mes.productionOrder.validateProductionOrderProperty(**production_order_property)

if len(validation_errors) > 0:
    print('Validation errors found:', validation_errors)
else:
    print('Production order property parameters are valid.')
```
