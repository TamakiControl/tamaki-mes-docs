---
sidebar_position: 8
title: "getDowntimeReasonImportQueueSize"
description: "Gets the current size of the DowntimeReason import queue."
---

# system.mes.oee.getDowntimeReasonImportQueueSize

## Description

Gets the current size of the [Downtime Reason](../../data-model/oee-model/oee-downtime-reason.md) import queue.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getDowntimeReasonImportQueueSize()
```

## Parameters

This method does not take any parameters.

## Returns

Returns an Integer representing the number of items in the DowntimeReason import queue.

## Code Examples

```python
queueSize = system.mes.oee.getDowntimeReasonImportQueueSize()
print(queueSize)
```
