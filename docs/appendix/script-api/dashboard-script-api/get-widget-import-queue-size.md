---
sidebar_position: 35
title: "getWidgetImportQueueSize"
description: "Gets the current size of the dashboard widget import queue."
---

# system.mes.dashboard.getWidgetImportQueueSize

Gets the current size of the [Dashboard Widget](../../data-model/dashboard-model/dashboard-widget) import queue.

## Syntax

```python
system.mes.dashboard.getWidgetImportQueueSize()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

the number of items in the dashboard widget import queue

## Code Examples

```python
queueSize = system.mes.dashboard.getWidgetImportQueueSize()
print(queueSize)
```

