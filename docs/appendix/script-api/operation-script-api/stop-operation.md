---
sidebar_position: 14
title: "stopOperation"
description: "Stops an operation."
---

# system.mes.operation.stopOperation

## Description

Stops an [Operations](../../data-model/operation-model/operation) object.

## Syntax

```python
system.mes.operation.stopOperation(operationId, endDate)
system.mes.operation.stopOperation(operationId)
```

## Parameters

| Parameter     | Type            | Description                      |
| ------------- | --------------- | -------------------------------- |
| `operationId` | `String` (ULID) | The ID of the operation to stop. |
| `endDate`     | `Instant`       | The stop date of the operation.  |

## Returns

Returns a JSON object of the operation execution result for the end of the operation.

## Example Usage

```python
# Stop the operation
stopped_operation_result = system.mes.operation.stopOperation('01JPBCPKSR-972W3V0Y-H00NNSKQ')

# Output the operation execution result of the stopped operation
print(stopped_operation_result)
```
