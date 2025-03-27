---
sidebar_position: 57
title: "deleteLotWithReferences"
description: "Deletes the inventory lot with the given ID and any immediate references to this inventory lot if possible."
---

# system.mes.inventory.deleteLotWithReferences

## Description

Deletes an [Inventory Lots](../../data-model/inventory-model/inventory-lot) record by its ID.
Also deletes immediate references to this inventory lot if possible.

## Syntax

```python
system.mes.inventory.deleteLotWithReferences(id)
```

## Parameters

| Parameter | Type            | Description                               |
| --------- | --------------- | ----------------------------------------- |
| `id`      | `String` (ULID) | The ID of the inventory lots to retrieve. |

## Returns

If successful, no response is returned. If unsuccessful, an IllegalArgumentException or ConstraintViolationException is thrown.

## Code Examples

```python
# Delete a inventory lot by ID and all immediate references
system.mes.inventory.deleteLotWithReferences('01JE6F0CE9-T94PZD8R-TH9J01TJ')
```
