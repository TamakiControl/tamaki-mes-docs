---
sidebar_position: 22
title: "saveProductionOrderPropertyValue"
description: "Creates or updates a production order property value based on specified parameters."
---

# system.mes.productionOrder.saveProductionOrderPropertyValue

## Description

Creates or updates a [Production Order Property Values](../../data-model/production-order-model/production-order-property-value) record in the system based on the provided parameters.


## Permissions

This method requires the `PRODUCTION_ORDER.WRITE.SAVE` permission.

## Syntax

```python
system.mes.productionOrder.saveProductionOrderPropertyValue(**property_value_data)
```

## Parameters

| Parameter           | Type            | Nullable | Description                                                                                                        |
|---------------------|-----------------|----------|--------------------------------------------------------------------------------------------------------------------|
| `productionOrderId` | `String` (ULID) | False    | The ULID of the production order.                                                                                  |
| `propertyId`        | `String` (ULID) | False    | The ULID of the production order property.                                                                         |
| `dataType`          | `String`        | True     | The data type of the property value. Must be the same as the data type of the property. Default value is `String`  |
| `value`             | `Mixed`         | True     | The value assigned to the property value if none is provided. The type is mixed as it depends on what dataType is. |
| `id`                | `String` (ULID) | True     | The ULID of the production order property value (optional, for updating an existing property).                     |
| `notes`             | `String`        | True     | Notes related to the production order property value.                                                              |
| `enabled`           | `Boolean`       | True     | Indicates if the property value is active and enabled. Default value is `true`                                     |
| `spare1`            | `String`        | True     | Additional field for user-defined context.                                                                         |
| `spare2`            | `String`        | True     | Additional field for user-defined context.                                                                         |
| `spare3`            | `String`        | True     | Additional field for user-defined context.                                                                         |

## Returns

Returns a JSON representation of the saved production order property value.

## Code Examples

```python
# Generate the object structure for a new production order object
new_production_order = system.mes.productionOrder.newProductionOrder()
new_production_order['productId'] = '01JCH3ENGW-82KJDZDR-JHGYCXQN'
new_production_order['name'] = 'Order001'
new_production_order['unitOfMeasureId'] = '01JCH3EPVP-1MNNDJTS-37Z75NGB'
saved_production_order = system.mes.productionOrder.saveProductionOrder(**new_production_order)

# Generate the object structure for a new production order property object
production_order_property = system.mes.productionOrder.newProductionOrderProperty()
production_order_property['name'] = 'Batch Size'
production_order_property['description'] = 'Batch size property'
production_order_property['dataType'] = 'Int'
saved_property = system.mes.productionOrder.saveProductionOrderProperty(**production_order_property)

# Generate the object structure for a new property value object with no initial arguments, set the production order ID and property ID and save it
new_property_value = system.mes.productionOrder.newProductionOrderPropertyValue()
new_property_value['productionOrderId'] = saved_production_order.id
new_property_value['propertyId'] = saved_property.id
saved_property_value = system.mes.productionOrder.saveProductionOrderPropertyValue(**new_property_value)

# Output the JSON representation of the saved production order property value
print(saved_property_value)

# Generate the object structure for another new property value object to update the previous production order property value
property_value_data = system.mes.productionOrder.newProductionOrderPropertyValue()
property_value_data['id'] = saved_property_value.id
property_value_data['dataType'] = 'Int' # Must be the same data type as the property
property_value_data['value'] = 100

# Save the production order property value to update it in the system
updated_property_value = system.mes.productionOrder.saveProductionOrderPropertyValue(**property_value_data)

# Output the JSON representation of the updated production order property value
print(updated_property_value)
```
