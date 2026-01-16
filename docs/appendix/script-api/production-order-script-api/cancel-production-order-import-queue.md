---
sidebar_position: 43
title: "cancelProductionOrderImportQueue"
description: "Cancels the current ProductionOrder import queue."
---

# system.mes.productionOrder.cancelProductionOrderImportQueue

Cancels the current [ProductionOrder](../../data-model/production-order-model/production-order) import queue.

## Syntax

```python
system.mes.productionOrder.cancelProductionOrderImportQueue()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

the number of cancelled items in the queue

## Code Examples

```python
cancelledItemCount = system.mes.productionOrder.cancelProductionOrderImportQueue()
print(cancelledItemCount)
```

