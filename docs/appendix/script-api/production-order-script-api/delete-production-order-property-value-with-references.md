---
sidebar_position: 31
title: "deleteProductionOrderPropertyValueWithReferences"
description: "Deletes the production order property value with the given ID and any immediate references to this property value if possible."
---

# system.mes.productionOrder.deleteProductionOrderPropertyValueWithReferences

## Description

Deletes a [Production Order Property Values](../../data-model/production-order-model/production-order-property-value) record by its ID.
Also deletes immediate references to this production order property value if possible.

## Syntax

```python
system.mes.productionOrder.deleteProductionOrderPropertyValueWithReferences(id)
```

## Parameters

| Parameter | Type            | Description                                              |
| --------- | --------------- | -------------------------------------------------------- |
| `id`      | `String` (ULID) | The ID of the production order property value to delete. |

## Returns

If successful, no response is returned. If unsuccessful, an IllegalArgumentException or ConstraintViolationException is thrown.

## Code Examples

```python
# Delete a production order property value by ID
system.mes.productionOrder.deleteProductionOrderPropertyValueWithReferences('01JQ2AN7CQ-MWR6A9M0-FQSEAHTJ')
```
