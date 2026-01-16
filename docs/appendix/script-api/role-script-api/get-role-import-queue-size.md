---
sidebar_position: 14
title: "getRoleImportQueueSize"
description: "Gets the current size of the Role import queue."
---

# system.mes.role.getRoleImportQueueSize

Gets the current size of the [Role](../../data-model/personnel-model/role) import queue.

## Syntax

```python
system.mes.role.getRoleImportQueueSize()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

the number of items in the Role import queue

## Code Examples

```python
queueSize = system.mes.role.getRoleImportQueueSize()
print(queueSize)
```
