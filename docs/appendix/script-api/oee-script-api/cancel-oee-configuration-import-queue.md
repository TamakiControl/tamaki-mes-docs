---
sidebar_position: 99
title: "cancelOeeConfigurationImportQueue"
description: "Cancels the current OeeConfiguration import queue."
---

# system.mes.oee.cancelOeeConfigurationImportQueue

## Description

Cancels the current [OeeConfiguration](../../data-model/oee-model/oee-mode-record.md) import queue.

## Permissions

This method requires the `OEE.WRITE.SAVE` permission.

## Syntax

```python
system.mes.oee.cancelOeeConfigurationImportQueue()
```

## Parameters

This method does not take any parameters.

## Returns

Returns an Integer representing the number of canceled items in the queue.

## Code Examples

```python
cancelledItemCount = system.mes.oee.cancelOeeConfigurationImportQueue()
print(cancelledItemCount)
```
