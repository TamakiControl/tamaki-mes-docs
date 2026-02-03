---
sidebar_position: 15
title: "getDepartmentImportQueueSize"
description: "Gets the current size of the Department import queue."
---

# system.mes.personnel.getDepartmentImportQueueSize

Gets the current size of the [Department](../../data-model/personnel-model/personnel-department.md) import queue.

## Syntax

```python
system.mes.personnel.getDepartmentImportQueueSize()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

the number of items in the Department import queue

## Code Examples

```python
queueSize = system.mes.personnel.getDepartmentImportQueueSize()
print(queueSize)
```
