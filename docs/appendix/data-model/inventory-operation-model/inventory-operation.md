---
sidebar_position: 2
title: "inventory_operations"
description: "Documentation for the inventory_operations table, outlining its columns and structure."
---

# Inventory Operation

## Overview

The `Inventory Operation` entity represents a specific action that can be performed on the lots and inventory.
Each inventory operation is defined with key attributes to determine the lots, locations, materials, quantities, and
triggers for starting and stopping.
These fields collectively enable precise planning, execution, and tracking of inventory operations.

## Table Structure

The following table outlines the SQL columns for the `inventory_operations` table, providing a brief description of
each, along with sample data where applicable.

| Column                                | Type            | Description                                                                                                      | Example                             |
| ------------------------------------- | --------------- | ---------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| `id`                                  | `String` (ULID) | Unique identifier for the entity.                                                                                | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `enabled`                             | `Boolean`       | If the entity is enabled or not.                                                                                 | `true`                              |
| `created_date`                        | `DateTime`      | Date the entity was created.                                                                                     | `2024-12-31T19:48:44Z`              |
| `created_by`                          | `String`        | Person who created the entity.                                                                                   | `TamakiMES`                         |
| `modified_date`                       | `DateTime`      | Date the entity was modified. Value is null upon creation, and gets initially populated upon the first edit.     | `2024-12-31T19:48:44Z`              |
| `modified_by`                         | `String`        | Last person to modify the entity. Value is null upon creation, and gets initially populated upon the first edit. | `TamakiMES`                         |
| `notes`                               | `Blob`          | Notes about the entity.                                                                                          | `This entity has these extra notes` |
| `spare1`                              | `String`        | The first spare column that can be used for additional context on the entity.                                    | `some extra context 1`              |
| `spare2`                              | `String`        | The second spare column that can be used for additional context on the entity.                                   | `some extra context 2`              |
| `spare3`                              | `String`        | The third spare column that can be used for additional context on the entity.                                    | `some extra context 3`              |
| `operation_id`                        | `String` (ULID) | References the operation associated with the inventory operation.                                                | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `name`                                | `String`        | Name of the inventory operation.                                                                                 | `Packaging`                         |
| `status`                              | `String` (Enum) | Status of the inventory operation (e.g., IDLE, RUNNING, STOPPED, FAULTED).                                       | `IDLE`                              |
| `current_record_id`                   | `String` (ULID) | References the current inventory lot record.                                                                     | `01JAP8R5RT-3FPXQABY-7KQZT6VF`      |
| `operation_type`                      | `String` (Enum) | Type of inventory operation (e.g., CONSUME, PRODUCE).                                                            | `CONSUME`                           |
| `trigger_source`                      | `String` (Enum) | Strategy for evaluating the trigger source (e.g., EXPRESSION).                                                   | `EXPRESSION`                        |
| `start_trigger_expression`            | `String`        | Expression to trigger the start of the operation.                                                                | `{[default]Trigger/Start}`          |
| `start_trigger_type`                  | `String` (Enum) | Type of start trigger (e.g., RISING_EDGE).                                                                       | `RISING_EDGE`                       |
| `stop_trigger_expression`             | `String`        | Expression to trigger the stop of the operation.                                                                 | `{[default]Trigger/Stop}`           |
| `stop_trigger_type`                   | `String` (Enum) | Type of stop trigger (e.g., FALLING_EDGE).                                                                       | `FALLING_EDGE`                      |
| `source_location_id`                  | `String` (ULID) | References the source location for the inventory transaction.                                                    | `01JAP8RJBN-7KQZT6VF-Q5VUZYPW`      |
| `destination_location_id`             | `String` (ULID) | References the destination location for the inventory transaction.                                               | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `material_source`                     | `String` (Enum) | Strategy for resolving the material source (e.g., STATIC, EXPRESSION).                                           | `STATIC`                            |
| `material_id`                         | `String` (ULID) | References the material associated with the operation.                                                           | `01JAP8RJBN-7KQZT6VF-Q5VUZYPW`      |
| `secondary_material_id`               | `String` (ULID) | References the secondary material associated with the operation.                                                 | `01JAP8RJBN-7KQZT6VF-Q5VUZYPW`      |
| `material_expression`                 | `String`        | Expression to resolve the material if the source is EXPRESSION.                                                  | `{[default]Material/Expression}`    |
| `primary_lot_resolution_strategy`     | `String` (Enum) | Strategy for resolving the primary lot code (e.g., AUTO_GENERATE).                                               | `AUTO_GENERATE`                     |
| `secondary_lot_resolution_strategy`   | `String` (Enum) | Strategy for resolving the secondary lot code (e.g., AUTO_GENERATE).                                             | `AUTO_GENERATE`                     |
| `primary_lot_code_expression`         | `String`        | Expression to resolve the primary lot code.                                                                      | `{[default]Lot/Primary}`            |
| `secondary_lot_code_expression`       | `String`        | Expression to resolve the secondary lot code.                                                                    | `{[default]Lot/Secondary}`          |
| `create_lot_if_not_found`             | `Boolean`       | Whether to create a lot if it doesn't exist.                                                                     | `false`                             |
| `inventory_name_resolution_strategy`  | `String` (Enum) | Strategy for resolving the inventory name (e.g., MANUAL).                                                        | `MANUAL`                            |
| `inventory_name`                      | `String`        | Name of the inventory.                                                                                           | `Inventory1`                        |
| `inventory_name_expression`           | `String`        | Expression to resolve the inventory name.                                                                        | `{[default]Inventory/Name}`         |
| `quantity_source`                     | `String` (Enum) | Source of the quantity (e.g., MANUAL, EXPRESSION).                                                               | `EXPRESSION`                        |
| `quantity_expression`                 | `String`        | Expression to resolve the quantity.                                                                              | `{[default]Quantity/Expression}`    |
| `quantity_calc_type`                  | `String` (Enum) | Calculation type for the quantity (e.g., DELTA).                                                                 | `DELTA`                             |
| `quantity_overflow_value`             | `Double`        | Overflow value for the quantity.                                                                                 | `100.0`                             |
| `unit_of_measure_id`                  | `String` (ULID) | References the unit of measure for the operation.                                                                | `01JAP8RJBN-7KQZT6VF-Q5VUZYPW`      |
| `unit_of_measure_resolution_strategy` | `String` (Enum) | Strategy for resolving the unit of measure (e.g., STATIC).                                                       | `STATIC`                            |
| `reason_code_id`                      | `String` (ULID) | References the material reason code for the operation.                                                           | `01JAP8RJBN-7KQZT6VF-Q5VUZYPW`      |
| `increment_production_order_count`    | `Boolean`       | Whether to increment the production order count.                                                                 | `false`                             |

## Field Details

### `name`

A descriptive identifier for the inventory operation.

### `status`

Represents the current status of the inventory operation, as defined by the **Status** enum, with possible values:

- **IDLE**: The inventory operation is not currently active or processing.
- **RUNNING**: The inventory operation is currently in progress.
- **COMPLETED**: The inventory operation has successfully completed.
- **FAULTED**: The inventory operation has encountered an error or issue.
- **CANCELLED**: The inventory operation has been cancelled before completion.
- **UNKNOWN**: The status of the inventory operation is not known or has not been set.
- **PAUSED**: The inventory operation is temporarily paused and not actively processing.

### `current_record_id`

References the current [InventoryLotRecord](../inventory-operation-model/inventory-lot-record) associated with the
inventory operation. Used in the case of a gateway restart.

### `operation_type`

Specifies the type of inventory operation, as defined by the **InventoryOperationType** enum, with possible values:

- **CONSUME**: The inventory operation is consuming inventory, such as raw materials or components.
- **UNCONSUME**: The inventory operation is reversing a consumption action, restoring inventory.
- **PRODUCE**: The inventory operation is producing finished goods or products.
- **MOVE**: The inventory operation is transferring inventory from one location to another.
- **SPLIT**: The inventory operation is splitting a lot into two lots.
- **MERGE**: The inventory operation is combining two lots into one.
- **SCRAP**: The inventory operation is disposing of inventory.
- **SCRAP_ALL**: The inventory operation is scrapping all inventory at a specific location.
- **RETURN**: The inventory operation is removing inventory from the MES system, typically for returns or corrections.
- **STATUS_CHANGE**: The inventory operation is changing the status of inventory for any reason.
- **EDIT**: The inventory operation is editing inventory details to correct or update information.
- **RECEIVE**: The inventory operation is receiving raw materials or components into the MES.
- **RECEIVE_AND_CONSUME**: The inventory operation is receiving and consuming inventory in a single operation.
- **SHIP**: The inventory operation is shipping finished goods or products out of the MES.

### `trigger_source`

Defines which strategy to determine the start and stop triggers. Options are defined by the **TriggerSource** enum, with
possible values:

- **MANUAL**: The inventory operation is manually triggered, typically through a user interface or script.
- **EXPRESSION**: The inventory operation is triggered based on an expression evaluation.
- **PARENT**: The inventory operation is triggered at the same time as the parent operation.

### `start_trigger_expression`

An expression that triggers the inventory operation to start. Used only if 'trigger_source' is set to `EXPRESSION`.
The expression must evaluate to a boolean value.

### `start_trigger_type`

Specifies on what boolean condition the inventory operation should start when evaluating the `start_trigger_expression`.
Possible values are defined by the **TriggerType** enum, with options:

- **RISING_EDGE**: The operation starts when the expression evaluates to `true` after being `false`.
- **FALLING_EDGE**: The operation starts when the expression evaluates to `false` after being `true`.
- **CHANGE**: The operation starts when the expression changes its value.

### `stop_trigger_expression`

An expression that triggers the inventory operation to stop. Used only if 'trigger_source' is set to `EXPRESSION`.
The expression must evaluate to a boolean value.

### `stop_trigger_type`

Specifies on what boolean condition the inventory operation should stop when evaluating the `stop_trigger_expression`.
Possible values are defined by the **TriggerType** enum, with options:

- **RISING_EDGE**: The operation stops when the expression evaluates to `true` after being `false`.
- **FALLING_EDGE**: The operation stops when the expression evaluates to `false` after being `true`.
- **CHANGE**: The operation stops when the expression changes its value.

### `source_location_id`

References the source [Location](../location-model/location) for the inventory transaction.

### `destination_location_id`

References the destination [Location](../location-model/location) for the inventory transaction.

### `material_source`

Defines the strategy for resolving the [Material](../material-model/material.md), as defined by the **MaterialSource**
enum, with possible values:

- **STATIC**: The material is statically defined and does not change.
- **EXPRESSION**: The material is determined by evaluating an expression at runtime.
- **PARENT**: The material is inherited from the parent operation.

### `material_id`

References the [Material](../material-model/material.md) associated with the inventory operation. This is used when the
`material_source` is set to `STATIC`.

### `secondary_material_id`

References the secondary [Material](../material-model/material.md) associated with the inventory operation. This is used when the
`material_source` is set to `STATIC`.

### `material_expression`

An expression to resolve the [Material](../material-model/material.md) if the `material_source` is set to `EXPRESSION`.
Must evaluate to a valid Material ID or path.

### `primary_lot_resolution_strategy`

Specifies the strategy for resolving the primary [InventoryLot](../inventory-model/inventory-lot.md). Options are
defined by the **LotResolutionStrategy** enum, with possible values:

- **EXPRESSION**: The primary InventoryLot is determined by evaluating an expression at runtime.
- **MANUAL**: The primary InventoryLot must be supplied in the script starting the inventory operation.
- **AUTO_GENERATE**: The primary InventoryLot is generated automatically using a UUID.

### `secondary_lot_resolution_strategy`

Specifies the strategy for resolving the secondary [InventoryLot](../inventory-model/inventory-lot.md). Options are
defined by the **LotResolutionStrategy** enum, with possible values:

- **EXPRESSION**: The secondary InventoryLot is determined by evaluating an expression at runtime.
- **MANUAL**: The secondary InventoryLot must be supplied in the script starting the inventory operation.
- **AUTO_GENERATE**: The secondary InventoryLot is generated automatically using a UUID.

### `primary_lot_code_expression`

An expression to resolve the primary [InventoryLot](../inventory-model/inventory-lot.md). Used only if
`primary_lot_resolution_strategy` is set to `EXPRESSION`. The expression must evaluate to a valid InventoryLot code
or ID.

### `secondary_lot_code_expression`

An expression to resolve the secondary [InventoryLot](../inventory-model/inventory-lot.md). Used only if
`secondary_lot_resolution_strategy` is set to `EXPRESSION`. The expression must evaluate to a valid InventoryLot code
or ID.

### `create_lot_if_not_found`

Indicates whether to create a [InventoryLot](../inventory-model/inventory-lot.md) if it doesn't exist.

### `inventory_name_resolution_strategy`

Specifies the strategy for resolving the [Inventory](../inventory-model/inventory.md) name. Options are defined by the
**InventoryNameResolutionStrategy** enum, with possible values:

- **EXPRESSION**: The Inventory name is determined by evaluating an expression at runtime.
- **MANUAL**: The Inventory name must be supplied in the script starting the inventory operation.
- **STATIC**: The Inventory name is always the same.
- **AUTO_GENERATE**: The Inventory name is generated automatically using a UUID.

### `inventory_name`

The name of the [Inventory](../inventory-model/inventory.md). Used only if `inventory_name_resolution_strategy` is set
to `STATIC`.

### `inventory_name_expression`

An expression to resolve the [Inventory](../inventory-model/inventory.md) name. Used only if
`inventory_name_resolution_strategy` is set to `EXPRESSION`. The expression must evaluate to a valid string.

### `quantity_source`

Specifies the strategy for resolving the quantity, as defined by the **QuantitySource** enum, with possible values:

- **EXPRESSION**: The quantity is determined by evaluating an expression at runtime.
- **MANUAL**: The quantity is manually specified in the script starting the inventory operation.

### `quantity_expression`

An expression to resolve the quantity. Used only if `quantity_source` is set to `EXPRESSION`. The expression must
evaluate to a number.

### `quantity_calc_type`

Specifies the calculation type for the quantity, as defined by the **QuantityCalcType** enum, with possible values:

- **DELTA**: The quantity is calculated based on changes in the expression's value over time.

### `quantity_overflow_value`

Specifies the overflow threshold for the quantity. This is useful when the expression pulls from instruments
that reset to zero after reaching a certain threshold.

### `unit_of_measure_resolution_strategy`

Specifies the strategy for resolving the [UnitOfMeasure](../utility-models/unit-of-measure-model/unit-of-measure.md), as defined by the **UnitOfMeasureResolutionStrategy** enum,
with possible values:

- **STATIC**: The UnitOfMeasure is statically defined and does not change.
- **FROM_CONTEXT**: The UnitOfMeasure is derived from the context of the operation, such as the [ProductionOrder](../production-order-model/production-order.md), [Material](../material-model/material.md), or existing [InventoryLot](../inventory-model/inventory-lot.md).

### `unit_of_measure_id`

References the [UnitOfMeasure](../utility-models/unit-of-measure-model/unit-of-measure.md) entity for the inventory
operation. Used when `unit_of_measure_resolution_strategy` is set to `STATIC`.

### `reason_code_id`

References the [MaterialReasonCode](../material-model/material-reason-code.md) associated with the inventory operation.

### `increment_production_order_count`

Indicates whether to increment the [ProductionOrder](../production-order-model/production-order.md) count when shipping
or producing material.
