---
sidebar_position: 11
title: "cancelOeeAlarmImportQueue"
description: "Cancels the current OeeAlarm import queue."
---

# system.mes.oee.cancelOeeAlarmImportQueue

Cancels the current [OeeAlarm](../../data-model/oee-model/oee-alarm.md) import queue.

## Syntax

```python
system.mes.oee.cancelOeeAlarmImportQueue()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

the number of cancelled items in the queue

## Code Examples

```python
cancelledItemCount = system.mes.oee.cancelOeeAlarmImportQueue()
print(cancelledItemCount)
```
