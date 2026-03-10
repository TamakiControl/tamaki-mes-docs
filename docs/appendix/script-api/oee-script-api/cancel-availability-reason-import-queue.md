---
sidebar_position: 102
title: "cancelavailabilityreasonImportQueue"
description: "Cancels the current AvailabilityReason import queue."
---

# system.mes.oee.cancelAvailabilityReasonImportQueue

## Description

Cancels the current [Availability Reason](../../data-model/oee-model/oee-availability-reason.md) import queue.

## Permissions

This method requires the `OEE.WRITE.SAVE` permission.

## Syntax

```python
system.mes.oee.cancelAvailabilityReasonImportQueue()
```

## Parameters

This method does not take any parameters.

## Returns

Returns an Integer representing the number of canceled items in the queue.

## Code Examples

```python
cancelledItemCount = system.mes.oee.cancelAvailabilityReasonImportQueue()
print(cancelledItemCount)
```
