---
sidebar_position: 23
title: "cancelInventoryOperationImportQueue"
description: "Cancels the current InventoryOperation import queue."
---

# system.mes.inventoryOperation.cancelInventoryOperationImportQueue

Cancels the current [InventoryOperation](../../data-model/inventory-operation-model/inventory-operation) import queue.

## Syntax

```python
system.mes.inventoryOperation.cancelInventoryOperationImportQueue()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

the number of cancelled items in the queue

## Code Examples

```python
cancelledItemCount = system.mes.inventoryOperation.cancelInventoryOperationImportQueue()
print(cancelledItemCount)
```

