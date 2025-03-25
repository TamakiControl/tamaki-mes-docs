---
sidebar_position: 26
title: "getProductionOrderPropertyValuesForOrder"
description: "Retrieves a list of production order property values given a production order object."
---

# system.mes.productionOrder.getProductionOrderPropertyValuesForOrder

## Description

Retrieves a list of [Production Order Property Values](../../data-model/production-order-model/production-order-property-value) records associated with a production order ID.

## Syntax

```python
system.mes.productionOrder.getProductionOrderPropertyValuesForOrder(productionOrderId)
```

## Parameters

| Parameter           | Type            | Description                                                                        |
| ------------------- | --------------- | ---------------------------------------------------------------------------------- |
| `productionOrderId` | `String` (ULID) | The ULID of the production order to retrieve the production order property values. |

## Returns

Returns a list of JSON objects representing all production order property values associated with the given production order.

## Code Examples

```python
# Retrieves all production order property values for a given production order
property_values = system.mes.productionOrder.getProductionOrderPropertyValuesForOrder('01JPMTA7K3-E8EHA4MD-7C304P4Z')

# Output the list of production order property values
print(property_values)
```
