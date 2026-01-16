---
sidebar_position: 23
title: "cancelShiftImportQueue"
description: "Cancels the current Shift import queue."
---

# system.mes.shift.cancelShiftImportQueue

Cancels the current [Shift](../../data-model/shift-model/shift) import queue.

## Syntax

```python
system.mes.shift.cancelShiftImportQueue()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

the number of cancelled items in the queue

## Code Examples

```python
cancelledItemCount = system.mes.shift.cancelShiftImportQueue()
print(cancelledItemCount)
```

