---
sidebar_position: 41
title: "deleteBillOfMaterialsForOrder"
description: "Deletes all bill of materials given a production order object."
---

# system.mes.productionOrder.deleteBillOfMaterialsForOrder

## Description

Deletes all [Production Order Bill of Materials](../../data-model/production-order-model/production-order-bill-of-material) records associated with a production order ID.
This cannot delete any bill of materials with references to it.

## Syntax

```python
system.mes.productionOrder.deleteBillOfMaterialsForOrder(productionOrderId)
```

## Parameters

| Parameter           | Type            | Description                                                       |
| ------------------- | --------------- | ----------------------------------------------------------------- |
| `productionOrderId` | `String` (ULID) | The ULID of the production order to delete all bill of materials. |

## Returns

If successful, an ApiResponse Object is returned with the success bool set True. If unsuccessful, an InUseException, IllegalArgumentException or ConstraintViolationException is thrown.
If the bill of materials that's being deleted has a reference, an ApiResponse Object is returned with details about the encountered error.

| Name      | Type      | Description                                                 |
| --------- | --------- | ----------------------------------------------------------- |
| `success` | `Boolean` | Indicates if the delete was successful.                     |
| `message` | `String`  | The reason why the deletion was successful or unsuccessful. |
| `data`    | `String`  | The data associated with the deletion.                      |
| `error`   | `String`  | The errors associated with the deletion.                    |

## Code Examples

```python
# Delete all bill of materials for a given production order
system.mes.productionOrder.deleteBillOfMaterialsForOrder('01JPMTA7K3-E8EHA4MD-7C304P4Z')
```
