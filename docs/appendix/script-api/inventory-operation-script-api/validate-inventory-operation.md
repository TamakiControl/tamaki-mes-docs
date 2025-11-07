---
sidebar_position: 9
title: "validateInventoryOperation"
description: "Validates the specified parameters for an inventory operation."
---

# system.mes.inventory.operation.validateInventoryOperation

## Description

Validates the specified parameters for an [Inventory Operation](../../data-model/inventory-operation-model/inventory-operation) record and returns any validation errors.
This only checks if the inventory operation object can be saved based on the attributes given.

## Syntax

```python
system.mes.inventory.operation.validateInventoryOperation(**inventoryOperationData)
```

## Parameters

| Parameter                         | Type            | Nullable | Description                                                                                                                      |
|-----------------------------------|-----------------|----------|----------------------------------------------------------------------------------------------------------------------------------|
| `operationId`                     | `String` (ULID) | True     | The ULID of the operation associated with this inventory operation.                                                              |
| `operationName`                   | `String`        | True     | The name of the operation associated with this inventory operation.                                                              |
| `name`                            | `String`        | False    | The name of the inventory operation.                                                                                             |
| `status`                          | `String`        | True     | The status of the inventory operation.                                                                                           |
| `currentRecordId`                 | `String` (ULID) | True     | The ULID of the current inventory lot record associated with this inventory operation.                                           |
| `operationType`                   | `String`        | False    | The inventory operation type. Default `CONSUME`.                                                                                 |
| `triggerSource`                   | `String`        | False    | Trigger evaluation strategy. Default `EXPRESSION`.                                                                               |
| `startTriggerExpression`          | `String`        | True     | Expression to trigger start of the operation.                                                                                    |
| `startTriggerType`                | `String`        | True     | Trigger type for start. Default `RISING_EDGE`.                                                                                   |
| `stopTriggerExpression`           | `String`        | True     | Expression to trigger end of the operation.                                                                                      |
| `stopTriggerType`                 | `String`        | True     | Trigger type for stop. Default `FALLING_EDGE`.                                                                                   |
| `sourceLocationId`                | `String` (ULID) | True     | ULID of the source location.                                                                                                     |
| `sourceLocationPath`              | `String`        | True     | Path of the source location.                                                                                                     |
| `destinationLocationId`           | `String` (ULID) | True     | ULID of the destination location.                                                                                                |
| `destinationLocationPath`         | `String`        | True     | Path of the destination location.                                                                                                |
| `materialSource`                  | `String`        | False    | Material resolution strategy. Default `STATIC`.                                                                                  |
| `materialId`                      | `String` (ULID) | True     | ULID of the material (if `STATIC`).                                                                                              |
| `materialPath`                    | `String`        | True     | Path of the material (if `STATIC`).                                                                                              |
| `materialExpression`              | `String`        | True     | Expression resolving material (if `EXPRESSION`).                                                                                 |
| `secondaryMaterialId`             | `String` (ULID) | True     | ULID of the secondary material (optional).                                                                                       |
| `secondaryMaterialPath`           | `String`        | True     | Path of the secondary material.                                                                                                  |
| `primaryLotResolutionStrategy`    | `String`        | False    | Strategy for primary lot code. Default `AUTO_GENERATE`.                                                                          |
| `secondaryLotResolutionStrategy`  | `String`        | False    | Strategy for secondary lot code. Default `AUTO_GENERATE`.                                                                        |
| `primaryLotCodeExpression`        | `String`        | True     | Expression for primary lot code (if strategy `EXPRESSION`).                                                                      |
| `secondaryLotCodeExpression`      | `String`        | True     | Expression for secondary lot code (if strategy `EXPRESSION`).                                                                    |
| `createLotIfNotFound`             | `Boolean`       | True     | Create lot if not found (certain operation types only).                                                                          |
| `inventoryNameResolutionStrategy` | `String`        | False    | Inventory name resolution strategy. Default `STATIC`.                                                                            |
| `inventoryName`                   | `String`        | True     | Inventory name (if strategy `STATIC`).                                                                                           |
| `inventoryNameExpression`         | `String`        | True     | Expression for inventory name (if strategy `EXPRESSION`).                                                                        |
| `quantitySource`                  | `String`        | False    | Quantity source. Default `EXPRESSION`.                                                                                           |
| `quantityExpression`              | `String`        | True     | Quantity expression (required if source `EXPRESSION`).                                                                           |
| `quantityCalcType`                | `String`        | False    | Quantity calculation type. Default `DELTA`.                                                                                      |
| `quantityOverflowValue`           | `Double`        | True     | Rollover threshold for rising counters when using `DELTA`.                                                                       |
| `unitOfMeasureId`                 | `String` (ULID) | True     | ULID of the unit of measure (if `STATIC`).                                                                                       |
| `unitOfMeasureName`               | `String`        | True     | Name of unit of measure.                                                                                                         |
| `unitOfMeasureResolutionStrategy` | `String`        | False    | Unit of measure resolution strategy. Default `STATIC`.                                                                           |
| `reasonCodeId`                    | `String` (ULID) | True     | ULID of material reason code.                                                                                                    |
| `reasonCodeName`                  | `String`        | True     | Name of material reason code.                                                                                                    |
| `incrementProductionOrderCount`   | `Boolean`       | False    | Increment production order count (shipping/producing). Default `false`.                                                          |
| `id`                              | `String` (ULID) | True     | ULID of the inventory operation (for update).                                                                                    |
| `notes`                           | `String`        | True     | Notes.                                                                                                                           |
| `enabled`                         | `Boolean`       | True     | Whether the inventory operation is enabled. Default `true`.                                                                     |
| `spare1`                          | `String`        | True     | User-defined field.                                                                                                              |
| `spare2`                          | `String`        | True     | User-defined field.                                                                                                              |
| `spare3`                          | `String`        | True     | User-defined field.                                                                                                              |

## Returns

Returns a JSON object where keys are field names and values are lists of validation violation messages.

## Code Examples

```python
# Generate the object structure for a new inventory operation object
inventoryOperationData = system.mes.inventory.operation.newInventoryOperation()

# Set basic attributes for the new inventory operation
inventoryOperationData['name'] = 'Lids'
inventoryOperationData['sourceLocationId'] = '01JD7M94CJ-HPEQEJ1F-QA8EQ6VE'
# (You can continue setting other properties as needed here)

# Validate inventory operation parameters
validationErrors = system.mes.inventory.operation.validateInventoryOperation(**inventoryOperationData)

if len(validationErrors) > 0:
    print('Validation errors found:', validationErrors)
else:
    print('Inventory operation parameters are valid.')
```
