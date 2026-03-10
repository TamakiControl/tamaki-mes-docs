---
sidebar_position: 98
title: "getQualityReasonImportQueueSize"
description: "Gets the current size of the QualityReason import queue."
---

# system.mes.oee.getQualityReasonImportQueueSize

## Description

Gets the current size of the Quality Reason import queue.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getQualityReasonImportQueueSize()
```

## Parameters

This method does not take any parameters.

## Returns

Returns an Integer representing the number of items in the Quality Reason import queue.

## Code Examples

```python
queueSize = system.mes.oee.getQualityReasonImportQueueSize()
print(queueSize)
```

