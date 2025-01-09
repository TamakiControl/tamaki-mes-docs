---
sidebar_position: 2
title: "operations"
description: "Documentation for the operations table, outlining its columns and structure."
---

# Operation

## Overview

The `Operation` entity represents a specific action or task that can be performed within the MES system. Each operation is defined with 
key attributes include duration settings, triggers for starting and stopping, and strategies for managing execution and conflicts. 
These fields collectively enable precise planning, execution, and tracking of operations.

## Table Structure

The following table outlines the SQL columns for the `operations` table, providing a brief description of each, along
with sample data where applicable.

| Column                                     | Type                | Description                                                                                                                                   | Example                                       |
|--------------------------------------------|---------------------|-----------------------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------|
| `id`                                       | `String` (ULID)     | Unique identifier for the entity.                                                                                                             | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`                |
| `enabled`                                  | `Boolean`           | If the entity is enabled or not.                                                                                                              | `true`                                        |
| `created_date`                             | `DateTime`          | Date the entity was created.                                                                                                                  | `2024-12-31T19:48:44Z`                        |
| `created_by`                               | `String`            | Person who created the entity.                                                                                                                | `TamakiMES`                                   |
| `modified_date`                            | `DateTime`          | Date the entity was created.                                                                                                                  | `2024-12-31T19:48:44Z`                        |
| `modified_by`                              | `String`            | Last person to modify the entity.                                                                                                             | `TamakiMES`                                   |
| `notes`                                    | `Blob`              | Notes about the entity.                                                                                                                       | `This entity has these extra notes`           |
| `spare1`                                   | `String`            | The first spare column that can be used for additional context on the entity.                                                                 | `some extra context 1`                        |
| `spare2`                                   | `String`            | The second spare column that can be used for additional context on the entity.                                                                | `some extra context 2`                        |
| `spare3`                                   | `String`            | The third spare column that can be used for additional context on the entity.                                                                 | `some extra context 3`                        |
| `name`                                     | `String`            | Name of the operation.                                                                                                                        | `Packaging`                                   |
| `auto_add_to_schedule`                     | `Boolean`           | Automatically add this operation to the schedule if it doesn't exist.                                                                         | `true`                                        |
| `expected_duration_calculation_strategy`   | `String`            | Resolution strategies for the expected duration of an operation, as defined by the **ExpectedDurationCalculationStrategy** enum.              | `STATIC`                                      |
| `expected_duration_expression`             | `String`            | The Ignition expression for expected duration of an operation.                                                                                | See [Ignition_expression_language_and_syntax](https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax) |  
| `expected_duration_seconds`                | `Integer`           | The expected duration of an operation in seconds.                                                                                             | `3000`                                        |
| `flush_interval_millis`                    | `Integer`           | The time interval between data saves in milliseconds.                                                                                         | `1000`                                        |
| `production_order_expression`              | `String`            | The Ignition expression to determine the production order that the operation runs.                                                            | `{[default]Tamaki/Brewing/Line1/ActiveOrder}` |
| `production_order_resolution_strategy`     | `String`            | Production order source for an operation, as defined by the **ProductionOrderResolutionStrategy** enum.                                       | `MANUAL`                                      |
| `production_order_update_strategy`         | `String`            | Strategy used if the production order expression changes while the operation is active, as defined by the **ExpressionUpdateBehavior** enum.  | `KEEP_FIRST_GOOD_VALUE`                       |
| `running_conflict_strategy`                | `String`            | Conflict strategy used when a new operation is started while another is running, as defined by the **OperationRunningConflictStrategy** enum. | `STOP_PREVIOUS`                               |
| `start_production_order_status`            | `String`            | Production order's status when the operation starts, as defined by the **ProductionOrderStatus** enum.                                        | `RUNNING`                                     |
| `start_trigger_expression`                 | `String` (max 2048) | Trigger Ignition expression when starting the operation.                                                                                      | See [Ignition_expression_language_and_syntax](https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax) |
| `start_trigger_type`                       | `String`            | Trigger type when starting the operation, as defined by the **TriggerType** enum.                                                             | `RISING_EDGE`                                 |
| `status`                                   | `String`            | Status of the operation, as defined by the **Status** enum.                                                                                   | `IDLE`                                        |
| `stop_production_order_status`             | `String`            | Production order's status when the operation stops, as defined by the **ProductionOrderStatus** enum.                                         | `STOPPED`                                     |
| `stop_trigger_expression`                  | `String` (max 2048) | Trigger Ignition expression when stopping the operation.                                                                                      | See [Ignition_expression_language_and_syntax](https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax) |
| `stop_trigger_type`                        | `String`            | Trigger type when stopping the operation, as defined by the **TriggerType** enum.                                                             | `FALLING_EDGE`                                |
| `trigger_source`                           | `String`            | Ways that the various operations can trigger, as defined by the **TriggerEvaluationStrategy** enum.                                           | `EXPRESSION`                                  |
| `update_production_order_status_on_start`  | `Boolean`           | Update the order status when the operation starts.                                                                                            | `false`                                       |
| `update_production_order_status_on_stop`   | `Boolean`           | Update the order status when the operation stops.                                                                                             | `false`                                       |
| `current_operation_record_id`              | `String` (ULID)     | References the current operation record. See [operation_records](../operation-model/operation-record).                                        | `01JAP8R5RT-3FPXQABY-7KQZT6VF`                |
| `current_production_order_id`              | `String` (ULID)     | References the current production order. See [production_orders](../production-order-model/production-order).                                 | `01JAP8RJBN-7KQZT6VF-Q5VUZYPW`                |
| `location_id`                              | `String` (ULID)     | References the location where the operation is taking place. See [locations](../location-model/location).                                     | `01JAP8R5RT-3FPXQABY-7KQZT6VF`                |

## Field Details

### `name`

The `name` field provides a descriptive identifier for the operation.

### `auto_add_to_schedule`

Indicates whether the operation should automatically add this operation to the 
schedule if it doesn't exist.

### `expected_duration_calculation_strategy`

Represents the expected duration of an operation, based on the **ExpectedDurationCalculationStrategy** enum, with possible values:

- **EXPRESSION**: Use an expression to calculate expected duration.
- **STATIC**: Expected duration is a fixed number.
- **FROM_PRODUCTION_ORDER**: Expected duration is based on the production order product material and expected run rate (performance targets).

### `expected_duration_expression`

Defines the formula for calculating the anticipated duration of an operation, using the Ignition expression language.
See [Ignition_expression_language_and_syntax](https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax) for more details.

### `expected_duration_seconds`

The `expected_duration_seconds` field specifies the expected duration, in seconds, required to complete an operation.

### `flush_interval_millis`

The `flush_interval_millis` field specifies the interval, in milliseconds, between data saves to the database.

### `production_order_expression`

Defines the production order that the operation runs, based on the production order id or name, using the Ignition expression language.
See [Ignition_expression_language_and_syntax](https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax) for more details.

### `production_order_resolution_strategy`

Represents the production order source for an operation, as defined by the **ProductionOrderResolutionStrategy** enum, with possible values:

- **NONE**: No production order for this operation.
- **MANUAL**: Must be provided in the start method call.
- **EXPRESSION**: Not provided in the method call, obtained by evaluating the expression.
- **SCHEDULE**: Find the production order based on the schedule.

### `production_order_update_strategy`

Represents the strategy used if the production order expression changes while the operation is active, 
as defined by the **ExpressionUpdateBehavior** enum, with possible values:

- **KEEP_FIRST_GOOD_VALUE**: The system shall retain the first non-null, even if the expression changes during the operation.
- **KEEP_LAST_GOOD_VALUE**: The system shall retain the last non-null, even if the expression changes during the operation.
- **THROW_ERROR**: The system shall throw an error if the expression changes during the operation.
- **NEW_RECORD**: The system shall create a new record if the expression changes during the operation.

### `running_conflict_strategy`

Represents the conflict strategy used when a new operation is started while another is running, as defined by the 
**OperationRunningConflictStrategy** enum, which includes options such as `THROW_EXCEPTION`, and `STOP_PREVIOUS`.

### `start_production_order_status`

Represents the status of the production order when the operation starts, as defined by the **ProductionOrderStatus** enum, 
with options such as `IDLE`, `SCHEDULED`, `RUNNING`, `PAUSED`, `STOPPED`, `CLOSED`, and `CANCELLED`.

### `start_trigger_expression`

Defines the trigger expression when starting the operation, using the Ignition expression language.
See [Ignition_expression_language_and_syntax](https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax) for more details.

### `start_trigger_type`

Defines the trigger type when starting the operation as defined by the **TriggerType** enum,
with options such as `RISING_EDGE`, `FALLING_EDGE`, and `CHANGE`.

### `status`

Represents the status of the operation, as defined by the **Status** enum, with options such 
as `IDLE`, `RUNNING`, `COMPLETED`, `FAULTED`, `CANCELLED`, `UNKNOWN`, and `PAUSED`.

### `stop_production_order_status`

Represents the status of the production order when the operation stops, as defined by the **ProductionOrderStatus** enum, 
with options such as `IDLE`, `SCHEDULED`, `RUNNING`, `PAUSED`, `STOPPED`, `CLOSED`, and `CANCELLED`.

### `stop_trigger_expression`

Defines the trigger expression when stopping the operation, using the Ignition expression language.
See [Ignition_expression_language_and_syntax](https://www.docs.inductiveautomation.com/docs/8.1/platform/expression-language-and-syntax) for more details.

### `stop_trigger_type`

Defines the trigger type when stopping the operation as defined by the **TriggerType** enum,
with options such as `RISING_EDGE`, `FALLING_EDGE`, and `CHANGE`.

### `trigger_source`

Represents the ways that the various operations can trigger, as defined by the **TriggerEvaluationStrategy** enum, with possible values:

- **MANUAL**: Manually triggered from a startOperation script.
- **EXPRESSION**: Triggered via start/end trigger expressions.
- **PARENT**: Triggered at the same time as the parent operation.

### `update_production_order_status_on_start`

Indicates whether the production order status should be updated when the operation stats.

### `update_production_order_status_on_stop`

Indicates whether the production order status should be updated when the operation stops.

### `current_operation_record_id`

Indicates the currently associated `OperationRecord`, linking the operation to the current operation record. This allows 
the operation to know the current operation record in case of a shutdown/crash or gateway restart.
See [operation_records](../operation-model/operation-record) for details. 

### `current_production_order_id`

Indicates the currently associated `ProductionOrder`, linking the operation to the current production order. This allows 
the operation to know the current production order that the operation is running in case of a shutdown/crash or gateway restart.
See [production_orders](../production-order-model/production-order) for details.

### `location_id`

References the `Location` entity where this operation is taking place, allowing precise tracking of where
this operation is within the facility.
See [locations](../location-model/location) for details.