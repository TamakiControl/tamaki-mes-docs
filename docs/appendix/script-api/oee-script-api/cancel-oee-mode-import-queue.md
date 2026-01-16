---
sidebar_position: 7
title: "cancelOeeModeImportQueue"
description: "Cancels the current OeeMode import queue."
---

# system.mes.oee.cancelOeeModeImportQueue

Cancels the current [OeeMode](../../data-model/oee-model/oee-mode.md) import queue.

## Syntax

```python
system.mes.oee.cancelOeeModeImportQueue()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

the number of cancelled items in the queue

## Code Examples

```python
cancelledItemCount = system.mes.oee.cancelOeeModeImportQueue()
print(cancelledItemCount)
```
