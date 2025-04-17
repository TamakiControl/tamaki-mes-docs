---
sidebar_position: 15
title: "pauseOperation"
description: "Pauses an operation."
---

# system.mes.operation.pauseOperation

## Description

Pauses an [Operations](../../data-model/operation-model/operation) object.

## Syntax

```python
system.mes.operation.pauseOperation(operationId)
system.mes.operation.pauseOperation(locationId, operationName)
```

## Parameters

| Parameter     | Type            | Description                       |
| ------------- | --------------- | --------------------------------- |
| `operationId` | `String` (ULID) | The ID of the operation to pause. |

| Parameter       | Type            | Description                                           |
| --------------- | --------------- | ----------------------------------------------------- |
| `locationId`    | `String` (ULID) | The ID of the location associated with the operation. |
| `operationName` | `Instant`       | The name of the operation.                            |

## Returns

Returns a JSON object of the operation execution result for the suspension of the operation.

## Example Usage

```python
# Pause the operation
paused_operation_result = system.mes.operation.pauseOperation('01JPBCPKSR-972W3V0Y-H00NNSKQ')

# Output the operation execution result of the paused operation
print(paused_operation_result)
```
