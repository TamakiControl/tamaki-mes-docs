---
sidebar_position: 12
title: "deleteOperationWithReferences"
description: "Deletes the operation with the given ID and any immediate references to this operation if possible."
---

# system.mes.operation.deleteOperationWithReferences

## Description

Deletes an [Operations](../../data-model/operation-model/operation) record by its ID.
Also deletes immediate references to this operation if possible.

## Syntax

```python
system.mes.operation.deleteOperationWithReferences(id)
```

## Parameters

| Parameter | Type            | Description                           |
| --------- | --------------- | ------------------------------------- |
| `id`      | `String` (ULID) | The ID of the operations to retrieve. |

## Returns

If successful, no response is returned. If unsuccessful, an IllegalArgumentException or ConstraintViolationException is thrown.

## Code Examples

```python
# Delete an operation by ID and all immediate references
system.mes.operation.deleteOperationWithReferences('01JPBCPKSR-972W3V0Y-H00NNSKQ')
```
