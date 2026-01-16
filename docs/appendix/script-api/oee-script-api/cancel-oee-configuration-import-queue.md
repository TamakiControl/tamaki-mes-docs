---
sidebar_position: 3
title: "cancelOeeConfigurationImportQueue"
description: "Cancels the current OeeConfiguration import queue."
---

# system.mes.oee.cancelOeeConfigurationImportQueue

Cancels the current [OeeConfiguration](../../data-model/oee-model/oee-mode-record.md) import queue.

## Syntax

```python
system.mes.oee.cancelOeeConfigurationImportQueue()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

the number of cancelled items in the queue

## Code Examples

```python
cancelledItemCount = system.mes.oee.cancelOeeConfigurationImportQueue()
print(cancelledItemCount)
```
