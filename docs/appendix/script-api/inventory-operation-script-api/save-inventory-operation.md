---
sidebar_position: 3
title: "saveInventoryOperation"
description: "Creates or updates an inventory operation with specified parameters."
---

# system.mes.inventory.operation.saveInventoryOperation

## Description

Creates or updates an [Inventory Operations](../../data-model/inventory-operation-model/inventory-operation) record in the system based on the provided parameters.


## Permissions

This method requires the `INVENTORY_OPERATION.WRITE.SAVE` permission.

## Syntax

```python
system.mes.inventory.operation.saveInventoryOperation(**inventory_operation_data)
```

## Parameters

| Parameter                         | Type            | Nullable | Description                                                                                                                      |
|-----------------------------------|-----------------|----------|----------------------------------------------------------------------------------------------------------------------------------|
| `operationId`                     | `String` (ULID) | True     | The ULID of the operation associated with this inventory operation.                                                              |
| `operationName`                   | `String`        | True     | The name of the operation associated with this inventory operation.                                                              |
| `name`                            | `String`        | False    | The name of the inventory operation.                                                                                             |
| `status`                          | `String`        | True     | The status of the inventory operation.                                                                                           |
| `currentRecordId`                 | `String` (ULID) | True     | The ULID of the current inventory lot record associated with this inventory operation.                                           |
| `operationType`                   | `String`        | False    | The type of inventory operation. Default value is `CONSUME`.                                                                     |
| `triggerSource`                   | `String`        | False    | The trigger evaluation strategy. Default value is `EXPRESSION`.                                                                  |
| `startTriggerExpression`          | `String`        | True     | The Ignition expression to trigger the start of the operation.                                                                   |
| `startTriggerType`                | `String`        | True     | The trigger type when starting the operation. Default `RISING_EDGE`.                                                             |
| `stopTriggerExpression`           | `String`        | True     | The Ignition expression to trigger the end of the operation.                                                                     |
| `stopTriggerType`                 | `String`        | True     | The trigger type when stopping the operation. Default `FALLING_EDGE`.                                                            |
| `sourceLocationId`                | `String` (ULID) | True     | The ULID of the source location.                                                                                                 |
| `sourceLocationPath`              | `String`        | True     | The path of the source location.                                                                                                 |
| `destinationLocationId`           | `String` (ULID) | True     | The ULID of the destination location.                                                                                            |
| `destinationLocationPath`         | `String`        | True     | The path of the destination location.                                                                                            |
| `materialSource`                  | `String`        | False    | The strategy used for resolving material. Default value is `STATIC`.                                                            |
| `materialId`                      | `String` (ULID) | True     | The ULID of the material (if `materialSource` is `STATIC`).                                                                      |
| `materialPath`                    | `String`        | True     | The path of the material (if `materialSource` is `STATIC`).                                                                      |
| `materialExpression`              | `String`        | True     | The Ignition expression resolving material (if `materialSource` is `EXPRESSION`). Must return an id or path.                    |
| `secondaryMaterialId`             | `String` (ULID) | True     | The ULID of the secondary material (optional, used for certain operation types).                                                 |
| `secondaryMaterialPath`           | `String`        | True     | The path of the secondary material.                                                                                              |
| `primaryLotResolutionStrategy`    | `String`        | False    | Strategy to resolve the primary lot code. Default `AUTO_GENERATE`.                                                               |
| `secondaryLotResolutionStrategy`  | `String`        | False    | Strategy to resolve the secondary lot code. Default `AUTO_GENERATE`.                                                             |
| `primaryLotCodeExpression`        | `String`        | True     | Expression resolving primary lot code (if strategy is `EXPRESSION`).                                                             |
| `secondaryLotCodeExpression`      | `String`        | True     | Expression resolving secondary lot code (if strategy is `EXPRESSION`).                                                           |
| `createLotIfNotFound`             | `Boolean`       | True     | Create the lot if not found. Only used for certain operation types (e.g. `CONSUME`).                                             |
| `inventoryNameResolutionStrategy` | `String`        | False    | Strategy to resolve inventory name. Default value is `STATIC`.                                                                   |
| `inventoryName`                   | `String`        | True     | The inventory name (if strategy is `STATIC`).                                                                                    |
| `inventoryNameExpression`         | `String`        | True     | Expression resolving inventory name (if strategy is `EXPRESSION`).                                                               |
| `quantitySource`                  | `String`        | False    | Source for quantity. Default value is `EXPRESSION`.                                                                              |
| `quantityExpression`              | `String`        | True     | Quantity expression (required when `quantitySource` = `EXPRESSION`).                                                             |
| `quantityCalcType`                | `String`        | False    | Quantity calculation type (`DELTA` or `DIRECT`). Default `DELTA`.                                                                |
| `quantityOverflowValue`           | `Double`        | True     | Overflow rollover threshold when using a rising counter with `DELTA` semantics.                                                  |
| `unitOfMeasureId`                 | `String` (ULID) | True     | ULID of the unit of measure.                                                                                                     |
| `unitOfMeasureName`               | `String`        | True     | Name of the unit of measure.                                                                                                     |
| `unitOfMeasureResolutionStrategy` | `String`        | False    | Strategy for unit of measure. Default `STATIC`.                                                                                  |
| `reasonCodeId`                    | `String` (ULID) | True     | ULID of the material reason code.                                                                                                |
| `reasonCodeName`                  | `String`        | True     | Name of the material reason code.                                                                                                |
| `incrementProductionOrderCount`   | `Boolean`       | False    | Increment production order quantity for shipping/producing. Default `false`.                                                     |
| `id`                              | `String` (ULID) | True     | The ULID of the inventory operation (supply to update).                                                                          |
| `notes`                           | `String`        | True     | Notes related to the inventory operation.                                                                                        |
| `enabled`                         | `Boolean`       | True     | Indicates if the inventory operation is enabled. Default `true`.                                                                 |
| `spare1`                          | `String`        | True     | Additional field for user context.                                                                                               |
| `spare2`                          | `String`        | True     | Additional field for user context.                                                                                               |
| `spare3`                          | `String`        | True     | Additional field for user context.                                                                                               |

## Returns

Returns a JSON representation of the saved inventory operation.

## Code Examples

```python
# Generate the object structure for a new inventory operation object, set the initial arguments and save it
new_inventory_operation = system.mes.inventory.operation.newInventoryOperation()
new_inventory_operation['name'] = 'Lids'
new_inventory_operation['sourceLocationId'] = '01JD7M94CJ-HPEQEJ1F-QA8EQ6VE'
saved_inventory_operation = system.mes.inventory.operation.saveInventoryOperation(**new_inventory_operation)

print(saved_inventory_operation)

# Update existing inventory operation
inventory_operation_data = system.mes.inventory.operation.newInventoryOperation()
inventory_operation_data['id'] = saved_inventory_operation.id
inventory_operation_data['name'] = 'Lids'
inventory_operation_data['sourceLocationId'] = '01JD7M94CJ-HPEQEJ1F-QA8EQ6VE'
inventory_operation_data['materialId'] = '01JCH3GRA3-5ZYFZV5V-RW3FKFJX'
inventory_operation_data['unitOfMeasureId'] = '01JCH3T85P-KVCB8ZR5-0B83A3SX'
updated_inventory_operation = system.mes.inventory.operation.saveInventoryOperation(**inventory_operation_data)

print(updated_inventory_operation)
```
