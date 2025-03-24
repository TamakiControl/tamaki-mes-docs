---
sidebar_position: 40
title: "deleteBillOfMaterialsWithReferences"
description: "Deletes the bill of materials with the given ID and any immediate references to this bill of materials if possible."
---

# system.mes.productionOrder.deleteBillOfMaterialsWithReferences

## Description

Deletes a [Production Order Bill of Materials](../../data-model/production-order-model/production-order-bill-of-material) record by its ID.
Also deletes immediate references to this bill of materials if possible.

## Syntax

```python
system.mes.productionOrder.deleteBillOfMaterialsWithReferences(id)
```

## Parameters

| Parameter | Type            | Description                                |
| --------- | --------------- | ------------------------------------------ |
| `id`      | `String` (ULID) | The ID of the bill of materials to delete. |

## Returns

If successful, no response is returned. If unsuccessful, an IllegalArgumentException or ConstraintViolationException is thrown.

## Code Examples

```python
# Delete a bill of materials by ID and all immediate references
system.mes.productionOrder.deleteBillOfMaterialsWithReferences('01JQ31CZMB-E7QA782B-5B521H4M')
```
