---
sidebar_position: 10
title: "validateOperation"
description: "Validates the specified parameters for an operation."
---

# system.mes.operation.validateOperation

## Description

Validates the specified parameters for an [Operations](../../data-model/operation-model/operation) record and returns any validation errors.
This only checks if the operation object can be saved based on the attributes given, without actually creating or modifying the operation. Use this function to verify your parameters before executing save operation.

## Syntax

```python
system.mes.operation.validateOperation(**operation_data)
```

## Parameters

| Parameter                             | Type            | Description                                                                                   |
| ------------------------------------- | --------------- | --------------------------------------------------------------------------------------------- |
| `locationId`                          | `String` (ULID) | The ULID of the location associated with the operation.                                       |
| `locationPath`                        | `String`        | The path of the location associated with the operation.                                       |
| `name`                                | `String`        | The name of the operation.                                                                    |
| `status`                              | `String`        | The status of the operation.                                                                  |
| `currentOperationRecordId`            | `String` (ULID) | The ULID of the current operation record.                                                     |
| `currentProductionOrderId`            | `String` (ULID) | The ULID of the current production order associated with the operation.                       |
| `runningConflictStrategy`             | `String`        | The conflict strategy when a new operation is started while another is running.               |
| `triggerSource`                       | `String`        | The ways that the various operations can trigger.                                             |
| `startTriggerExpression`              | `String`        | The Ignition expression to trigger the start of the operation.                                |
| `startTriggerType`                    | `String`        | The trigger type when starting the operation.                                                 |
| `stopTriggerExpression`               | `String`        | The Ignition expression to trigger the end of the operation.                                  |
| `stopTriggerType`                     | `String`        | The trigger type when stopping the operation.                                                 |
| `productionOrderResolutionStrategy`   | `String`        | The resolution strategy to get the production order.                                          |
| `productionOrderUpdateStrategy`       | `String`        | The update strategy if the production order expression changes while the operation is active. |
| `productionOrderExpression`           | `String`        | The Ignition expression of the production order associated with the operation.                |
| `updateProductionOrderStatusOnStart`  | `Boolean`       | Indicates if the production order status should update when the operation starts.             |
| `startProductionOrderStatus`          | `String`        | The status of the production order when the operation starts.                                 |
| `updateProductionOrderStatusOnStop`   | `Boolean`       | Indicates if the production order status should update when the operation stops.              |
| `stopProductionOrderStatus`           | `String`        | The status of the production order when the operation stops.                                  |
| `autoAddToSchedule`                   | `Boolean`       | Indicates if the operation should be automatically added to the schedule if it doesn't exist. |
| `expectedDurationCalculationStrategy` | `String`        | The resolution strategy to get the expected duration of the operation.                        |
| `expectedDurationSeconds`             | `Integer`       | The expected duration of the operation in seconds.                                            |
| `expectedDurationExpression`          | `String`        | The Ignition expression of the expected duration of the operation.                            |
| `flushIntervalMillis`                 | `Integer`       | The flush interval in milliseconds.                                                           |
| `id`                                  | `String` (ULID) | The ULID of the operation (optional, used for updating an existing operation).                |
| `notes`                               | `String`        | Notes related to the operation.                                                               |
| `enabled`                             | `Boolean`       | Indicates if the operation is active and enabled.                                             |
| `spare1`                              | `String`        | Additional field for user-defined context.                                                    |
| `spare2`                              | `String`        | Additional field for user-defined context.                                                    |
| `spare3`                              | `String`        | Additional field for user-defined context.                                                    |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new operation object
operation_data = system.mes.operation.newOperation()

# Set basic attributes for the new operation
operation_data['locationId'] = '01JD7M94CJ-HPEQEJ1F-QA8EQ6VE'
operation_data['name'] = 'Packaging'
# (You can continue setting other properties as needed here)

# Validate operation parameters
validation_errors = system.mes.operation.validateOperation(**operation_data)

if len(validation_errors) > 0:
    print('Validation errors found:', validation_errors)
else:
    print('Operation parameters are valid.')
```
