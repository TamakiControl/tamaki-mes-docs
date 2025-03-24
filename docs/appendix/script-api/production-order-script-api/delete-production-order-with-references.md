---
sidebar_position: 11
title: "deleteProductionOrderWithReferences"
description: "Deletes the production order with the given ID and any immediate references to this production order if possible."
---

# system.mes.productionOrder.deleteProductionOrderWithReferences

## Description

Deletes a [Production Orders](../../data-model/production-order-model/production-order) record by its ID.
Also deletes immediate references to this production order if possible.

## Syntax

```python
system.mes.productionOrder.deleteProductionOrderWithReferences(id)
```

## Parameters

| Parameter | Type            | Description                               |
| --------- | --------------- | ----------------------------------------- |
| `id`      | `String` (ULID) | The ID of the production order to delete. |

## Returns

If successful, no response is returned. If unsuccessful, an IllegalArgumentException or ConstraintViolationException is thrown.

## Code Examples

```python
# Delete a production order by ID and all immediate references
system.mes.productionOrder.deleteProductionOrderWithReferences('01JPMTA7K3-E8EHA4MD-7C304P4Z')
```
