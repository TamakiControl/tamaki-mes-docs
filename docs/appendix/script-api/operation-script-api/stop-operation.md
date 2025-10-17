---
sidebar_position: 14
title: "stopOperation"
description: "Stops an operation."
---

# system.mes.operation.stopOperation

## Description

Stops an [Operations](../../data-model/operation-model/operation) object.


## Permissions

This method requires the `OPERATION.EXECUTE` permission.

## Syntax

```python
system.mes.operation.stopOperation(operationId)
system.mes.operation.stopOperation(operationId, endDate)
system.mes.operation.stopOperation(operationId, endDateMillis)
```

## Parameters

### Method 1: Stop with Operation ID only

| Parameter     | Type            | Nullable | Description                      |
|---------------|-----------------|----------|----------------------------------|
| `operationId` | `String` (ULID) | False    | The ID of the operation to stop. |

### Method 2: Stop with Operation ID and End Date

| Parameter     | Type            | Nullable | Description                      |
|---------------|-----------------|----------|----------------------------------|
| `operationId` | `String` (ULID) | False    | The ID of the operation to stop. |
| `endDate`     | `Date`          | False    | The stop date of the operation.  |

### Method 3: Stop with Operation ID and End Date in Milliseconds

| Parameter       | Type            | Nullable | Description                                     |
|-----------------|-----------------|----------|-------------------------------------------------|
| `operationId`   | `String` (ULID) | False    | The ID of the operation to stop.                |
| `endDateMillis` | `Long`          | False    | The stop date of the operation in milliseconds. |

## Returns

Returns a JSON object of the operation execution result for the end of the operation.

## Example Usage

```python
# Stop the operation
stopped_operation_result = system.mes.operation.stopOperation('01JPBCPKSR-972W3V0Y-H00NNSKQ')

# Output the operation execution result of the stopped operation
print(stopped_operation_result)
```
