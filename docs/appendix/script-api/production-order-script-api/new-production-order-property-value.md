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

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created production order property value object. The following is a list of keys and default values:

| Key                 | Default Value |
|---------------------|---------------|
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
newProductionOrder = system.mes.productionOrder.newProductionOrder()
newProductionOrder['productId'] = '01JCH3ENGW-82KJDZDR-JHGYCXQN'
newProductionOrder['name'] = 'Order001'
newProductionOrder['unitOfMeasureId'] = '01JCH3EPVP-1MNNDJTS-37Z75NGB'
savedProductionOrder = system.mes.productionOrder.saveProductionOrder(**newProductionOrder)

# Generate the object structure for a new production order property object with no initial arguments
productionOrderProperty = system.mes.productionOrder.newProductionOrderProperty()
productionOrderProperty['name'] = 'Batch Size'
productionOrderProperty['description'] = 'Batch size property'
savedProperty = system.mes.productionOrder.saveProductionOrderProperty(**productionOrderProperty)

# Generate the object structure for a new property value object with no initial arguments
newPropertyValue = system.mes.productionOrder.newProductionOrderPropertyValue()

# Define property value details
newPropertyValue['productionOrderId'] = savedProductionOrder.id
newPropertyValue['propertyId'] = savedProperty.id
# (You can continue setting other properties as needed here)

# Save the property value
savedPropertyValue = system.mes.productionOrder.saveProductionOrderPropertyValue(**newPropertyValue)

# Output the JSON representation of the saved production order property value
print(savedPropertyValue)
```
