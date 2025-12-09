---
sidebar_position: 9
title: "cancelDowntimeReasonImportQueue"
description: "Cancels the current DowntimeReason import queue."
---

# system.mes.oee.cancelDowntimeReasonImportQueue

Cancels the current [Downtime Reason](../../data-model/oee-model/oee-downtime-reason.md) import queue.

## Syntax

```python
system.mes.oee.cancelDowntimeReasonImportQueue()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

the number of cancelled items in the queue

## Code Examples

```python
cancelledItemCount = system.mes.oee.cancelDowntimeReasonImportQueue()
print(cancelledItemCount)
```
