---
sidebar_position: 3
title: "operation_records"
description: "Documentation for the operation_records table, outlining its columns and structure."
---

# Operation Record

## Overview

The `OperationRecord` entity represents an instance of an operation that has been performed within the MES system.
Key attributes include status, start and end dates, and associated operation and production order details.
These fields enable tracking of the execution and completion of specific operations, providing a record of when and where each operation took place.

## Table Structure

The following table outlines the SQL columns for the `operation_records` table, providing a brief description of each, along
with sample data where applicable.

| Column                     | Type            | Description                                                                                                                             | Example                             |
|----------------------------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| `id`                       | `String` (ULID) | Unique identifier for the entity.                                                                                                       | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `enabled`                  | `Boolean`       | If the entity is enabled or not.                                                                                                        | `true`                              |
| `created_date`             | `DateTime`      | Date the entity was created.                                                                                                            | `2024-12-31T19:48:44Z`              |
| `created_by`               | `String`        | Person who created the entity.                                                                                                          | `TamakiMES`                         |
| `modified_date`            | `DateTime`      | Date the entity was modified. Value is null upon creation, and gets initially populated upon the first edit.                            | `2024-12-31T19:48:44Z`              |
| `modified_by`              | `String`        | Last person to modify the entity. Value is null upon creation, and gets initially populated upon the first edit.                        | `TamakiMES`                         |
| `notes`                    | `Blob`          | Notes about the entity.                                                                                                                 | `This entity has these extra notes` |
| `spare1`                   | `String`        | The first spare column that can be used for additional context on the entity.                                                           | `some extra context 1`              |
| `spare2`                   | `String`        | The second spare column that can be used for additional context on the entity.                                                          | `some extra context 2`              |
| `spare3`                   | `String`        | The third spare column that can be used for additional context on the entity.                                                           | `some extra context 3`              |
| `name`                     | `String`        | Name of the operation record. Note this is a copy of what the operation's name was that created it.                                     | `Packaging`                         |
| `start_date`               | `DateTime`      | Timestamp marking when the operation started.                                                                                           | `2024-05-10T08:00:00Z`              |
| `end_date`                 | `DateTime`      | Timestamp marking when the operation stopped.                                                                                           | `2024-05-10T10:00:00Z`              |
| `status`                   | `String` (Enum) | Status of the operation record, as defined by the **Status** enum.                                                                      | `UNKNOWN`                           |
| `location_id`              | `String` (ULID) | References the location where the operation took place. See [locations](../location-model/location).                                    | `01JAP8RJBN-4VYZUKE1-LY2QHV8X`      |
| `operation_id`             | `String` (ULID) | References the operation definition that this operation record is for. See [operations](../operation-model/operation).                  | `01JAP8R5RT-3FPXQABY-7KQZT6VF`      |
| `production_order_id`      | `String` (ULID) | References the production order that this operation record is for. See [production_orders](../production-order-model/production-order). | `01JAP8RJBN-7KQZT6VF-Q5VUZYPW`      |
| `schedule_shift_record_id` | `String` (ULID) | References the associated schedule shift record. See [schedule_shift_records](../schedule-shift-model/schedule-shift-record).           | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |

## Field Details

### `name`

The `name` field provides a descriptive identifier for the operation record.
Note this is a copy of what the operation's name was that created it.

### `start_date` and `end_date`

- **start_date**: Timestamp indicating when the operation started.
- **end_date**: Timestamp indicating when the operation stopped.

These timestamps provide temporal context for each operation record.

### `status`

Represents the status of the operation record, as defined by the **Status** enum, with options such
as `IDLE`, `RUNNING`, `COMPLETED`, `FAULTED`, `CANCELLED`, `UNKNOWN`, and `PAUSED`.

### `location_id`

References the `Location` entity where this operation took place, allowing precise tracking of where
this operation is within the facility.
See [locations](../location-model/location) for details.

### `operation_id`

References the `Operation` entity associated with this operation record, providing context to what instance of
an operation that has been performed.
See [operations](../operation-model/operation) for details.

### `production_order_id`

Indicates the associated `ProductionOrder`, linking the operation record to the production order.
See [production_orders](../production-order-model/production-order) for details.

### `schedule_shift_record_id`

References the `ScheduleShiftRecord` entity that defines the shift during which this operation was performed. This relationship connects the operation record to its specific shift instance, allowing for better tracking of operations within the context of scheduled shifts.
See [schedule_shift_records](../schedule-shift-model/schedule-shift-record) for details.