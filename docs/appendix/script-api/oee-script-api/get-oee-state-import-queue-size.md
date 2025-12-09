---
sidebar_position: 4
title: "getOeeStateImportQueueSize"
description: "Gets the current size of the OeeState import queue."
---

# system.mes.oeeState.getOeeStateImportQueueSize

Gets the current size of the [OeeState](../../data-model/oee-state-model/oee-state) import queue.

## Syntax

```python
system.mes.oeeState.getOeeStateImportQueueSize()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

the number of items in the OeeState import queue

## Code Examples

```python
queueSize = system.mes.oeeState.getOeeStateImportQueueSize()
print(queueSize)
```

