---
sidebar_position: 5
title: "cancelOeeStateImportQueue"
description: "Cancels the current OeeState import queue."
---

# system.mes.oeeState.cancelOeeStateImportQueue

Cancels the current [OeeState](../../data-model/oee-model/oee-state) import queue.

## Syntax

```python
system.mes.oeeState.cancelOeeStateImportQueue()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

the number of cancelled items in the queue

## Code Examples

```python
cancelledItemCount = system.mes.oeeState.cancelOeeStateImportQueue()
print(cancelledItemCount)
```

