---
sidebar_position: 99
title: "getPerformanceReasonImportQueueSize"
description: "Gets the current size of the PerformanceReason import queue."
---

# system.mes.oee.getPerformanceReasonImportQueueSize

## Description

Gets the current size of the Performance Reason import queue.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getPerformanceReasonImportQueueSize()
```

## Parameters

This method does not take any parameters.

## Returns

Returns an Integer representing the number of items in the Performance Reason import queue.

## Code Examples

```python
queueSize = system.mes.oee.getPerformanceReasonImportQueueSize()
print(queueSize)
```

