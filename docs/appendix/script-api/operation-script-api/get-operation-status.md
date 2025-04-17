---
sidebar_position: 9
title: "getOperationStatus"
description: "Retrieves the status of the operation with the given ID."
---

# system.mes.operation.getOperationStatus

## Description

Retrieves the status of an [Operations](../../data-model/operation-model/operation) object by its ID.

## Syntax

```python
system.mes.operation.getOperationStatus(operationId)
```

## Parameters

| Parameter     | Type            | Description                          |
| ------------- | --------------- | ------------------------------------ |
| `operationId` | `String` (ULID) | The ID of the operation to retrieve. |

## Returns

Returns the status of the operation.

## Code Examples

```python
# Retrieve the status for the operation specified
operations_status = system.mes.operation.getOperationStatus('01JPBCPKSR-972W3V0Y-H00NNSKQ')

# Output the operation status
print(operations_status)
```
