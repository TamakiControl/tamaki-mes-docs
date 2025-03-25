---
sidebar_position: 21
title: "newProductionOrderPropertyValue"
description: "Generates an empty non-persisted production order property values object to provide the structure to save a new record into the database."
---

# system.mes.productionOrder.newProductionOrderPropertyValue

## Description

Generates an empty non-persisted [Production Order Property Values](../../data-model/production-order-model/production-order-property-value) object to provide the structure required by the API
to save a new record into the database. This method must be combined with the [saveProductionOrderPropertyValue](./save-production-order-property-value) method in order to persist the record.

## Syntax

```python
system.mes.productionOrder.newProductionOrderPropertyValue()
```

## Parameters

| Parameter | Type | Description                               |
| --------- | ---- | ----------------------------------------- |
| None      | -    | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created production order property value object. The following is a list of keys and default values:

| Key                 | Default Value |
| ------------------- | ------------- |
| `productionOrderId` | `null`        |
| `propertyId`        | `null`        |
| `dataType`          | `String`      |
| `value`             | `null`        |
| `id`                | `null`        |
| `notes`             | `null`        |
| `enabled`           | `true`        |
| `spare1`            | `null`        |
| `spare2`            | `null`        |
| `spare3`            | `null`        |

## Code Examples

```python
# Generate the object structure for a new production order object with no initial arguments
new_production_order = system.mes.productionOrder.newProductionOrder()
new_production_order['productId'] = '01JCH3ENGW-82KJDZDR-JHGYCXQN'
new_production_order['name'] = 'Order001'
new_production_order['unitOfMeasureId'] = '01JCH3EPVP-1MNNDJTS-37Z75NGB'
saved_production_order = system.mes.productionOrder.saveProductionOrder(**new_production_order)

# Generate the object structure for a new production order property object with no initial arguments
production_order_property = system.mes.productionOrder.newProductionOrderProperty()
production_order_property['name'] = 'Batch Size'
production_order_property['description'] = 'Batch size property'
saved_property = system.mes.productionOrder.saveProductionOrderProperty(**production_order_property)

# Generate the object structure for a new property value object with no initial arguments
new_property_value = system.mes.productionOrder.newProductionOrderPropertyValue()

# Define property value details
new_property_value['productionOrderId'] = saved_production_order.id
new_property_value['propertyId'] = saved_property.id
# (You can continue setting other properties as needed here)

# Save the property value
saved_property_value = system.mes.productionOrder.saveProductionOrderPropertyValue(**new_property_value)

# Output the JSON representation of the saved production order property value
print(saved_property_value)
```
