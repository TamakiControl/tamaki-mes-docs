---
sidebar_position: 104
title: "cancelQualityReasonImportQueue"
description: "Cancels the current Quality Reason import queue."
---

# system.mes.oee.cancelQualityReasonImportQueue

## Description

Cancels the current Quality Reason import queue.

## Permissions

This method requires the `OEE.WRITE.SAVE` permission.

## Syntax

```python
system.mes.oee.cancelQualityReasonImportQueue()
```

## Parameters

This method does not take any parameters.

## Returns

Returns an Integer representing the number of canceled items in the queue.

## Code Examples

```python
cancelledItemCount = system.mes.oee.cancelQualityReasonImportQueue()
print(cancelledItemCount)
```

