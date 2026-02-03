---
sidebar_position: 13
title: "getPersonnelImportQueueSize"
description: "Gets the current size of the Personnel import queue."
---

# system.mes.personnel.getPersonnelImportQueueSize

Gets the current size of the [Personnel](../../data-model/personnel-model/personnel) import queue.

## Syntax

```python
system.mes.personnel.getPersonnelImportQueueSize()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

the number of items in the Personnel import queue

## Code Examples

```python
queueSize = system.mes.personnel.getPersonnelImportQueueSize()
print(queueSize)
```

