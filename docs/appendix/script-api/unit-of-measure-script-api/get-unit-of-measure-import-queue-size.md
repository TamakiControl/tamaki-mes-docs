---
sidebar_position: 27
title: "getUnitOfMeasureImportQueueSize"
description: "Gets the current size of the UnitOfMeasure import queue."
---

# system.mes.unitOfMeasure.getUnitOfMeasureImportQueueSize

Gets the current size of the [UnitOfMeasure](../../data-model/utility-models/unit-of-measure-model/unit-of-measure) import queue.

## Syntax

```python
system.mes.unitOfMeasure.getUnitOfMeasureImportQueueSize()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

the number of items in the UnitOfMeasure import queue

## Code Examples

```python
queueSize = system.mes.unitOfMeasure.getUnitOfMeasureImportQueueSize()
print(queueSize)
```

