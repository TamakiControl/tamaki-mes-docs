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

### Method 1: Pause by Operation ID

| Parameter     | Type            | Nullable | Description                       |
|---------------|-----------------|----------|-----------------------------------|
| `operationId` | `String` (ULID) | False    | The ID of the operation to pause. |

### Method 2: Pause by Location and Operation Name

| Parameter       | Type            | Nullable | Description                                           |
|-----------------|-----------------|----------|-------------------------------------------------------|
| `locationId`    | `String` (ULID) | False    | The ID of the location associated with the operation. |
| `operationName` | `String`        | False    | The name of the operation.                            |

## Returns

Returns a JSON object of the operation execution result for the suspension of the operation.

## Example Usage

```python
# Pause the operation
paused_operation_result = system.mes.operation.pauseOperation('01JPBCPKSR-972W3V0Y-H00NNSKQ')

# Output the operation execution result of the paused operation
print(paused_operation_result)
```
