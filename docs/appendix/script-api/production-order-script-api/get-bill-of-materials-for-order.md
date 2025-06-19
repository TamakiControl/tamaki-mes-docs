---
sidebar_position: 35
title: "getBillOfMaterialsForOrder"
description: "Retrieves the bill of materials given a production order object."
---

# system.mes.productionOrder.getBillOfMaterialsForOrder

## Description

Retrieves the [Production Order Bill of Materials](../../data-model/production-order-model/production-order-bill-of-material) record associated with a production order ID or Name.

## Syntax

```python
system.mes.productionOrder.getBillOfMaterialsForOrder(productionOrderIdOrName)
```

## Parameters

| Parameter               | Type            | Description                                                         |
| ----------------------- | --------------- | ------------------------------------------------------------------- |
| `productionOrderIdOrName` | `String`      | The ID or Name of the production order to retrieve the bill of materials. |

## Returns

Returns a JSON representation of the bill of materials associated with the given production order.

## Code Examples

```python
# Retrieves the bill of materials for a given production order
bill_of_materials = system.mes.productionOrder.getBillOfMaterialsForOrder('01JPMTA7K3-E8EHA4MD-7C304P4Z')

# Output the bill of materials
print(bill_of_materials)
```
