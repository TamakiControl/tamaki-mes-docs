---
sidebar_position: 20
title: "deleteProductionOrderPropertyWithReferences"
description: "Deletes the production order property with the given ID and any immediate references to this property if possible."
---

# system.mes.productionOrder.deleteProductionOrderPropertyWithReferences

## Description

Deletes a [Production Order Properties](../../data-model/production-order-model/production-order-property) record by its ID.
Also deletes immediate references to this property if possible.

## Syntax

```python
system.mes.productionOrder.deleteProductionOrderPropertyWithReferences(id)
```

## Parameters

| Parameter  | Type     | Description                                                |
| ---------- | -------- | ---------------------------------------------------------- |
| `idOrName` | `String` | The ID or name of the production order property to delete. |

## Returns

If successful, no response is returned. If unsuccessful, an IllegalArgumentException or ConstraintViolationException is thrown.

## Code Examples

```python
# Delete a production order property by ID and all immediate references
system.mes.productionOrder.deleteProductionOrderPropertyWithReferences('01JPQKDYTM-1G81VA08-3QS948DK')
```
