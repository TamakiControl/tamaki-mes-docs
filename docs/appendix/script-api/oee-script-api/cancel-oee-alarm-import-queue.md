---
sidebar_position: 103
title: "cancelOeeAlarmImportQueue"
description: "Cancels the current OeeAlarm import queue."
---

# system.mes.oee.cancelOeeAlarmImportQueue

## Description

Cancels the current [OeeAlarm](../../data-model/oee-model/oee-alarm.md) import queue.

## Permissions

This method requires the `OEE.WRITE.SAVE` permission.

## Syntax

```python
system.mes.oee.cancelOeeAlarmImportQueue()
```

## Parameters

This method does not take any parameters.

## Returns

Returns an Integer representing the number of canceled items in the queue.

## Code Examples

```python
cancelledItemCount = system.mes.oee.cancelOeeAlarmImportQueue()
print(cancelledItemCount)
```
