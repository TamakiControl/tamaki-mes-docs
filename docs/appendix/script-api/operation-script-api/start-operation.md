---
sidebar_position: 13
title: "startOperation"
description: "Starts an operation."
---

# system.mes.operation.startOperation

## Description

Starts an [Operations](../../data-model/operation-model/operation) object.


## Permissions

This method requires the `OPERATION.EXECUTE` permission.

## Syntax

```python
system.mes.operation.startOperation(operationId)
system.mes.operation.startOperation(operationId, productionOrderIdOrName)
system.mes.operation.startOperation(operationId, productionOrderIdOrName, startDate)
system.mes.operation.startOperation(operationId, productionOrderIdOrName, startDateMillis)
```

## Parameters

### Method 1: Start with Operation ID only

| Parameter     | Type            | Nullable | Description                       |
|---------------|-----------------|----------|-----------------------------------|
| `operationId` | `String` (ULID) | False    | The ID of the operation to start. |

### Method 2: Start with Operation ID and Production Order

| Parameter                 | Type            | Nullable | Description                                                           |
|---------------------------|-----------------|----------|-----------------------------------------------------------------------|
| `operationId`             | `String` (ULID) | False    | The ID of the operation to start.                                     |
| `productionOrderIdOrName` | `String`        | False    | The ID or name of the production order associated with the operation. |

### Method 3: Start with Operation ID, Production Order, and Start Date

| Parameter                 | Type            | Nullable | Description                                                           |
|---------------------------|-----------------|----------|-----------------------------------------------------------------------|
| `operationId`             | `String` (ULID) | False    | The ID of the operation to start.                                     |
| `productionOrderIdOrName` | `String`        | False    | The ID or name of the production order associated with the operation. |
| `startDate`               | `Date`          | False    | The start date of the operation.                                      |

### Method 4: Start with Operation ID, Production Order, and Start Date in Milliseconds

| Parameter                 | Type            | Nullable | Description                                                           |
|---------------------------|-----------------|----------|-----------------------------------------------------------------------|
| `operationId`             | `String` (ULID) | False    | The ID of the operation to start.                                     |
| `productionOrderIdOrName` | `String`        | False    | The ID or name of the production order associated with the operation. |
| `startDateMillis`         | `Long`          | False    | The start date of the operation in milliseconds.                      |

## Returns

Returns a JSON object of the operation execution result for the start of the operation.

## Example Usage

```python
# Start the operation
started_operation_result = system.mes.operation.startOperation('01JPBCPKSR-972W3V0Y-H00NNSKQ')

# Output the operation execution result of the started operation
print(started_operation_result)
```
