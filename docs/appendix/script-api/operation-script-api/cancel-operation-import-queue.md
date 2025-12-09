---
sidebar_position: 31
title: "cancelOperationImportQueue"
description: "Cancels the current Operation import queue."
---

# system.mes.operation.cancelOperationImportQueue

Cancels the current [Operation](../../data-model/operation-model/operation) import queue.

## Syntax

```python
system.mes.operation.cancelOperationImportQueue()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

the number of cancelled items in the queue

## Code Examples

```python
cancelledItemCount = system.mes.operation.cancelOperationImportQueue()
print(cancelledItemCount)
```

