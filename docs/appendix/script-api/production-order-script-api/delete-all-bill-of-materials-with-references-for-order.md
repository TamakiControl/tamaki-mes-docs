---
sidebar_position: 42
title: "deleteAllBillOfMaterialsWithReferencesForOrder"
description: "Deletes all bill of materials given a production order object and any immediate references to the bill of materials if possible."
---

# system.mes.productionOrder.deleteAllBillOfMaterialsWithReferencesForOrder

## Description

Deletes all [Production Order Bill of Materials](../../data-model/production-order-model/production-order-bill-of-material) records associated with a production order ID.
Also deletes immediate references to the bill of materials if possible.

## Syntax

```python
system.mes.productionOrder.deleteAllBillOfMaterialsWithReferencesForOrder(productionOrderId)
```

## Parameters

| Parameter           | Type            | Description                                                       |
| ------------------- | --------------- | ----------------------------------------------------------------- |
| `productionOrderId` | `String` (ULID) | The ULID of the production order to delete all bill of materials. |

## Returns

If successful, no response is returned. If unsuccessful, an IllegalArgumentException or ConstraintViolationException is thrown.

## Code Examples

```python
# Delete all bill of materials for a given production order and all immediate references
system.mes.productionOrder.deleteAllBillOfMaterialsWithReferencesForOrder('01JPMTA7K3-E8EHA4MD-7C304P4Z')
```
