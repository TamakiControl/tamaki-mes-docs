---
sidebar_position: 61
title: "getMaterialImportQueueSize"
description: "Gets the current size of the material import queue."
---

# system.mes.material.getMaterialImportQueueSize

Gets the current size of the [Material](../../data-model/material-model/material) import queue.

## Syntax

```python
system.mes.material.getMaterialImportQueueSize()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

the number of items in the material import queue

## Code Examples

```python
queueSize = system.mes.material.getMaterialImportQueueSize()
print(queueSize)
```

