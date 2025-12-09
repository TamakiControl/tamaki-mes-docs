---
sidebar_position: 36
title: "cancelWidgetImportQueue"
description: "Cancels the current dashboard widget import queue."
---

# system.mes.dashboard.cancelWidgetImportQueue

Cancels the current [Dashboard Widget](../../data-model/dashboard-model/dashboard-widget) import queue.

## Syntax

```python
system.mes.dashboard.cancelWidgetImportQueue()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

the number of cancelled items in the queue

## Code Examples

```python
cancelledItemCount = system.mes.dashboard.cancelWidgetImportQueue()
print(cancelledItemCount)
```

