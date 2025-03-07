---
sidebar_position: 4
title: "inventory_operations"
description: "Documentation for the inventory_operations table, outlining its columns and structure."
---

<!-- TODO -->

# Inventory Operation

## Overview

The `InventoryOperation` entity represents an action performed on a inventory lot or inventory within the MES system. Key attributes include 
lot handling strategies, quantity calculations, and triggers for initiating or completing actions. These fields support 
precise management of material interactions, enabling efficient tracking and alignment with operational workflows.

## Table Structure

The following table outlines the SQL columns for the `inventory_operations` table, providing a brief description of each, along
with sample data where applicable.

| Column                                     | Type                | Description                                                                                                                                            | Example                              |
|--------------------------------------------|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------|
| `id`                                       | `String` (ULID)     | Unique identifier for the entity.                                                                                                                      | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`       |
| `enabled`                                  | `Boolean`           | If the entity is enabled or not.                                                                                                                       | `true`                               |
| `created_date`                             | `DateTime`          | Date the entity was created.                                                                                                                           | `2024-12-31T19:48:44Z`               |
| `created_by`                               | `String`            | Person who created the entity.                                                                                                                         | `TamakiMES`                          |
| `modified_date`                            | `DateTime`          | Date the entity was created.                                                                                                                           | `2024-12-31T19:48:44Z`               |
| `modified_by`                              | `String`            | Last person to modify the entity.                                                                                                                      | `TamakiMES`                          |
| `notes`                                    | `Blob`              | Notes about the entity.                                                                                                                                | `This entity has these extra notes`  |
| `spare1`                                   | `String`            | The first spare column that can be used for additional context on the entity.                                                                          | `some extra context 1`               |
| `spare2`                                   | `String`            | The second spare column that can be used for additional context on the entity.                                                                         | `some extra context 2`               |
| `spare3`                                   | `String`            | The third spare column that can be used for additional context on the entity.                                                                          | `some extra context 3`               |
| `name`                                     | `String`            | Name of the operation material.                                                                                                                        | `Lids`                               |
| `create_lot_if_not_found`                  | `Boolean`           | Create a lot if it doesn't exist. Only used if operationType is CONSUME.                                                                               | `false`                              |
| `flush_interval_millis`                    | `Integer`           | The time interval between data saves in milliseconds.                                                                                                  | `1000`                               |
| `increment_production_order_count`         | `Boolean`           | Update the production order quantity if shipping or producing material.                                                                                | `false`                              |  
| `lot_code_expression`                      | `String`            | The Ignition expression to resolve or generate the lot code. Can be an id or name if consuming and has to be a name if producing.                      | See [Ignition_expression_language_and_syntax](https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax) |
| `lot_expression_update_behavior`           | `String`            | Strategy used if the lot code expression changes while the operation is active, as defined by the **ExpressionUpdateBehavior** enum.                   | `KEEP_FIRST_GOOD_VALUE`              |
| `lot_generation_strategy`                  | `String`            | Strategy used to generate a lot code, as defined by the **LotGenerationStrategy** enum. Only used if operationType is PRODUCE.                         | `AUTO_GENERATE`                      |
| `lot_resolution_strategy`                  | `String`            | Strategy used to to get the lot code, as defined by the **LotResolutionStrategy** enum. Only used if operationType is for CONSUME or RECEIVE_CONSUME.  | `FROM_SOURCE_LOCATION`               |
| `material_expression`                      | `String` (max 2048) | The Ignition expression for materials. Must return the id of the material.                                                                             | See [Ignition_expression_language_and_syntax](https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax) |
| `material_expression_update_behavior`      | `String`            | Strategy used if the material expression changes while the operation is active, as defined by the **ExpressionUpdateBehavior** enum.                   | `KEEP_FIRST_GOOD_VALUE`              |
| `material_source`                          | `String`            | Strategy used for resolving the material id for an operation, as defined by the **MaterialResolutionStrategy** enum.                                   | `STATIC`                             |
| `move_quantity_calc_type`                  | `String`            | Calculation type for movement quantity, as defined by the **CountCalcType** enum. Only used if quantitySource is EXPRESSION.                           | `DIRECT`                             |
| `move_quantity_expression`                 | `String` (max 2048) | The Ignition expression for movement quantity.                                                                                                         | See [Ignition_expression_language_and_syntax](https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax) |
| `move_quantity_overflow_value`             | `Double`            | Overflow value for the movement quantity. Only used if quantitySource is EXPRESSION and the moveQuantityCalcType is RISING.                            | `100.0`                              |
| `operation_type`                           | `String`            | Material operation record type, as defined by the **OperationMaterialType** enum.                                                                      | `CONSUME`                            |
| `quantity_source`                          | `String`            | Source of the quantity of an operation material, as defined by the **QuantitySource** enum.                                                            | `EXPRESSION`                         |
| `scrap_remaining_inventory`                | `Boolean`           | Scraps any remaining material inventory for source location when the operation is active.                                                              | `false`                              |
| `start_trigger_expression`                 | `String`            | Ignition expression to trigger the start of the transfer of materials.                                                                                 | See [Ignition_expression_language_and_syntax](https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax) |
| `start_trigger_type`                       | `String`            | Trigger type when starting the transfer of materials, as defined by the **TriggerType** enum.                                                          | `RISING_EDGE`                        |
| `status`                                   | `String`            | Status of the operation material, as defined by the **Status** enum.                                                                                   | `IDLE`                               |
| `stop_trigger_expression`                  | `String` (max 2048) | Ignition expression to trigger the end of the transfer of materials.                                                                                   | See [Ignition_expression_language_and_syntax](https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax) |
| `stop_trigger_type`                        | `String`            | Trigger type when stopping the transfer of materials, as defined by the **TriggerType** enum.                                                          | `FALLING_EDGE`                       |
| `trigger_source`                           | `String`            | Ways that the various operation materials can trigger, as defined by the **TriggerEvaluationStrategy** enum.                                           | `EXPRESSION`                         |
| `material_id`                              | `String` (ULID)     | References the material to which this operation material belongs. See [materials](../material-model/material).                                         | `01JAP8RJBN-4VYZUKE1-LY2QHV8X`       |
| `move_location_id`                         | `String` (ULID)     | References the location for movement source or destination. See [locations](../location-model/location).                                               | `01JAP8R5RT-3FPXQABY-7KQZT6VF`       |
| `operation_id`                             | `String` (ULID)     | References the associated operation that uses the operation materials. See [operations](../operation-model/operation).                                 | `01JAP8RJBN-7KQZT6VF-Q5VUZYPW`       |
| `reason_code_id`                           | `String` (ULID)     | References an optional reason code for any action on operation material. See [material_reason_codes](../material-model/material-reason-code).          | `01JAP8R5RT-3FPXQABY-7KQZT6VF`       |

## Field Details

### `name`

The `name` field provides a descriptive identifier for the operation material.

A few examples for the `Packaging Operation`:
- `Lids`: To govern adding lids to the line as it moves.
- `Filling`: To govern the liquid filler for each can.

### `create_lot_if_not_found`

Creates a lot if it doesn't already exist. This can only be used if operationType is CONSUME.

### `flush_interval_millis`

The `flush_interval_millis` field specifies the interval, in milliseconds, between data saves to the database.

### `increment_production_order_count`

Indicates whether the production order quantity should be updated when we are shipping or producing material.

### `lot_code_expression`

Expression to resolve or generate the lot code, using the Ignition expression language. 
This can be an id or name if the operationType is CONSUME and has to be name if the operationType is PRODUCE.
See [Ignition_expression_language_and_syntax](https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax) for more details.

### `lot_expression_update_behavior`

Represents the strategy used if the lot code expression changes while the operation is active, 
as defined by the **ExpressionUpdateBehavior** enum, with possible values:

- **KEEP_FIRST_GOOD_VALUE**: The system shall retain the first non-null, even if the expression changes during the operation.
- **KEEP_LAST_GOOD_VALUE**: The system shall retain the last non-null, even if the expression changes during the operation.
- **THROW_ERROR**: The system shall throw an error if the expression changes during the operation.
- **NEW_RECORD**: The system shall create a new record if the expression changes during the operation.

### `lot_generation_strategy`

Represents the strategy used to generate a lot code, as defined by the **LotGenerationStrategy** enum, with possible values:

- **MANUAL**: Supplied with the startup script.
- **AUTO_GENERATE**: UUID lot code name.
- **EXPRESSION**: Use an expression to generate a string used for the lot code name.

Only used if operationType is PRODUCE.

### `lot_resolution_strategy`

Represents the strategy used to to get the lot code, as defined by the **LotResolutionStrategy** enum, with
possible values:

- **FROM_SOURCE_LOCATION**: From an existing location that has materials stored there.
- **EXPRESSION**: Return a lot code from an expression.
- **MANUAL**: Must be supplied in script starting operation.

Only used if operationType is for CONSUME or RECEIVE_CONSUME.

### `material_expression`

Represents the expression for materials, using the Ignition expression language. Must return the id of the material.
See [Ignition_expression_language_and_syntax](https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax) for more details.

### `material_expression_update_behavior`

Represents the strategy used if the material expression changes while the operation is active, 
as defined by the **ExpressionUpdateBehavior** enum, with possible values:

- **KEEP_FIRST_GOOD_VALUE**: The system shall retain the first non-null, even if the expression changes during the operation.
- **KEEP_LAST_GOOD_VALUE**: The system shall retain the last non-null, even if the expression changes during the operation.
- **THROW_ERROR**: The system shall throw an error if the expression changes during the operation.
- **NEW_RECORD**: The system shall create a new record if the expression changes during the operation.

### `material_source`

Represents the strategy used for resolving the material id for an operation, as defined 
by the **MaterialResolutionStrategy** enum, with possible values:

- **STATIC**: Always the same material id.
- **EXPRESSION**: Expression that provides the material id.
- **FROM_SOURCE_LOCATION**: Pull the material from what is currently stored at the source location.
- **MANUAL**: Supplied by a startOperation script call when the operation is started.

### `move_quantity_calc_type`

Calculation type for movement quantity, as defined by the **CountCalcType** enum,
with options such as `DIRECT`, and `RISING`. Only used if quantitySource is EXPRESSION.

### `move_quantity_expression`

Represents the expression for movement quantity, using the Ignition expression language.
See [Ignition_expression_language_and_syntax](https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax) for more details.

### `move_quantity_overflow_value`

Overflow value for the movement quantity. Only used if quantitySource is EXPRESSION and the moveQuantityCalcType is RISING.

### `operation_type`

Represents the material operation record type, as defined by the **OperationMaterialType** enum, with options
such as `CONSUME`, `PRODUCE`, `SCRAP`, `RECEIVE`, `SHIP`, `PRODUCE_SHIP`, and `RECEIVE_CONSUME`.

### `quantity_source`

Represents the source of the quantity of an operation material, as defined by the **QuantitySource** enum,
with possible values:

- **EXPRESSION**: Use an expression to calculate the quantity.
- **MANUAL**: Supplied by a startOperation script call when the operation is started.

### `scrap_remaining_inventory`

Indicates whether to scrap any remaining material inventory for source location when the operation is active.

### `start_trigger_expression`

Represents the expression to trigger the start of the transfer of materials, using the Ignition expression language.
See [Ignition_expression_language_and_syntax](https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax) for more details.

### `start_trigger_type`

Trigger type when starting the transfer of materials, as defined by the **TriggerType** enum,
with options such as `RISING_EDGE`, `FALLING_EDGE`, and `CHANGE`.

### `status`

Represents the status of the operation material, as defined by the **Status** enum, with options such 
as `IDLE`, `RUNNING`, `COMPLETED`, `FAULTED`, `CANCELLED`, `UNKNOWN`, and `PAUSED`.

### `stop_trigger_expression`

Represents the expression to trigger the end of the transfer of materials, using the Ignition expression language.
See [Ignition_expression_language_and_syntax](https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax) for more details.

### `stop_trigger_type`

Trigger type when stopping the transfer of materials, as defined by the **TriggerType** enum,
with options such as `RISING_EDGE`, `FALLING_EDGE`, and `CHANGE`.

### `trigger_source`

Represents the ways that the various operation materials can trigger, as defined by the **TriggerEvaluationStrategy** enum, with possible values:

- **MANUAL**: Manually triggered from a startOperation script.
- **EXPRESSION**: Triggered via start/end trigger expressions.
- **PARENT**: Triggered at the same time as the parent operation.

### `material_id`

References the `Material` entity associated with this operation material, providing context about the material's characteristics and
properties.
See [materials](../material-model/material) for details.

### `move_location_id`

References the `Location` entity for movement source or destination, allowing precise tracking of where
the inventory lot and inventory is within the facility.
See [locations](../location-model/location) for details.

### `operation_id`

References the `Operation` entity associated with this operation material, providing context to what action is being
performed in the MES system.
See [operations](../operation-model/operation) for details.

### `reason_code_id`

Optional reference to a `MaterialReasonCode` that provides a reason for running the operation.
See [material_reason_codes](../material-model/material-reason-code) for details.