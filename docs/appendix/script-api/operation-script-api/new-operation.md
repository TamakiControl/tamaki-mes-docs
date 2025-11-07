---
sidebar_position: 2
title: "newOperation"
description: "Generates an empty non-persisted operations object to provide the structure to save a new record into the database."
---

# system.mes.operation.newOperation

## Description

Generates an empty non-persisted [Operations](../../data-model/operation-model/operation) object to provide the structure required by the API
to save a new record into the database. This method must be combined with the [saveOperation](./save-operation) method in order to persist the record.

## Syntax

```python
system.mes.operation.newOperation()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
|-----------|------|----------|-------------------------------------------|
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created operation object. The following is a list of keys and default values:

| Key                                   | Default Value           |
|---------------------------------------|-------------------------|
| `locationId`                          | `null`                  |
| `locationPath`                        | `null`                  |
| `name`                                | `null`                  |
| `status`                              | `IDLE`                  |
| `currentOperationRecordId`            | `null`                  |
| `currentProductionOrderId`            | `null`                  |
| `runningConflictStrategy`             | `STOP_PREVIOUS`         |
| `triggerSource`                       | `EXPRESSION`            |
| `startTriggerExpression`              | `null`                  |
| `startTriggerType`                    | `RISING_EDGE`           |
| `stopTriggerExpression`               | `null`                  |
| `stopTriggerType`                     | `FALLING_EDGE`          |
| `productionOrderResolutionStrategy`   | `NONE`                  |
| `productionOrderUpdateStrategy`       | `KEEP_FIRST_GOOD_VALUE` |
| `productionOrderExpression`           | `null`                  |
| `updateProductionOrderStatusOnStart`  | `false`                 |
| `startProductionOrderStatus`          | `RUNNING`               |
| `updateProductionOrderStatusOnStop`   | `false`                 |
| `stopProductionOrderStatus`           | `STOPPED`               |
| `autoAddToSchedule`                   | `true`                  |
| `expectedDurationCalculationStrategy` | `STATIC`                |
| `expectedDurationSeconds`             | `0`                     |
| `expectedDurationExpression`          | `null`                  |
| `flushIntervalMillis`                 | `0`                     |
| `id`                                  | `null`                  |
| `notes`                               | `null`                  |
| `enabled`                             | `true`                  |
| `spare1`                              | `null`                  |
| `spare2`                              | `null`                  |
| `spare3`                              | `null`                  |

## Code Examples

```python
# Generate the object structure for a new operation object with no initial arguments
newOperation = system.mes.operation.newOperation()

# Set basic attributes for the new operation
newOperation['locationId'] = '01JD7M94CJ-HPEQEJ1F-QA8EQ6VE'
newOperation['name'] = 'Packaging'
# (You can continue setting other properties as needed here)

# Save the new operation to the system
savedOperation = system.mes.operation.saveOperation(**newOperation)

# Output the JSON representation of the saved operation
print(savedOperation)
```
