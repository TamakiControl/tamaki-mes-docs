---
sidebar_position: 98
title: "getOeeAlarmImportQueueSize"
description: "Gets the current size of the OeeAlarm import queue."
---

# system.mes.oee.getOeeAlarmImportQueueSize

## Description

Gets the current size of the [OeeAlarm](../../data-model/oee-model/oee-alarm.md) import queue.

## Permissions

This method requires the `OEE.READ.GET` permission.

## Syntax

```python
system.mes.oee.getOeeAlarmImportQueueSize()
```

## Parameters

This method does not take any parameters.

## Returns

Returns an Integer representing the number of items in the OeeAlarm import queue

## Code Examples

```python
queueSize = system.mes.oee.getOeeAlarmImportQueueSize()
print(queueSize)
```
