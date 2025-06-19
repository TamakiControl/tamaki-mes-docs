---
sidebar_position: 23
title: "setPropertyValue"
description: "Updates the value of a production order property value given a production order object and a property object."
---

# system.mes.productionOrder.setPropertyValue

## Description

Updates the value of a [Production Order Property Values](../../data-model/production-order-model/production-order-property-value) record given
a production order ID or name and a property ID or name.

## Syntax

```python
system.mes.productionOrder.setPropertyValue(productionOrderIdOrName, propertyIdOrName, value)
```

## Parameters

| Parameter                 | Type      | Description                                                                                                                          |
|---------------------------|-----------|--------------------------------------------------------------------------------------------------------------------------------------|
| `productionOrderIdOrName` | `String`  | The ULID or name of the production order.                                                                                            |
| `propertyIdOrName`        | `String`  | The ULID or name of the property for which the value is retrieved.                                                                   |
| `value`                   | `Mixed`   | The value assigned to the property value if none is provided. The type is mixed as it depends on what the data type of the property. |

## Returns

Returns a JSON representation of the updated production order property value.

## Code Examples

```python
# Update the value of a production order property value
updated_property_value = system.mes.productionOrder.setPropertyValue('01JPMTA7K3-E8EHA4MD-7C304P4Z', 'Batch Size', 200)

# Output the JSON representation of the updated production order property value
print(updated_property_value)
```
