---
sidebar_position: 15
title: "cancelInventoryOperation"
description: "Cancels an inventory operation. This will stop the operation and cancel the associated inventory lot record"
---

# system.mes.inventory.operation.cancelInventoryOperation

## Description

Cancels an [Inventory Operations](../../data-model/inventory-model/inventory-operation) object.

## Syntax

```python
system.mes.inventory.operation.cancelInventoryOperation(inventoryOperationId)
```

## Parameters

| Parameter            | Type            | Description                                  |
| -------------------- | --------------- | -------------------------------------------- |
| inventoryOperationId | `String` (ULID) | The ID of the inventory operation to cancel. |

## Returns

Returns a JSON object of the inventory lot record for the cancelled inventory operation.

## Example Usage

```python
# Cancel the inventory operation
cancelled_lot_record = system.mes.inventory.operation.cancelInventoryOperation('01JPAND53P-BZ61RZHZ-V7C6EEHG')

# Output the inventory lot record of the cancelled inventory operation
print(cancelled_lot_record)
```
