---
sidebar_position: 22
title: "getShiftImportQueueSize"
description: "Gets the current size of the Shift import queue."
---

# system.mes.shift.getShiftImportQueueSize

Gets the current size of the [Shift](../../data-model/shift-model/shift) import queue.

## Syntax

```python
system.mes.shift.getShiftImportQueueSize()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

the number of items in the Shift import queue

## Code Examples

```python
queueSize = system.mes.shift.getShiftImportQueueSize()
print(queueSize)
```

