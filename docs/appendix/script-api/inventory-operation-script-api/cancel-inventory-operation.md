---
sidebar_position: 15
title: "cancelInventoryOperation"
description: "Cancels an inventory operation. This will stop the operation and cancel the associated inventory lot record"
---

# system.mes.inventory.operation.cancelInventoryOperation

## Description

Cancels an [Inventory Operations](../../data-model/inventory-operation-model/inventory-operation) object. This function finds the currently running inventory lot record associated with the specified inventory operation, sets its end time to the current time, and updates its status to CANCELLED. The inventory operation status is also updated to CANCELLED. This effectively terminates an active operation without recording additional inventory quantity changes.


## Permissions

This method requires the `INVENTORY_OPERATION.EXECUTE` permission.

## Syntax

```python
system.mes.inventory.operation.cancelInventoryOperation(inventoryOperationId)
```

## Parameters

| Parameter              | Type            | Nullable | Description                                  |
|------------------------|-----------------|----------|----------------------------------------------|
| `inventoryOperationId` | `String` (ULID) | False    | The ID of the inventory operation to cancel. |

## Returns

Returns a JSON object of the updated inventory lot record with the cancelled operation details, including the end time and cancelled status.

## Example Usage

```python
# Cancel the inventory operation
cancelled_lot_record = system.mes.inventory.operation.cancelInventoryOperation('01JPAND53P-BZ61RZHZ-V7C6EEHG')

# Output the inventory lot record of the cancelled inventory operation
print(cancelled_lot_record)
```
