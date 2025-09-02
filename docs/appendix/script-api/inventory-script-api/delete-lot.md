---
sidebar_position: 56
title: "deleteLot"
description: "Deletes the inventory lot with the given ID."
---

# system.mes.inventory.deleteLot

## Description

Deletes an [Inventory Lots](../../data-model/inventory-model/inventory-lot) record by its ID.
This cannot delete a inventory lot with references to it.

## Syntax

```python
system.mes.inventory.deleteLot(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                               |
|-----------|-----------------|----------|-------------------------------------------|
| `id`      | `String` (ULID) | False    | The ID of the inventory lots to retrieve. |

## Returns

If successful, an ApiResponse Object is returned with the success bool set True. If unsuccessful, an InUseException, IllegalArgumentException or ConstraintViolationException is thrown.
If the inventory lot that's being deleted has a reference, an ApiResponse Object is returned with details about the encountered error.

| Name      | Type      | Description                                                 |
|-----------|-----------|-------------------------------------------------------------|
| `success` | `Boolean` | Indicates if the delete was successful.                     |
| `message` | `String`  | The reason why the deletion was successful or unsuccessful. |
| `data`    | `String`  | The data associated with the deletion.                      |
| `error`   | `String`  | The errors associated with the deletion.                    |

## Code Examples

```python
# Delete a inventory lot by ID
system.mes.inventory.deleteLot('01JE6F0CE9-T94PZD8R-TH9J01TJ')
```
