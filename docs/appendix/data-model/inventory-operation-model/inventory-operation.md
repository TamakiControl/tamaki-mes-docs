---
sidebar_position: 2
title: "inventory_operations"
description: "Documentation for the inventory_operations table, outlining its columns and structure."
---

# Inventory Operation

## Overview

The `InventoryOperation` entity represents a configurable action that can be performed on inventory lots and inventory.
Each inventory operation defines strategies for resolving lots, locations, materials, inventory names, quantities, and
start/stop triggers. These fields collectively enable precise planning, execution, and automated control of inventory operations.

## Table Structure

| Column                                | Type                  | Description                                                                                                                                    | Example                             |
|---------------------------------------|-----------------------|------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| `id`                                  | `String` (ULID)       | Unique identifier for the entity.                                                                                                              | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `enabled`                             | `Boolean`             | Whether the entity is enabled.                                                                                                                 | `true`                              |
| `created_date`                        | `DateTime`            | Date the entity was created.                                                                                                                   | `2024-12-31T19:48:44Z`              |
| `created_by`                          | `String`              | Person who created the entity.                                                                                                                 | `TamakiMES`                         |
| `modified_date`                       | `DateTime`            | Date the entity was modified. Null on creation until first update.                                                                             | `2024-12-31T19:48:44Z`              |
| `modified_by`                         | `String`              | Last person to modify the entity. Null on creation until first update.                                                                         | `TamakiMES`                         |
| `notes`                               | `String`              | Freeform notes (inherited from BaseEntity).                                                                                                    | `Night shift auto config`           |
| `spare1`                              | `String`              | User-defined spare field.                                                                                                                      | `context a`                         |
| `spare2`                              | `String`              | User-defined spare field.                                                                                                                      | `context b`                         |
| `spare3`                              | `String`              | User-defined spare field.                                                                                                                      | `context c`                         |
| `operation_id`                        | `String` (ULID)       | References an `Operation` that this inventory operation is associated with.                                                                    | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `name`                                | `String`              | (Required) Name of the inventory operation.                                                                                                    | `Packaging`                         |
| `status`                              | `String` (Enum)       | Current status (defaults to `IDLE`). See **Status** enum.                                                                                      | `IDLE`                              |
| `current_record_id`                   | `String` (ULID)       | References the current `InventoryLotRecord` (nullable).                                                                                        | `01JAP8R5RT-3FPXQABY-7KQZT6VF`      |
| `operation_type`                      | `String` (Enum)       | Inventory operation type (defaults to `CONSUME`). See **InventoryOperationType** (implemented values listed below).                           | `CONSUME`                           |
| `trigger_source`                      | `String` (Enum)       | Strategy for evaluating triggers (defaults to `EXPRESSION`). See **TriggerEvaluationStrategy**.                                               | `EXPRESSION`                        |
| `start_trigger_expression`            | `String` (Expression) | Expression that, with trigger logic, starts the operation (nullable).                                                                       | `{[default]Trigger/Start}`          |
| `start_trigger_type`                  | `String` (Enum)       | Start trigger edge/type (defaults to `RISING_EDGE`). See **TriggerType**.                                                                      | `RISING_EDGE`                       |
| `stop_trigger_expression`             | `String` (Expression) | Expression that, with trigger logic, stops the operation (nullable).                                                                        | `{[default]Trigger/Stop}`           |
| `stop_trigger_type`                   | `String` (Enum)       | Stop trigger edge/type (defaults to `FALLING_EDGE`). See **TriggerType**.                                                                      | `FALLING_EDGE`                      |
| `source_location_id`                  | `String` (ULID)       | Source `Location` (nullable).                                                                                                                  | `01JAP8RJBN-7KQZT6VF-Q5VUZYPW`      |
| `destination_location_id`             | `String` (ULID)       | Destination `Location` (nullable).                                                                                                             | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `material_source`                     | `String` (Enum)       | Strategy for resolving material (defaults to `STATIC`). See **MaterialResolutionStrategy**.                                                    | `STATIC`                            |
| `material_id`                         | `String` (ULID)       | Primary material reference (nullable; used when `material_source=STATIC`).                                                                    | `01JAP8RJBN-7KQZT6VF-Q5VUZYPW`      |
| `secondary_material_id`               | `String` (ULID)       | Secondary material reference (nullable; used in dual-lot operations).                                                                          | `01JAP8RJBN-7KQZT6VF-Q5VUZYPW`      |
| `material_expression`                 | `String` (Expression) | Expression returning a material id/path (nullable; used when `material_source=EXPRESSION`).                                               | `{[default]Material/Expr}`          |
| `primary_lot_resolution_strategy`     | `String` (Enum)       | Lot code strategy for primary lot (defaults to `AUTO_GENERATE`). See **LotResolutionStrategy**.                                                | `AUTO_GENERATE`                     |
| `secondary_lot_resolution_strategy`   | `String` (Enum)       | Lot code strategy for secondary lot (defaults to `AUTO_GENERATE`). See **LotResolutionStrategy**.                                              | `AUTO_GENERATE`                     |
| `primary_lot_code_expression`         | `String` (Expression) | Expression for primary lot code (nullable; used when primary strategy is `EXPRESSION`).                                                   | `{[default]Lot/Primary}`            |
| `secondary_lot_code_expression`       | `String` (Expression) | Expression for secondary lot code (nullable; used when secondary strategy is `EXPRESSION`).                                               | `{[default]Lot/Secondary}`          |
| `create_lot_if_not_found`             | `Boolean`             | Whether to create a lot if not found (defaults to `false`; only used when `operation_type=CONSUME`).                                         | `false`                             |
| `inventory_name_resolution_strategy`  | `String` (Enum)       | Strategy for inventory name (defaults to `STATIC`). See **InventoryNameResolutionStrategy**.                                                  | `STATIC`                            |
| `inventory_name`                      | `String`              | Static inventory name (nullable; used when name resolution strategy is `STATIC`).                                                            | `Inventory1`                        |
| `inventory_name_expression`           | `String` (Expression) | Expression for inventory name (nullable; used when name strategy is `EXPRESSION`).                                                      | `{[default]Inventory/Name}`         |
| `quantity_source`                     | `String` (Enum)       | Quantity resolution strategy (defaults to `EXPRESSION`). See **QuantitySource**.                                                             | `EXPRESSION`                        |
| `quantity_expression`                 | `String` (Expression) | Expression returning quantity (nullable; required when `quantity_source=EXPRESSION`).                                                   | `{[default]Quantity/Expr}`          |
| `quantity_calc_type`                  | `String` (Enum)       | Calculation type (defaults to `DELTA`). See **CountCalcType**.                                                                               | `DELTA`                             |
| `quantity_overflow_value`             | `Double`              | Overflow / rollover threshold (nullable; used with rising counters + `DELTA`).                                                               | `100.0`                             |
| `unit_of_measure_id`                  | `String` (ULID)       | `UnitOfMeasure` reference (nullable when resolution strategy derives from context).                                                          | `01JAP8RJBN-7KQZT6VF-Q5VUZYPW`      |
| `unit_of_measure_resolution_strategy` | `String` (Enum)       | Strategy for resolving unit of measure (defaults to `STATIC`). See **UnitOfMeasureResolutionStrategy**.                                      | `STATIC`                            |
| `reason_code_id`                      | `String` (ULID)       | `MaterialReasonCode` reference (nullable).                                                                                                  | `01JAP8RJBN-7KQZT6VF-Q5VUZYPW`      |
| `increment_production_order_count`    | `Boolean`             | Whether to increment production order count when producing/shipping (defaults to `false`).                                                   | `false`                             |

## Field Details

### `name`

A descriptive identifier for the inventory operation.

### `status`
Default: `IDLE`. Values (from **Status** enum): `IDLE`, `RUNNING`, `COMPLETED`, `FAULTED`, `CANCELLED`, `UNKNOWN`, `PAUSED`.

### `current_record_id`
References the active `InventoryLotRecord` (if the operation is currently RUNNING). On gateway restart this can be used to resume state. Relationship is a one‑to‑one with `InventoryLotRecord.currentRecord` owning side on the `inventory_operations` table.

### `operation_type`
Implemented values (current enum constants):
- `CONSUME`
- `UNCONSUME`
- `PRODUCE`
- `SCRAP`
- `SCRAP_ALL`
- `RETURN`
- `RECEIVE`
- `RECEIVE_AND_CONSUME`
- `SHIP`

(Planned but NOT currently implemented in code: `MOVE`, `SPLIT`, `MERGE`, `STATUS_CHANGE`, `EDIT`).

### `trigger_source`
Uses **TriggerEvaluationStrategy**: `EXPRESSION`, `MANUAL`, `PARENT` (default: `EXPRESSION`). Determines how start/stop expressions are evaluated.

### `start_trigger_expression` / `stop_trigger_expression`
Expressions (Ignition / gateway expression language) evaluated to detect trigger edges. Nullable unless `trigger_source=EXPRESSION`.

### `start_trigger_type` / `stop_trigger_type`
Values from **TriggerType**: `RISING_EDGE`, `FALLING_EDGE`, `CHANGE`. Defaults: start=`RISING_EDGE`, stop=`FALLING_EDGE`.

### `material_source`
Uses **MaterialResolutionStrategy** enum: `STATIC` (default), `EXPRESSION`, `PARENT`.

### `material_expression`
Required if `material_source=EXPRESSION`. Must resolve to a valid material identifier or path.

### Lot Resolution Strategies
`primary_lot_resolution_strategy` / `secondary_lot_resolution_strategy` ( **LotResolutionStrategy** ):
- `AUTO_GENERATE` (default)
- `EXPRESSION`
- `MANUAL`

### `create_lot_if_not_found`
Applies only when `operation_type=CONSUME`. If true, creates a new lot when a referenced lot code does not exist.

### Inventory Name Resolution
**InventoryNameResolutionStrategy** values:
- `STATIC` (default)
- `EXPRESSION`
- `MANUAL`
- `AUTO_GENERATE`

### Quantity Resolution
`quantity_source` (**QuantitySource**): `EXPRESSION` (default), `MANUAL`.

`quantity_calc_type` (**CountCalcType**):
- `DELTA` (default) – difference between successive readings.
- `DIRECT` – direct reading used as-is.

`quantity_overflow_value`: Rollover threshold for rising counters when using `DELTA`.

### Unit of Measure Resolution
`unit_of_measure_resolution_strategy` (**UnitOfMeasureResolutionStrategy**): `STATIC` (default), `FROM_CONTEXT`.
If `FROM_CONTEXT`, the unit may be inferred from a production order, material, or existing lot.

### Production Order Integration
`increment_production_order_count` (default `false`): when producing or shipping, increments the associated production order quantity.

### Reason Code
`reason_code_id` allows associating contextual reasons (scrap, adjustments, etc.) using a `MaterialReasonCode`.

## Defaults Summary
- status: `IDLE`
- operation_type: `CONSUME`
- trigger_source: `EXPRESSION`
- start_trigger_type: `RISING_EDGE`
- stop_trigger_type: `FALLING_EDGE`
- material_source: `STATIC`
- primary_lot_resolution_strategy: `AUTO_GENERATE`
- secondary_lot_resolution_strategy: `AUTO_GENERATE`
- create_lot_if_not_found: `false`
- inventory_name_resolution_strategy: `STATIC`
- quantity_source: `EXPRESSION`
- quantity_calc_type: `DELTA`
- increment_production_order_count: `false`

---
This document has been updated to align with the current Java entity implementation (including implemented enum values, defaults, and strategy enum names). Previously referenced unimplemented operation types and mismatched enum names (e.g. TriggerSource vs TriggerEvaluationStrategy, QuantityCalcType vs CountCalcType) have been corrected.
