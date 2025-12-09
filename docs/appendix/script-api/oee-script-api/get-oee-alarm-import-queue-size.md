---
sidebar_position: 10
title: "getOeeAlarmImportQueueSize"
description: "Gets the current size of the OeeAlarm import queue."
---

# system.mes.oee.getOeeAlarmImportQueueSize

Gets the current size of the [OeeAlarm](../../data-model/oee-model/oee-alarm-record.md) import queue.

## Syntax

```python
system.mes.oee.getOeeAlarmImportQueueSize()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

the number of items in the OeeAlarm import queue

## Code Examples

```python
queueSize = system.mes.oee.getOeeAlarmImportQueueSize()
print(queueSize)
```
