---
sidebar_position: 22
title: "saveProductionOrderPropertyValue"
description: "Creates or updates a production order property value based on specified parameters."
---

# system.mes.productionOrder.saveProductionOrderPropertyValue

## Description

Creates or updates a [Production Order Property Values](../../data-model/production-order-model/production-order-property-value) record in the system based on the provided parameters.

## Syntax

```python
system.mes.productionOrder.saveProductionOrderPropertyValue(**propertyValueData)
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
newProductionOrder = system.mes.productionOrder.newProductionOrder()
newProductionOrder['productId'] = '01JCH3ENGW-82KJDZDR-JHGYCXQN'
newProductionOrder['name'] = 'Order001'
newProductionOrder['unitOfMeasureId'] = '01JCH3EPVP-1MNNDJTS-37Z75NGB'
savedProductionOrder = system.mes.productionOrder.saveProductionOrder(**newProductionOrder)

# Generate the object structure for a new production order property object
productionOrderProperty = system.mes.productionOrder.newProductionOrderProperty()
productionOrderProperty['name'] = 'Batch Size'
productionOrderProperty['description'] = 'Batch size property'
productionOrderProperty['dataType'] = 'Int'
savedProperty = system.mes.productionOrder.saveProductionOrderProperty(**productionOrderProperty)

# Generate the object structure for a new property value object with no initial arguments, set the production order ID and property ID and save it
newPropertyValue = system.mes.productionOrder.newProductionOrderPropertyValue()
newPropertyValue['productionOrderId'] = savedProductionOrder.id
newPropertyValue['propertyId'] = savedProperty.id
savedPropertyValue = system.mes.productionOrder.saveProductionOrderPropertyValue(**newPropertyValue)

# Output the JSON representation of the saved production order property value
print(savedPropertyValue)

# Generate the object structure for another new property value object to update the previous production order property value
propertyValueData = system.mes.productionOrder.newProductionOrderPropertyValue()
propertyValueData['id'] = savedPropertyValue.id
propertyValueData['dataType'] = 'Int' # Must be the same data type as the property
propertyValueData['value'] = 100

# Save the production order property value to update it in the system
updatedPropertyValue = system.mes.productionOrder.saveProductionOrderPropertyValue(**propertyValueData)

# Output the JSON representation of the updated production order property value
print(updatedPropertyValue)
```
