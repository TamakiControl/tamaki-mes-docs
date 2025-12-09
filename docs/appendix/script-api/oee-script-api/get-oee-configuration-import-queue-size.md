---
sidebar_position: 2
title: "getOeeConfigurationImportQueueSize"
description: "Gets the current size of the OeeConfiguration import queue."
---

# system.mes.oee.getOeeConfigurationImportQueueSize

Gets the current size of the [OeeConfiguration](../../data-model/oee-model/oee-mode-record.md) import queue.

## Syntax

```python
system.mes.oee.getOeeConfigurationImportQueueSize()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

the number of items in the OeeConfiguration import queue

## Code Examples

```python
queueSize = system.mes.oee.getOeeConfigurationImportQueueSize()
print(queueSize)
```
