---
sidebar_position: 37
title: "cancelLocationImportQueue"
description: "Cancels the current Location import queue."
---

# system.mes.location.cancelLocationImportQueue

Cancels the current [Location](../../data-model/location-model/location) import queue.

## Syntax

```python
system.mes.location.cancelLocationImportQueue()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

the number of cancelled items in the queue

## Code Examples

```python
cancelledItemCount = system.mes.location.cancelLocationImportQueue()
print(cancelledItemCount)
```

