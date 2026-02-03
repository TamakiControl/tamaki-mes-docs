---
sidebar_position: 15
title: "cancelRoleImportQueue"
description: "Cancels the current Role import queue."
---

# system.mes.role.cancelRoleImportQueue

Cancels the current [Role](../../data-model/personnel-model/role) import queue.

## Syntax

```python
system.mes.role.cancelRoleImportQueue()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

the number of cancelled items in the queue

## Code Examples

```python
cancelledItemCount = system.mes.role.cancelRoleImportQueue()
print(cancelledItemCount)
```
