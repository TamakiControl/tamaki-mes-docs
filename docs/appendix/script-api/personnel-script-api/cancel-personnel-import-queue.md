---
sidebar_position: 14
title: "cancelPersonnelImportQueue"
description: "Cancels the current Personnel import queue."
---

# system.mes.personnel.cancelPersonnelImportQueue

Cancels the current [Personnel](../../data-model/personnel-model/personnel) import queue.

## Syntax

```python
system.mes.personnel.cancelPersonnelImportQueue()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

the number of cancelled items in the queue

## Code Examples

```python
cancelledItemCount = system.mes.personnel.cancelPersonnelImportQueue()
print(cancelledItemCount)
```

