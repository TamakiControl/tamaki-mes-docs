---
sidebar_position: 8
title: "getDowntimeReasonImportQueueSize"
description: "Gets the current size of the DowntimeReason import queue."
---

# system.mes.oee.getDowntimeReasonImportQueueSize

Gets the current size of the [Downtime Reason](../../data-model/oee-model/oee-downtime-reason.md) import queue.

## Syntax

```python
system.mes.oee.getDowntimeReasonImportQueueSize()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

the number of items in the DowntimeReason import queue

## Code Examples

```python
queueSize = system.mes.oee.getDowntimeReasonImportQueueSize()
print(queueSize)
```
