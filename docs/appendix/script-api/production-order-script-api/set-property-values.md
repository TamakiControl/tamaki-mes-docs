---
sidebar_position: 24
title: "setPropertyValues"
description: "Updates the values of all production order property values given a production order object."
---

# system.mes.productionOrder.setPropertyValues

## Description

Updates the values of all [Production Order Property Values](../../data-model/production-order-model/production-order-property-value) records given
a production order ID or name.

## Syntax

```python
system.mes.productionOrder.setPropertyValues(productionOrderIdOrName, values)
```

## Parameters

| Parameter                 | Type     | Nullable | Description                                                                                                                            |
|---------------------------|----------|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| `productionOrderIdOrName` | `String` | False    | The ULID or name of the production order.                                                                                              |
| `values`                  | `Mixed`  | False    | The values assigned to the property values if none is provided. The type is mixed as it depends on what the data type of the property. |

<!-- TODO: Get clarification -->
<!-- ## Returns

Returns a JSON representation of the updated production order property value.

## Code Examples

```python
# Update the value of a production order property value
updated_property_value = system.mes.productionOrder.setPropertyValue('01JPMTA7K3-E8EHA4MD-7C304P4Z', 'Batch Size', 200)

# Output the JSON representation of the updated production order property value
print(updated_property_value)
``` -->
