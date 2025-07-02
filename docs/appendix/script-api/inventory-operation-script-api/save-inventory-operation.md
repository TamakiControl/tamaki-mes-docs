---
sidebar_position: 3
title: "saveInventoryOperation"
description: "Creates or updates an inventory operation with specified parameters."
---

# system.mes.inventory.operation.saveInventoryOperation

## Description

Creates or updates an [Inventory Operations](../../data-model/inventory-model/inventory-operation) record in the system based on the provided parameters.

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
| `operationType`                   | `String`        | False    | The type of operation record for this inventory operation. Default value is `CONSUME`.                                           |
| `triggerSource`                   | `String`        | False    | The ways that the various inventory operations can trigger. Default value is `EXPRESSION`.                                       |
| `startTriggerExpression`          | `String`        | True     | The Ignition expression to trigger the start of the transfer of materials.                                                       |
| `startTriggerType`                | `String`        | True     | The trigger type when starting the transfer of materials.                                                                        |
| `stopTriggerExpression`           | `String`        | True     | The Ignition expression to trigger the end of the transfer of materials.                                                         |
| `stopTriggerType`                 | `String`        | True     | The trigger type when stopping the transfer of materials.                                                                        |
| `sourceLocationId`                | `String` (ULID) | True     | The ULID of the location for movement source.                                                                                    |
| `sourceLocationPath`              | `String`        | True     | The path of the location for movement source.                                                                                    |
| `destinationLocationId`           | `String` (ULID) | True     | The ULID of the location for movement destination.                                                                               |
| `destinationLocationPath`         | `String`        | True     | The path of the location for movement destination.                                                                               |
| `materialSource`                  | `String`        | False    | The strategy used for resolving material ID for an operation. Default value is `STATIC`.                                         |
| `materialId`                      | `String` (ULID) | True     | The ULID of the material associated with the inventory operation.                                                                |
| `materialPath`                    | `String`        | True     | The path of the material associated with the inventory operation.                                                                |
| `materialExpression`              | `String`        | True     | The Ignition expression for the material associated with this inventory operation.                                               |
| `primaryLotResolutionStrategy`    | `String`        | False    | The resolution strategy to get the primary lot code. Default value is `AUTO_GENERATE`.                                           |
| `secondaryLotResolutionStrategy`  | `String`        | False    | The resolution strategy to get the secondary lot code. Default value is `AUTO_GENERATE`.                                         |
| `primaryLotCodeExpression`        | `String`        | True     | The Ignition expression to specify the primary lot code.                                                                         |
| `secondaryLotCodeExpression`      | `String`        | True     | The Ignition expression to specify the secondary lot code.                                                                       |
| `createLotIfNotFound`             | `Boolean`       | True     | Indicates if a lot should be created if it doesn't exist. Only used if operationType is CONSUME.                                 |
| `inventoryNameResolutionStrategy` | `String`        | False    | The resolution strategy to get the inventory name. Default value is `MANUAL`.                                                    |
| `inventoryName`                   | `String`        | True     | The name of the inventory associated with the inventory operation.                                                               |
| `inventoryNameExpression`         | `String`        | True     | The Ignition expression to specify the inventory name.                                                                           |
| `quantitySource`                  | `String`        | False    | The source of the quantity of an inventory operation. Default value is `EXPRESSION`.                                             |
| `quantityExpression`              | `String`        | True     | The Ignition expression to specify the quantity.                                                                                 |
| `quantityCalcType`                | `String`        | False    | The calculation type for quantity. Only used if quantitySource is `EXPRESSION`. Default value is `DELTA`.                        |
| `quantityOverflowValue`           | `String`        | True     | The overflow value for the quantity. Only used if quantitySource is EXPRESSION and the quantityCalcType is RISING.               |
| `unitOfMeasureId`                 | `String` (ULID) | True     | The ULID of the unit of measure associated with the inventory operation.                                                         |
| `unitOfMeasureName`               | `String`        | True     | The name of the unit of measure associated with the inventory operation.                                                         |
| `unitOfMeasureResolutionStrategy` | `String`        | False    | The source of the unit of measure associated with the inventory operation. Default value is `STATIC`.                            |
| `reasonCodeId`                    | `String` (ULID) | True     | The ULID of the reason code associated with the inventory operation.                                                             |
| `reasonCodeName`                  | `String`        | True     | The name of the reason code associated with the inventory operation.                                                             |
| `incrementProductionOrderCount`   | `Boolean`       | False    | Indicates if the production order quantity should be updated if we are shipping or producing material. Default value is `false`. |
| `flushIntervalMillis`             | `Integer`       | True     | The flush interval in milliseconds. Default value is `0`.                                                                        |
| `id`                              | `String` (ULID) | True     | The ULID of the inventory operation (optional, used for updating an existing inventory operation).                               |
| `notes`                           | `String`        | True     | Notes related to the inventory operation.                                                                                        |
| `enabled`                         | `Boolean`       | True     | Indicates if the inventory operation is active and enabled.                                                                      |
| `spare1`                          | `String`        | True     | Additional field for user-defined context.                                                                                       |
| `spare2`                          | `String`        | True     | Additional field for user-defined context.                                                                                       |
| `spare3`                          | `String`        | True     | Additional field for user-defined context.                                                                                       |

## Returns

Returns a JSON representation of the saved inventory operation.

## Code Examples

```python
# Generate the object structure for a new inventory operation object, set the initial arguments and save it
new_inventory_operation = system.mes.inventory.operation.newInventoryOperation()
new_inventory_operation['name'] = 'Lids'
new_inventory_operation['sourceLocationId'] = '01JD7M94CJ-HPEQEJ1F-QA8EQ6VE'
saved_inventory_operation = system.mes.inventory.operation.saveInventoryOperation(**new_inventory_operation)

# Output the JSON representation of the saved inventory operation
print(saved_inventory_operation)

# Generate the object structure for another new inventory operation object to update the previous inventory operation
inventory_operation_data = system.mes.inventory.operation.newInventoryOperation()

# Set basic attributes for the updated inventory operation
inventory_operation_data['id'] = saved_inventory_operation.id
inventory_operation_data['name'] = 'Lids'
inventory_operation_data['sourceLocationId'] = '01JD7M94CJ-HPEQEJ1F-QA8EQ6VE'
inventory_operation_data['materialId'] = '01JCH3GRA3-5ZYFZV5V-RW3FKFJX'
inventory_operation_data['unitOfMeasureId'] = '01JCH3T85P-KVCB8ZR5-0B83A3SX'
# (You can continue setting other properties as needed here)

# Save the inventory operation to update it in the system
updated_inventory_operation = system.mes.inventory.operation.saveInventoryOperation(**inventory_operation_data)

# Output the JSON representation of the updated inventory operation
print(updated_inventory_operation)
```
