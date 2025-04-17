---
sidebar_position: 3
title: "saveOperation"
description: "Creates or updates an operation with specified parameters."
---

# system.mes.operation.saveOperation

## Description

Creates or updates a [Operations](../../data-model/operation-model/operation) record in the system based on the provided parameters.

## Syntax

```python
system.mes.operation.saveOperation(**operation_data)
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

Returns a JSON representation of the saved operation.

## Code Examples

```python
# Generate the object structure for a new operation object, set the name and save it
new_operation = system.mes.operation.newOperation()
new_operation['locationId'] = '01JD7M94CJ-HPEQEJ1F-QA8EQ6VE'
new_operation['name'] = 'Packaging'
saved_operation = system.mes.operation.saveOperation(**new_operation)

# Output the JSON representation of the saved operation
print(saved_operation)

# Generate the object structure for another new operation object to update the previous operation
operation_data = system.mes.operation.newOperation()

# Set basic attributes for the updated operation
operation_data['id'] = saved_operation.id
operation_data['locationId'] = '01JD7M94CJ-HPEQEJ1F-QA8EQ6VE'
operation_data['name'] = 'Packaging'
operation_data['flushIntervalMillis'] = 1000
# (You can continue setting other properties as needed here)

# Save the operation to update it in the system
updated_operation = system.mes.operation.saveOperation(**operation_data)

# Output the JSON representation of the updated operation
print(updated_operation)
```
