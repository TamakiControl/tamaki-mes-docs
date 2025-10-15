---
sidebar_position: 8
title: "getInventoryOperationStatus"
description: "Retrieves the status of the inventory operation with the given ID."
---

# system.mes.inventory.operation.getInventoryOperationStatus

## Description

Retrieves the status of an [Inventory Operations](../../data-model/inventory-model/inventory-operation) object by its ID.


## Permissions

This method requires the `INVENTORY_OPERATION.READ.GET` permission.

## Syntax

```python
system.mes.inventory.operation.getInventoryOperationStatus(inventoryOperationId)
```

## Parameters

| Parameter              | Type            | Nullable | Description                                    |
|------------------------|-----------------|----------|------------------------------------------------|
| `inventoryOperationId` | `String` (ULID) | False    | The ID of the inventory operation to retrieve. |

## Returns

Returns the status of the inventory operation.

## Code Examples

```python
# Retrieve the status for the inventory operation specified
inventory_operations_status = system.mes.inventory.operation.getInventoryOperationStatus('01JPAND53P-BZ61RZHZ-V7C6EEHG')

# Output the inventory operation status
print(inventory_operations_status)
```
