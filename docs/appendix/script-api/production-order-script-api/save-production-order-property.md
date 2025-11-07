---
sidebar_position: 13
title: "saveProductionOrderProperty"
description: "Creates or updates a production order property with specified parameters."
---

# system.mes.productionOrder.saveProductionOrderProperty

## Description

Creates or updates a [Production Order Properties](../../data-model/production-order-model/production-order-property) record in the system based on the provided parameters.

## Syntax

```python
system.mes.productionOrder.saveProductionOrderProperty(**property_data)
```

## Parameters

| Parameter             | Type            | Nullable | Description                                                                                                          |
|-----------------------|-----------------|----------|----------------------------------------------------------------------------------------------------------------------|
| `name`                | `String`        | False    | The name of the production order property.                                                                           |
| `description`         | `String`        | True     | A description of the production order property.                                                                      |
| `dataType`            | `String`        | False    | The data type of the property (e.g., Integer, String, Float). Default value is `String`                              |
| `lowLimit`            | `Double`        | True     | The minimum value allowed for a numerical property.                                                                  |
| `highLimit`           | `Double`        | True     | The maximum value allowed for a numerical property.                                                                  |
| `format`              | `String`        | True     | The format of the property, if applicable.                                                                           |
| `unitOfMeasureId`     | `String` (ULID) | True     | The ULID of the unit of measure for this production order property.                                                  |
| `unitOfMeasureName`   | `String`        | True     | The name of the unit of measure for this production order property. For display purposes only.                       |
| `unitOfMeasureSymbol` | `String`        | True     | The symbol of the unit of measure for this production order property. For display purposes only.                     |
| `options`             | `String`        | True     | List of possible values for the property (e.g., `"[option1, option2]"`).                                             |
| `nullable`            | `Boolean`       | False    | Defines if the property can accept null values. Default value is `false`                                             |
| `defaultValue`        | `Mixed`         | True     | The default value assigned to the property if none is provided. The type is mixed as it depends on what dataType is. |
| `id`                  | `String` (ULID) | True     | The ULID of the production order property (optional, for updating an existing property).                             |
| `notes`               | `String`        | True     | Notes related to the production order property.                                                                      |
| `enabled`             | `Boolean`       | True     | Indicates if the property is active and enabled. Default value is `true`                                             |
| `spare1`              | `String`        | True     | Additional field for user-defined context.                                                                           |
| `spare2`              | `String`        | True     | Additional field for user-defined context.                                                                           |
| `spare3`              | `String`        | True     | Additional field for user-defined context.                                                                           |

## Returns

Returns a JSON representation of the saved production order property.

## Code Examples

```python
# Generate the object structure for a new production order property object, set the name and save it
new_property = system.mes.productionOrder.newProductionOrderProperty()
new_property['name'] = 'Batch Size'
saved_property = system.mes.productionOrder.saveProductionOrderProperty(**new_property)

# Output the JSON representation of the saved production order property
print(saved_property)

# Generate the object structure for another new property object to update the previous property
production_order_property = system.mes.productionOrder.newProductionOrderProperty()

# Define property attributes
production_order_property['id'] = saved_property.id
production_order_property['name'] = 'Batch Size'
production_order_property['description'] = 'Batch size property'
# (You can continue setting other properties as needed here)

# Save the production order property to update it in the system
updated_property = system.mes.productionOrder.saveProductionOrderProperty(**production_order_property)

# Output the JSON representation of the updated production order property
print(updated_property)
```
