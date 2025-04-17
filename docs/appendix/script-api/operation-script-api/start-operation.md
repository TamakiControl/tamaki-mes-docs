---
sidebar_position: 13
title: "startOperation"
description: "Starts an operation."
---

# system.mes.operation.startOperation

## Description

Starts an [Operations](../../data-model/operation-model/operation) object.

## Syntax

```python
system.mes.operation.startOperation(operationId, productionOrderIdOrName, startDate)
system.mes.operation.startOperation(operationId)
system.mes.operation.startOperation(operationId, productionOrderIdOrName)
```

## Parameters

| Parameter                 | Type            | Description                                                           |
| ------------------------- | --------------- | --------------------------------------------------------------------- |
| `operationId`             | `String` (ULID) | The ID of the operation to start.                                     |
| `productionOrderIdOrName` | `String`        | The ID or name of the production order associated with the operation. |
| `startDate`               | `Instant`       | The start date of the operation.                                      |

## Returns

Returns a JSON object of the operation execution result for the start of the operation.

## Example Usage

```python
# Start the operation
started_operation_result = system.mes.operation.startOperation('01JPBCPKSR-972W3V0Y-H00NNSKQ')

# Output the operation execution result of the started operation
print(started_operation_result)
```
