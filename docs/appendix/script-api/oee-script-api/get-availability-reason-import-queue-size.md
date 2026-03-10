---
sidebar_position: 97
title: "getAvailabilityReasonImportQueueSize"
description: "Gets the current size of the AvailabilityReason import queue."
---

# system.mes.oee.getAvailabilityReasonImportQueueSize

## Description

Gets the current size of the [Availability Reason](../../data-model/oee-model/oee-availability-reason.md) import queue.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getAvailabilityReasonImportQueueSize()
```

## Parameters

This method does not take any parameters.

## Returns

Returns an Integer representing the number of items in the AvailabilityReason import queue.

## Code Examples

```python
queueSize = system.mes.oee.getAvailabilityReasonImportQueueSize()
print(queueSize)
```
