---
sidebar_position: 42
title: "getProductionOrderImportQueueSize"
description: "Gets the current size of the ProductionOrder import queue."
---

# system.mes.productionOrder.getProductionOrderImportQueueSize

Gets the current size of the [ProductionOrder](../../data-model/production-order-model/production-order) import queue.

## Syntax

```python
system.mes.productionOrder.getProductionOrderImportQueueSize()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

the number of items in the ProductionOrder import queue

## Code Examples

```python
queueSize = system.mes.productionOrder.getProductionOrderImportQueueSize()
print(queueSize)
```

