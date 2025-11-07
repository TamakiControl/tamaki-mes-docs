---
sidebar_position: 8
title: "getInventoryOperationStatus"
description: "Retrieves the status of the inventory operation with the given ID."
---

# system.mes.inventory.operation.getInventoryOperationStatus

## Description

Retrieves the status of an [Inventory Operations](../../data-model/inventory-operation-model/inventory-operation) object by its ID.

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
inventoryOperationsStatus = system.mes.inventory.operation.getInventoryOperationStatus('01JPAND53P-BZ61RZHZ-V7C6EEHG')

# Output the inventory operation status
print(inventoryOperationsStatus)
```
