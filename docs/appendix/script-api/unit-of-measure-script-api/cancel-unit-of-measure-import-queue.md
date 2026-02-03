---
sidebar_position: 28
title: "cancelUnitOfMeasureImportQueue"
description: "Cancels the current UnitOfMeasure import queue."
---

# system.mes.unitOfMeasure.cancelUnitOfMeasureImportQueue

Cancels the current [UnitOfMeasure](../../data-model/utility-models/unit-of-measure-model/unit-of-measure) import queue.

## Syntax

```python
system.mes.unitOfMeasure.cancelUnitOfMeasureImportQueue()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

the number of cancelled items in the queue

## Code Examples

```python
cancelledItemCount = system.mes.unitOfMeasure.cancelUnitOfMeasureImportQueue()
print(cancelledItemCount)
```

