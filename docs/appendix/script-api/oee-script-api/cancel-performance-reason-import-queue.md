---
sidebar_position: 105
title: "cancelPerformanceReasonImportQueue"
description: "Cancels the current Performance Reason import queue."
---

# system.mes.oee.cancelPerformanceReasonImportQueue

## Description

Cancels the current Performance Reason import queue.

## Permissions

This method requires the `OEE.WRITE.SAVE` permission.

## Syntax

```python
system.mes.oee.cancelPerformanceReasonImportQueue()
```

## Parameters

This method does not take any parameters.

## Returns

Returns an Integer representing the number of canceled items in the queue.

## Code Examples

```python
cancelledItemCount = system.mes.oee.cancelPerformanceReasonImportQueue()
print(cancelledItemCount)
```

