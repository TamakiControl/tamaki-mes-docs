---
sidebar_position: 14
title: "getProductionOrderPropertyOrCreateNew"
description: "Retrieves or creates a production order property by its ID or name depending on if it exists."
---

# system.mes.productionOrder.getProductionOrderPropertyOrCreateNew

## Description

Retrieves a [Production Order Properties](../../data-model/production-order-model/production-order-property) record if an existing production order property exists with the specified ID or name.
Otherwise, creates a new [Production Order Properties](../../data-model/production-order-model/production-order-property) record with the specified name and attributes.

## Syntax

```python
system.mes.productionOrder.getProductionOrderPropertyOrCreateNew(**property_data)
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
| `unitOfMeasureName`   | `String`        | The name of the unit of measure for the production order property. For display purposes only.                         |
| `unitOfMeasureSymbol` | `String`        | The symbol of the unit of measure for the production order property. For display purposes only.                         |
| `options`             | `String`        | List of possible values for the property (e.g., `"[option1, option2]"`).                                             |
| `nullable`            | `Boolean`       | Defines if the property can accept null values.                                                                      |
| `defaultValue`        | `Mixed`         | The default value assigned to the property if none is provided. The type is mixed as it depends on what dataType is. |
| `id`                  | `String` (ULID) | The ULID of the production order property (optional, for retrieving the existing property).                          |
| `notes`               | `String`        | Notes related to the production order property.                                                                      |
| `enabled`             | `Boolean`       | Indicates if the property is active and enabled.                                                                     |
| `spare1`              | `String`        | Additional field for user-defined context.                                                                           |
| `spare2`              | `String`        | Additional field for user-defined context.                                                                           |
| `spare3`              | `String`        | Additional field for user-defined context.                                                                           |

## Returns

Returns a JSON representation of the production order property.

## Code Examples

```python
# Generate the object structure for a new production order property object
production_order_property = system.mes.productionOrder.newProductionOrderProperty()

# Define property details
production_order_property['name'] = 'Batch Size'
production_order_property['description'] = 'Batch size property'
# (You can continue setting other properties as needed here)

# Get the property if it exists, otherwise creates it with the given attributes
property = system.mes.productionOrder.getProductionOrderPropertyOrCreateNew(**production_order_property)

# Output the JSON representation of the property
print(property)
```
