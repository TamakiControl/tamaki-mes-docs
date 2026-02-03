---
sidebar_position: 6
title: "getOeeModeImportQueueSize"
description: "Gets the current size of the OeeMode import queue."
---

# system.mes.oee.getOeeModeImportQueueSize

Gets the current size of the [OeeMode](../../data-model/oee-model/oee-mode.md) import queue.

## Syntax

```python
system.mes.oee.getOeeModeImportQueueSize()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

the number of items in the OeeMode import queue

## Code Examples

```python
queueSize = system.mes.oee.getOeeModeImportQueueSize()
print(queueSize)
```
