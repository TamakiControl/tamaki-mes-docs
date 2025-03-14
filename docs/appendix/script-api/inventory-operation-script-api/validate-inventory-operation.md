---
sidebar_position: 9
title: "validateInventoryOperation"
description: "Validates the specified parameters for an inventory operation."
---

# system.mes.inventory.validateLot

## Description

Validates the specified parameters for an [Inventory Operations](../../data-model/inventory-model/inventory-operation) record and returns any validation errors.
This only checks if the inventory operation object can be saved based on the attributes given.

## Syntax

```python
system.mes.inventory.operation.validateInventoryOperation(**inventory_operation_data)
```

## Parameters

| Parameter                         | Type            | Description                                                                                                        |
| --------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------ |
| `operationId`                     | `String` (ULID) | The ULID of the operation associated with this inventory operation.                                                |
| `operationName`                   | `String`        | The name of the operation associated with this inventory operation.                                                |
| `name`                            | `String`        | The name of the inventory operation.                                                                               |
| `status`                          | `String`        | The status of the inventory operation.                                                                             |
| `currentRecordId`                 | `String` (ULID) | The ULID of the current inventory lot record associated with this inventory operation.                             |
| `operationType`                   | `String`        | The type of operation record for this inventory operation.                                                         |
| `triggerSource`                   | `String`        | The ways that the various inventory operations can trigger.                                                        |
| `startTriggerExpression`          | `String`        | The Ignition expression to trigger the start of the transfer of materials.                                         |
| `startTriggerType`                | `String`        | The trigger type when starting the transfer of materials.                                                          |
| `stopTriggerExpression`           | `String`        | The Ignition expression to trigger the end of the transfer of materials.                                           |
| `stopTriggerType`                 | `String`        | The trigger type when stopping the transfer of materials.                                                          |
| `sourceLocationId`                | `String` (ULID) | The ULID of the location for movement source.                                                                      |
| `sourceLocationPath`              | `String`        | The path of the location for movement source.                                                                      |
| `destinationLocationId`           | `String` (ULID) | The ULID of the location for movement destination.                                                                 |
| `destinationLocationPath`         | `String`        | The path of the location for movement destination.                                                                 |
| `materialSource`                  | `String`        | The strategy used for resolving material id for an operation.                                                      |
| `materialId`                      | `String` (ULID) | The ULID of the material associated with the inventory operation.                                                  |
| `materialPath`                    | `String`        | The path of the material associated with the inventory operation.                                                  |
| `materialExpression`              | `String`        | The Ignition expression for the material associated with this inventory operation.                                 |
| `primaryLotResolutionStrategy`    | `String`        | The resolution strategy to get the primary lot code.                                                               |
| `secondaryLotResolutionStrategy`  | `String`        | The resolution strategy to get the secondary lot code.                                                             |
| `primaryLotCodeExpression`        | `String`        | The Ignition expression to specify the primary lot code.                                                           |
| `secondaryLotCodeExpression`      | `String`        | The Ignition expression to specify the secondary lot code.                                                         |
| `createLotIfNotFound`             | `Boolean`       | Indicates if a lot should be created if it doesn't exist. Only used if operationType is CONSUME.                   |
| `inventoryNameResolutionStrategy` | `String`        | The resolution strategy to get the inventory name.                                                                 |
| `inventoryName`                   | `String`        | The name of the inventory associated with the inventory operation.                                                 |
| `inventoryNameExpression`         | `String`        | The Ignition expression to specify the inventory name.                                                             |
| `quantitySource`                  | `String`        | The source of the quantity of an inventory operation.                                                              |
| `quantityExpression`              | `String`        | The Ignition expression to specify the quantity.                                                                   |
| `quantityCalcType`                | `String`        | The calculation type for quantity. Only used if quantitySource is EXPRESSION.                                      |
| `quantityOverflowValue`           | `String`        | The overflow value for the quantity. Only used if quantitySource is EXPRESSION and the quantityCalcType is RISING. |
| `unitOfMeasureId`                 | `String` (ULID) | The ULID of the unit of measure associated with the inventory operation.                                           |
| `unitOfMeasureName`               | `String`        | The name of the unit of measure associated with the inventory operation.                                           |
| `unitOfMeasureResolutionStrategy` | `String`        | The source of the unit of measure associated with the inventory operation.                                         |
| `reasonCodeId`                    | `String` (ULID) | The ULID of the reason code associated with the inventory operation.                                               |
| `reasonCodeName`                  | `String`        | The name of the reason code associated with the inventory operation.                                               |
| `incrementProductionOrderCount`   | `Boolean`       | Indicates if the production order quantity should be updated if we are shipping or producing material.             |
| `flushIntervalMillis`             | `Integer`       | The flush interval in milliseconds.                                                                                |
| `id`                              | `String` (ULID) | The ULID of the inventory operation (optional, used for updating an existing inventory operation).                 |
| `notes`                           | `String`        | Notes related to the inventory operation.                                                                          |
| `enabled`                         | `Boolean`       | Indicates if the inventory operation is active and enabled.                                                        |
| `spare1`                          | `String`        | Additional field for user-defined context.                                                                         |
| `spare2`                          | `String`        | Additional field for user-defined context.                                                                         |
| `spare3`                          | `String`        | Additional field for user-defined context.                                                                         |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new inventory operation object
inventory_operation_data = system.mes.inventory.operation.newInventoryOperation()

# Set basic attributes for the new inventory operation
inventory_operation_data['name'] = 'Lids'
inventory_operation_data['sourceLocationId'] = '01JD7M94CJ-HPEQEJ1F-QA8EQ6VE'
# (You can continue setting other properties as needed here)

# Validate inventory operation parameters
validation_errors = system.mes.inventory.operation.validateInventoryOperation(**inventory_operation_data)

if len(validation_errors) > 0:
    print('Validation errors found:', validation_errors)
else:
    print('Lot parameters are valid.')
```
