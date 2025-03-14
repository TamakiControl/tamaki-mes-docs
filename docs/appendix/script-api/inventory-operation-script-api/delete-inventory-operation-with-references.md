---
sidebar_position: 11
title: "deleteInventoryOperationWithReferences"
description: "Deletes the inventory operation with the given ID and any immediate references to this inventory operation if possible."
---

# system.mes.inventory.operation.deleteInventoryOperationWithReferences

## Description

Deletes an [Inventory Operations](../../data-model/inventory-model/inventory-operation) record by its ID.
Also deletes immediate references to this inventory operation if possible.

## Syntax

```python
system.mes.inventory.operation.deleteInventoryOperationWithReferences(id)
```

## Parameters

| Parameter | Type            | Description                                     |
| --------- | --------------- | ----------------------------------------------- |
| `id`      | `String` (ULID) | The ID of the inventory operations to retrieve. |

## Returns

If successful, no response is returned. If unsuccessful, an IllegalArgumentException or ConstraintViolationException is thrown.

## Code Examples

```python
# Delete an inventory operation by ID and all immediate references
system.mes.inventory.operation.deleteInventoryOperationWithReferences('01JPAND53P-BZ61RZHZ-V7C6EEHG')
```
