---
sidebar_position: 10
title: 'deleteInventoryOperation'
description: 'Deletes the inventory operation with the given ID.'
---

# system.mes.inventory.operation.deleteInventoryOperation

## Description

Deletes an [Inventory Operations](../../data-model/inventory-model/inventory-operation) record by its ID.
This cannot delete an inventory operation with references to it.

## Permissions

This method requires the `INVENTORY_OPERATION.WRITE.DELETE` permission.

## Syntax

```python
system.mes.inventory.operation.deleteInventoryOperation(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                                     |
| --------- | --------------- | -------- | ----------------------------------------------- |
| `id`      | `String` (ULID) | False    | The ID of the inventory operations to retrieve. |

## Returns

If successful, an ApiResponse Object is returned with the success bool set True. If unsuccessful, an InUseException, IllegalArgumentException or ConstraintViolationException is thrown.
If the inventory operation that's being deleted has a reference, an ApiResponse Object is returned with details about the encountered error.

| Name      | Type      | Description                                                 |
| --------- | --------- | ----------------------------------------------------------- |
| `success` | `Boolean` | Indicates if the delete was successful.                     |
| `message` | `String`  | The reason why the deletion was successful or unsuccessful. |
| `data`    | `String`  | The data associated with the deletion.                      |
| `error`   | `String`  | The errors associated with the deletion.                    |

## Code Examples

```python
# Delete an inventory operation by ID
system.mes.inventory.operation.deleteInventoryOperation('01JPAND53P-BZ61RZHZ-V7C6EEHG')
```
