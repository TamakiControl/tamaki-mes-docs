---
sidebar_position: 2
title: 'newInventoryOperation'
description: 'Generates an empty non-persisted inventory operation object to provide the structure to retrieve records from the database.'
---

# system.mes.inventory.operation.newInventoryOperation

## Description

Generates an empty non-persisted [Inventory Operations](../../data-model/inventory-model/inventory-operation) object to provide the structure required by the API
to save a new record into the database. This method must be combined with the [saveInventoryOperation](./save-inventory-operation) method in order to persist the record.

## Permissions

This method does not require any permissions.

## Syntax

```python
system.mes.inventory.operation.newInventoryOperation()
```

## Parameters

| Parameter | Type | Nullable | Description                               |
| --------- | ---- | -------- | ----------------------------------------- |
| None      | -    | -        | This method does not take any parameters. |

## Returns

Returns a JSON representation of the newly created Inventory Operation object. The following is a list of keys and default values:

| Key                               | Default Value   |
| --------------------------------- | --------------- |
| `operationId`                     | `null`          |
| `operationName`                   | `null`          |
| `name`                            | `null`          |
| `status`                          | `IDLE`          |
| `currentRecordId`                 | `null`          |
| `operationType`                   | `CONSUME`       |
| `triggerSource`                   | `EXPRESSION`    |
| `startTriggerExpression`          | `null`          |
| `startTriggerType`                | `RISING_EDGE`   |
| `stopTriggerExpression`           | `null`          |
| `stopTriggerType`                 | `FALLING_EDGE`  |
| `sourceLocationId`                | `null`          |
| `sourceLocationPath`              | `null`          |
| `destinationLocationId`           | `null`          |
| `destinationLocationPath`         | `null`          |
| `materialSource`                  | `STATIC`        |
| `materialId`                      | `null`          |
| `materialPath`                    | `null`          |
| `materialExpression`              | `null`          |
| `primaryLotResolutionStrategy`    | `AUTO_GENERATE` |
| `secondaryLotResolutionStrategy`  | `AUTO_GENERATE` |
| `primaryLotCodeExpression`        | `null`          |
| `secondaryLotCodeExpression`      | `null`          |
| `createLotIfNotFound`             | `false`         |
| `inventoryNameResolutionStrategy` | `MANUAL`        |
| `inventoryName`                   | `null`          |
| `inventoryNameExpression`         | `null`          |
| `quantitySource`                  | `EXPRESSION`    |
| `quantityExpression`              | `null`          |
| `quantityCalcType`                | `DELTA`         |
| `quantityOverflowValue`           | `null`          |
| `unitOfMeasureId`                 | `null`          |
| `unitOfMeasureName`               | `null`          |
| `unitOfMeasureResolutionStrategy` | `STATIC`        |
| `reasonCodeId`                    | `null`          |
| `reasonCodeName`                  | `null`          |
| `incrementProductionOrderCount`   | `false`         |
| `flushIntervalMillis`             | `0`             |
| `id`                              | `null`          |
| `notes`                           | `null`          |
| `enabled`                         | `true`          |
| `spare1`                          | `null`          |
| `spare2`                          | `null`          |
| `spare3`                          | `null`          |

## Code Examples

```python
# Generate the object structure for a new inventory operation object with no initial arguments
new_inventory_operation = system.mes.inventory.operation.newInventoryOperation()

# Set basic attributes for the new inventory operation
new_inventory_operation['name'] = 'Lids'
new_inventory_operation['sourceLocationId'] = '01JD7M94CJ-HPEQEJ1F-QA8EQ6VE'
# (You can continue setting other properties as needed here)

# Save the new inventory operation to the system
saved_inventory_operation = system.mes.inventory.operation.saveInventoryOperation(**new_inventory_operation)

# Output the JSON representation of the saved inventory operation
print(saved_inventory_operation)
```
