---
sidebar_position: 22
title: "getInventoryOperationImportQueueSize"
description: "Gets the current size of the InventoryOperation import queue."
---

# system.mes.inventoryOperation.getInventoryOperationImportQueueSize

Gets the current size of the [InventoryOperation](../../data-model/inventory-operation-model/inventory-operation) import queue.

## Syntax

```python
system.mes.inventoryOperation.getInventoryOperationImportQueueSize()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

the number of items in the InventoryOperation import queue

## Code Examples

```python
queueSize = system.mes.inventoryOperation.getInventoryOperationImportQueueSize()
print(queueSize)
```

