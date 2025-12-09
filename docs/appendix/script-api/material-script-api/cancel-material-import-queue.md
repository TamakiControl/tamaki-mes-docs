---
sidebar_position: 62
title: "cancelMaterialImportQueue"
description: "Cancels the current material import queue."
---

# system.mes.material.cancelMaterialImportQueue

Cancels the current [Material](../../data-model/material-model/material) import queue.

## Syntax

```python
system.mes.material.cancelMaterialImportQueue()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

the number of cancelled items in the queue

## Code Examples

```python
cancelledItemCount = system.mes.material.cancelMaterialImportQueue()
print(cancelledItemCount)
```

