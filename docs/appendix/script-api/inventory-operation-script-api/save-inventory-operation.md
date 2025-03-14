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

| Parameter                         | Type            | Description                                                                                                        |
|-----------------------------------|-----------------|--------------------------------------------------------------------------------------------------------------------|
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