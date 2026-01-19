---
sidebar_position: 36
title: "getLocationImportQueueSize"
description: "Gets the current size of the Location import queue."
---

# system.mes.location.getLocationImportQueueSize

Gets the current size of the [Location](../../data-model/location-model/location) import queue.

## Syntax

```python
system.mes.location.getLocationImportQueueSize()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

the number of items in the Location import queue

## Code Examples

```python
queueSize = system.mes.location.getLocationImportQueueSize()
print(queueSize)
```

