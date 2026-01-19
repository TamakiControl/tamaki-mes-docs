---
sidebar_position: 16
title: "cancelDepartmentImportQueue"
description: "Cancels the current Department import queue."
---

# system.mes.personnel.cancelDepartmentImportQueue

Cancels the current [Department](../../data-model/personnel-model/personnel-department.md) import queue.

## Syntax

```python
system.mes.personnel.cancelDepartmentImportQueue()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

the number of cancelled items in the queue

## Code Examples

```python
cancelledItemCount = system.mes.personnel.cancelDepartmentImportQueue()
print(cancelledItemCount)
```
