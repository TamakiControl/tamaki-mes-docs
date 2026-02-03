---
sidebar_position: 9
title: "cancelDowntimeReasonImportQueue"
description: "Cancels the current DowntimeReason import queue."
---

# system.mes.oee.cancelDowntimeReasonImportQueue

## Description

Cancels the current [Downtime Reason](../../data-model/oee-model/oee-downtime-reason.md) import queue.

## Permissions

This method requires the `OEE.WRITE.SAVE` permission.

## Syntax

```python
system.mes.oee.cancelDowntimeReasonImportQueue()
```

## Parameters

This method does not take any parameters.

## Returns

Returns an Integer representing the number of cancelled items in the queue.

## Code Examples

```python
cancelledItemCount = system.mes.oee.cancelDowntimeReasonImportQueue()
print(cancelledItemCount)
```
