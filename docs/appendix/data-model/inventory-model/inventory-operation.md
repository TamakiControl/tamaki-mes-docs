---
sidebar_position: 4
title: "inventory_operations"
description: "Documentation for the inventory_operations table, outlining its columns and structure."
---

# Inventory Operation

## Overview

The `InventoryOperation` entity represents an action performed on an inventory lot or inventory within the MES system. Key attributes include
lot handling strategies, quantity calculations, and triggers for initiating or completing actions. These fields support
precise management of material interactions, enabling efficient tracking and alignment with operational workflows.

## Table Structure

The following table outlines the SQL columns for the `inventory_operations` table, providing a brief description of each, along
with sample data where applicable.

| Column                                | Type                | Description                                                                                                                                                | Example                                                                                                                                  |
| ------------------------------------- | ------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| `id`                                  | `String` (ULID)     | Unique identifier for the entity.                                                                                                                          | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`                                                                                                           |
| `enabled`                             | `Boolean`           | If the entity is enabled or not.                                                                                                                           | `true`                                                                                                                                   |
| `created_date`                        | `DateTime`          | Date the entity was created.                                                                                                                               | `2024-12-31T19:48:44Z`                                                                                                                   |
| `created_by`                          | `String`            | Person who created the entity.                                                                                                                             | `TamakiMES`                                                                                                                              |
| `modified_date`                       | `DateTime`          | Date the entity was created.                                                                                                                               | `2024-12-31T19:48:44Z`                                                                                                                   |
| `modified_by`                         | `String`            | Last person to modify the entity.                                                                                                                          | `TamakiMES`                                                                                                                              |
| `notes`                               | `Blob`              | Notes about the entity.                                                                                                                                    | `This entity has these extra notes`                                                                                                      |
| `spare1`                              | `String`            | The first spare column that can be used for additional context on the entity.                                                                              | `some extra context 1`                                                                                                                   |
| `spare2`                              | `String`            | The second spare column that can be used for additional context on the entity.                                                                             | `some extra context 2`                                                                                                                   |
| `spare3`                              | `String`            | The third spare column that can be used for additional context on the entity.                                                                              | `some extra context 3`                                                                                                                   |
| `name`                                | `String`            | Name of the inventory operation.                                                                                                                           | `Lids`                                                                                                                                   |
| `create_lot_if_not_found`             | `Boolean`           | Create a lot if it doesn't exist. Only used if operationType is CONSUME.                                                                                   | `false`                                                                                                                                  |
| `flush_interval_millis`               | `Integer`           | The time interval between data saves in milliseconds.                                                                                                      | `1000`                                                                                                                                   |
| `increment_production_order_count`    | `Boolean`           | Update the production order quantity if shipping or producing material.                                                                                    | `false`                                                                                                                                  |
| `operation_type`                      | `String`            | Inventory operation record type, as defined by the **LotRecordType** enum.                                                                                 | `CONSUME`                                                                                                                                |
| `primary_lot_code_expression`         | `String`            | The Ignition expression to specify the primary lot code. This can be existing or new lot code.                                                             | See [Ignition_expression_language_and_syntax](https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax) |
| `primary_lot_resolution_strategy`     | `String`            | Strategy used to get the primary lot code, as defined by the **LotResolutionStrategy** enum.                                                               | `AUTO_GENERATE`                                                                                                                          |
| `secondary_lot_code_expression`       | `String`            | The Ignition expression to specify the secondary lot code. This can be existing or new lot code.                                                           | See [Ignition_expression_language_and_syntax](https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax) |
| `secondary_lot_resolution_strategy`   | `String`            | Strategy used to get the secondary lot code, as defined by the **LotResolutionStrategy** enum.                                                             | `AUTO_GENERATE`                                                                                                                          |
| `material_expression`                 | `String` (max 2048) | The Ignition expression for materials. Must return the id of the material.                                                                                 | See [Ignition_expression_language_and_syntax](https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax) |
| `material_source`                     | `String`            | Strategy used for resolving the material id for an operation, as defined by the **MaterialResolutionStrategy** enum.                                       | `STATIC`                                                                                                                                 |
| `quantity_calc_type`                  | `String`            | Calculation type for quantity, as defined by the **CountCalcType** enum. Only used if quantitySource is EXPRESSION.                                        | `DIRECT`                                                                                                                                 |
| `quantity_expression`                 | `String` (max 2048) | The Ignition expression for quantity.                                                                                                                      | See [Ignition_expression_language_and_syntax](https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax) |
| `quantity_overflow_value`             | `Double`            | Overflow value for the quantity. Only used if quantitySource is EXPRESSION and the quantityCalcType is RISING.                                             | `100.0`                                                                                                                                  |
| `quantity_source`                     | `String`            | Source of the quantity of an inventory operation, as defined by the **QuantitySource** enum.                                                               | `EXPRESSION`                                                                                                                             |
| `start_trigger_expression`            | `String` (max 2048) | The Ignition expression to trigger the start of the transfer of materials.                                                                                 | See [Ignition_expression_language_and_syntax](https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax) |
| `start_trigger_type`                  | `String`            | Trigger type when starting the transfer of materials, as defined by the **TriggerType** enum.                                                              | `RISING_EDGE`                                                                                                                            |
| `status`                              | `String`            | Status of the inventory operation, as defined by the **Status** enum.                                                                                      | `IDLE`                                                                                                                                   |
| `stop_trigger_expression`             | `String` (max 2048) | Ignition expression to trigger the end of the transfer of materials.                                                                                       | See [Ignition_expression_language_and_syntax](https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax) |
| `stop_trigger_type`                   | `String`            | Trigger type when stopping the transfer of materials, as defined by the **TriggerType** enum.                                                              | `FALLING_EDGE`                                                                                                                           |
| `trigger_source`                      | `String`            | Ways that the various inventory operations can trigger, as defined by the **TriggerEvaluationStrategy** enum.                                              | `EXPRESSION`                                                                                                                             |
| `material_id`                         | `String` (ULID)     | References the material to which this inventory operation belongs. See [materials](../material-model/material).                                            | `01JAP8RJBN-4VYZUKE1-LY2QHV8X`                                                                                                           |
| `source_location_id`                  | `String` (ULID)     | References the location for movement source. See [locations](../location-model/location).                                                                  | `01JAP8R5RT-3FPXQABY-7KQZT6VF`                                                                                                           |
| `destination_location_id`             | `String` (ULID)     | References the location for movement destination. See [locations](../location-model/location).                                                             | `01JAP8R5RT-3FPXQABY-7KQZT6VF`                                                                                                           |
| `operation_id`                        | `String` (ULID)     | References the associated operation that uses the inventory operations. See [operations](../operation-model/operation).                                    | `01JAP8RJBN-7KQZT6VF-Q5VUZYPW`                                                                                                           |
| `reason_code_id`                      | `String` (ULID)     | References an optional reason code for any action on inventory operation. See [material_reason_codes](../material-model/material-reason-code).             | `01JAP8R5RT-3FPXQABY-7KQZT6VF`                                                                                                           |
| `current_record_id`                   | `String` (ULID)     | References the current inventory lot record associated with the inventory operation. See [inventory_lot_records](../inventory-model/inventory-lot-record). | `01JAP8RJBN-4VYZUKE1-LY2QHV8X`                                                                                                           |
| `inventory_name`                      | `String`            | The name of the inventory associated with this inventory operation.                                                                                        | `165456432135659`                                                                                                                        |
| `inventory_name_expression`           | `String` (max 2048) | The Ignition expression to specify the inventory name.                                                                                                     | See [Ignition_expression_language_and_syntax](https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax) |
| `inventory_name_resolution_strategy`  | `String`            | Strategy used to get the inventory name, as defined by the **InventoryNameResolutionStrategy** enum.                                                       | `MANUAL`                                                                                                                                 |
| `unit_of_measure_resolution_strategy` | `String`            | The source of the unit of measure, as defined by the **UnitOfMeasureResolutionStrategy** enum.                                                             | `STATIC`                                                                                                                                 |
| `unit_of_measure_id`                  | `String` (ULID)     | References the unit of measure associated with the inventory operation. See [unit_of_measure](../utility-models/unit-of-measure-model/unit-of-measure).    | `01JAP8RJBN-4VYZUKE1-LY2QHV8X`                                                                                                           |

## Field Details

### `name`

The `name` field provides a descriptive identifier for the inventory operation.

A few examples for the `Packaging Operation`:

- `Lids`: To govern adding lids to the line as it moves.
- `Filling`: To govern the liquid filler for each can.

### `create_lot_if_not_found`

Creates a lot if it doesn't already exist. This can only be used if operationType is CONSUME.

### `flush_interval_millis`

The `flush_interval_millis` field specifies the interval, in milliseconds, between data saves to the database.

### `increment_production_order_count`

Indicates whether the production order quantity should be updated when we are shipping or producing material.

### `operation_type`

Represents the inventory operation record type, as defined by the **LotRecordType** enum, with options
such as `CONSUME`, `UNCONSUME`, `PRODUCE`, `MOVE`, `SPLIT`, `MERGE`, `SCRAP`, `RETURN`, `STATUS_CHANGE`, `EDIT`, `RECEIVE`, `SHIP`.

### `primary_lot_code_expression` and `secondary_lot_code_expression`

Expression to resolve or generate the lot code, using the Ignition expression language. This can be existing or new lot code.
See [Ignition_expression_language_and_syntax](https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax) for more details.

### `primary_lot_resolution_strategy` and `secondary_lot_resolution_strategy`

Represents the strategy used to to get the lot code, as defined by the **LotResolutionStrategy** enum, with
possible values:

- **AUTO_GENERATE**: Generate a lot code automatically using UUID
- **EXPRESSION**: Return a lot code from an expression.
- **MANUAL**: Must be supplied in script starting operation.

Only used if operationType is for CONSUME or RECEIVE_CONSUME.

### `material_expression`

Represents the expression for materials, using the Ignition expression language. Must return the id of the material.
See [Ignition_expression_language_and_syntax](https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax) for more details.

### `material_source`

Represents the strategy used for resolving the material id for an operation, as defined
by the **MaterialResolutionStrategy** enum, with possible values:

- **STATIC**: Always the same material id.
- **EXPRESSION**: Expression that provides the material id.
- **MANUAL**: Supplied by a startOperation script call when the operation is started.

### `quantity_calc_type`

Calculation type for quantity, as defined by the **CountCalcType** enum,
with options such as `DIRECT`, and `RISING`. Only used if quantitySource is EXPRESSION.

### `quantity_expression`

Represents the expression for quantity, using the Ignition expression language.
See [Ignition_expression_language_and_syntax](https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax) for more details.

### `quantity_overflow_value`

Overflow value for the quantity. Only used if quantitySource is EXPRESSION and the quantityCalcType is RISING.

### `quantity_source`

Represents the source of the quantity of an inventory operation, as defined by the **QuantitySource** enum,
with possible values:

- **EXPRESSION**: Use an expression to calculate the quantity.
- **MANUAL**: Supplied by a startOperation script call when the operation is started.

### `start_trigger_expression`

Represents the expression to trigger the start of the transfer of materials, using the Ignition expression language.
See [Ignition_expression_language_and_syntax](https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax) for more details.

### `start_trigger_type`

Trigger type when starting the transfer of materials, as defined by the **TriggerType** enum,
with options such as `RISING_EDGE`, `FALLING_EDGE`, and `CHANGE`.

### `status`

Represents the status of the inventory operation, as defined by the **Status** enum, with options such
as `IDLE`, `RUNNING`, `COMPLETED`, `FAULTED`, `CANCELLED`, `UNKNOWN`, and `PAUSED`.

### `stop_trigger_expression`

Represents the expression to trigger the end of the transfer of materials, using the Ignition expression language.
See [Ignition_expression_language_and_syntax](https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax) for more details.

### `stop_trigger_type`

Trigger type when stopping the transfer of materials, as defined by the **TriggerType** enum,
with options such as `RISING_EDGE`, `FALLING_EDGE`, and `CHANGE`.

### `trigger_source`

Represents the ways that the various inventory operations can trigger, as defined by the **TriggerEvaluationStrategy** enum, with possible values:

- **MANUAL**: Manually triggered from a startOperation script.
- **EXPRESSION**: Triggered via start/end trigger expressions.
- **PARENT**: Triggered at the same time as the parent operation.

### `material_id`

References the `Material` entity associated with this inventory operation, providing context about the material's characteristics and
properties.
See [materials](../material-model/material) for details.

### `source_location_id`

References the `Location` entity for movement source, allowing precise tracking of where
the inventory lot and inventory is within the facility.
See [locations](../location-model/location) for details.

### `destination_location_id`

Optional reference to a `Location` entity for movement destination, allowing precise tracking of where
the inventory lot and inventory is within the facility.
See [locations](../location-model/location) for details.

### `operation_id`

Optional reference to an `Operation` entity associated with this inventory operation, providing context to what action is being
performed in the MES system.
See [operations](../operation-model/operation) for details.

### `reason_code_id`

Optional reference to a `MaterialReasonCode` that provides a reason for running the operation.
See [material_reason_codes](../material-model/material-reason-code) for details.

### `current_record_id`

Optional reference to an `InventoryLotRecord` entity to be used by a provider startup to load a
currently active run in the event of a shutdown/crash or gateway restart.
See [inventory_lot_records](../inventory-model/inventory-lot-record) for details.

### `inventory_name`

The name of the inventory associated with this inventory operation.

### `inventory_name_expression`

Represents the expression to specify the inventory name, using the Ignition expression language.
See [Ignition_expression_language_and_syntax](https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax) for more details.

### `inventory_name_resolution_strategy`

Represents the strategy used for resolving the inventory name, as defined
by the **InventoryNameResolutionStrategy** enum, with possible values:

- **STATIC**: Always the same inventory name.
- **EXPRESSION**: Return a lot code from an expression.
- **MANUAL**: Must be supplied in script starting inventory operation.
- **AUTO_GENERATE**: Generate a lot code automatically using UUID.

### `unit_of_measure_resolution_strategy`

Represents the strategy used for resolving the unit of measure, as defined
by the **UnitOfMeasureResolutionStrategy** enum, with possible values:

- **STATIC**: Always the same unit of measure.
- **FROM_CONTEXT**: Pull the unit of measure from the context (either production order, material, or existing lot).

### `unit_of_measure_id`

References the `UnitOfMeasure` entity associated with the inventory operation, enabling consistent measurement standards.
See [unit_of_measure](../utility-models/unit-of-measure-model/unit-of-measure) for details.
