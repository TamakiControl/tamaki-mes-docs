---
sidebar_position: 11
title: "deleteOperation"
description: "Deletes the operation with the given ID."
---

# system.mes.operation.deleteOperation

## Description

Deletes an [Operations](../../data-model/operation-model/operation) record by its ID.
This cannot delete an operation with references to it.

## Syntax

```python
system.mes.operation.deleteOperation(id)
```

## Parameters

| Parameter | Type            | Nullable | Description                           |
|-----------|-----------------|----------|---------------------------------------|
| `id`      | `String` (ULID) | False    | The ID of the operations to retrieve. |

## Returns

If successful, an ApiResponse Object is returned with the success bool set True. If unsuccessful, an InUseException, IllegalArgumentException or ConstraintViolationException is thrown.
If the operation that's being deleted has a reference, an ApiResponse Object is returned with details about the encountered error.

| Name      | Type      | Description                                                 |
|-----------|-----------|-------------------------------------------------------------|
| `success` | `Boolean` | Indicates if the delete was successful.                     |
| `message` | `String`  | The reason why the deletion was successful or unsuccessful. |
| `data`    | `String`  | The data associated with the deletion.                      |
| `error`   | `String`  | The errors associated with the deletion.                    |

## Code Examples

```python
# Delete an operation by ID
system.mes.operation.deleteOperation('01JPBCPKSR-972W3V0Y-H00NNSKQ')
```
