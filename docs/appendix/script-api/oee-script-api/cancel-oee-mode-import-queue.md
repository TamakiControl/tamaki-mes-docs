---
sidebar_position: 100
title: "cancelOeeModeImportQueue"
description: "Cancels the current OeeMode import queue."
---

# system.mes.oee.cancelOeeModeImportQueue

## Description

Cancels the current [OeeMode](../../data-model/oee-model/oee-mode.md) import queue.

## Permissions

This method requires the `OEE.WRITE.SAVE` permission.

## Syntax

```python
system.mes.oee.cancelOeeModeImportQueue()
```

## Parameters

This method does not take any parameters.

## Returns

Returns an Integer representing the number of canceled items in the queue

## Code Examples

```python
cancelledItemCount = system.mes.oee.cancelOeeModeImportQueue()
print(cancelledItemCount)
```
