---
sidebar_position: 30
title: "getOperationImportQueueSize"
description: "Gets the current size of the Operation import queue."
---

# system.mes.operation.getOperationImportQueueSize

Gets the current size of the [Operation](../../data-model/operation-model/operation) import queue.

## Syntax

```python
system.mes.operation.getOperationImportQueueSize()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

the number of items in the Operation import queue

## Code Examples

```python
queueSize = system.mes.operation.getOperationImportQueueSize()
print(queueSize)
```

