---
sidebar_position: 3
title: "saveOperation"
description: "Creates or updates an operation with specified parameters."
---

# system.mes.operation.saveOperation

## Description

Creates or updates a [Operations](../../data-model/operation-model/operation) record in the system based on the provided parameters.


## Permissions

This method requires the `OPERATION.WRITE.SAVE` permission.

## Syntax

```python
system.mes.operation.saveOperation(**operation_data)
```

## Parameters

| Parameter                             | Type            | Nullable | Description                                                                                                                            |
|---------------------------------------|-----------------|----------|----------------------------------------------------------------------------------------------------------------------------------------|
| `locationId`                          | `String` (ULID) | False    | The ULID of the location associated with the operation.                                                                                |
| `locationPath`                        | `String`        | True     | The path of the location associated with the operation.                                                                                |
| `name`                                | `String`        | False    | The name of the operation.                                                                                                             |
| `status`                              | `String`        | True     | The status of the operation. Default value is `IDLE`                                                                                   |
| `currentOperationRecordId`            | `String` (ULID) | True     | The ULID of the current operation record.                                                                                              |
| `currentProductionOrderId`            | `String` (ULID) | True     | The ULID of the current production order associated with the operation.                                                                |
| `runningConflictStrategy`             | `String`        | False    | The conflict strategy when a new operation is started while another is running. Default value is `STOP_PREVIOUS`                       |
| `triggerSource`                       | `String`        | False    | The ways that the various operations can trigger. Default value is `EXPRESSION`                                                        |
| `startTriggerExpression`              | `String`        | True     | The Ignition expression to trigger the start of the operation.                                                                         |
| `startTriggerType`                    | `String`        | False    | The trigger type when starting the operation. Default value is `RISING_EDGE`                                                           |
| `stopTriggerExpression`               | `String`        | True     | The Ignition expression to trigger the end of the operation.                                                                           |
| `stopTriggerType`                     | `String`        | False    | The trigger type when stopping the operation. Default value is `FALLING_EDGE`                                                          |
| `productionOrderResolutionStrategy`   | `String`        | True     | The resolution strategy to get the production order. Default value is `NONE`                                                           |
| `productionOrderUpdateStrategy`       | `String`        | True     | The update strategy if the production order expression changes while the operation is active. Default value is `KEEP_FIRST_GOOD_VALUE` |
| `productionOrderExpression`           | `String`        | True     | The Ignition expression of the production order associated with the operation.                                                         |
| `updateProductionOrderStatusOnStart`  | `Boolean`       | False    | Indicates if the production order status should update when the operation starts. Default value is `false`                             |
| `startProductionOrderStatus`          | `String`        | True     | The status of the production order when the operation starts. Default value is `RUNNING`                                               |
| `updateProductionOrderStatusOnStop`   | `Boolean`       | False    | Indicates if the production order status should update when the operation stops. Default value is `false`                              |
| `stopProductionOrderStatus`           | `String`        | True     | The status of the production order when the operation stops. Default value is `STOPPED`                                                |
| `autoAddToSchedule`                   | `Boolean`       | False    | Indicates if the operation should be automatically added to the schedule if it doesn't exist. Default value is `true`                  |
| `expectedDurationCalculationStrategy` | `String`        | True     | The resolution strategy to get the expected duration of the operation. Default value is `STATIC`                                       |
| `expectedDurationSeconds`             | `Integer`       | True     | The expected duration of the operation in seconds. Default value is `0`                                                                |
| `expectedDurationExpression`          | `String`        | True     | The Ignition expression of the expected duration of the operation.                                                                     |
| `flushIntervalMillis`                 | `Integer`       | True     | The flush interval in milliseconds. Default value is `0`                                                                               |
| `id`                                  | `String` (ULID) | True     | The ULID of the operation (optional, used for updating an existing operation).                                                         |
| `notes`                               | `String`        | True     | Notes related to the operation.                                                                                                        |
| `enabled`                             | `Boolean`       | True     | Indicates if the operation is active and enabled. Default value is `true`                                                              |
| `spare1`                              | `String`        | True     | Additional field for user-defined context.                                                                                             |
| `spare2`                              | `String`        | True     | Additional field for user-defined context.                                                                                             |
| `spare3`                              | `String`        | True     | Additional field for user-defined context.                                                                                             |

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
