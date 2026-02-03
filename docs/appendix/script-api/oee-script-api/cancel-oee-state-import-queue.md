---
sidebar_position: 5
title: "cancelOeeStateImportQueue"
description: "Cancels the current OeeState import queue."
---

# system.mes.oeeState.cancelOeeStateImportQueue

## Description

Cancels the current [OeeState](../../data-model/oee-model/oee-state) import queue.

## Permissions

This method requires the `OEE.WRITE.SAVE` permission.

## Syntax

```python
system.mes.oeeState.cancelOeeStateImportQueue()
```

## Parameters

This method does not take any parameters.

## Returns

Returns an Integer representing the number of cancelled items in the queue.

## Code Examples

```python
cancelledItemCount = system.mes.oee.cancelOeeStateImportQueue()
print(cancelledItemCount)
```

