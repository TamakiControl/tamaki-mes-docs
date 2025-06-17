---
sidebar_position: 1
title: "schedules"
description: "Documentation for the schedules table, detailing columns and constraints in the database schema."
---

# Schedule

## Overview

The `Schedule` entity represents a planned activity within the manufacturing environment. It defines when an operation should occur, how long it should take, the quantity to be produced, and its current status. Schedules are linked to production orders, operations, and locations, providing a comprehensive view of manufacturing activities.

## Table Structure

The following table outlines the SQL columns for the `schedules` table, providing a brief description of
each, along with sample data where applicable.

| Column                           | Type            | Description                                                                                                                                                                     | Example                             |
|----------------------------------|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| `id`                             | `String` (ULID) | Unique identifier for the entity.                                                                                                                                               | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `enabled`                        | `Boolean`       | If the entity is enabled or not.                                                                                                                                                | `true`                              |
| `created_date`                   | `DateTime`      | Date the entity was created.                                                                                                                                                    | `2024-12-31T19:48:44Z`              |
| `created_by`                     | `String`        | Person who created the entity.                                                                                                                                                  | `TamakiMES`                         |
| `modified_date`                  | `DateTime`      | Date the entity was modified. Value is null upon creation, and gets initially populated upon the first edit.                                                                    | `2024-12-31T19:48:44Z`              |
| `modified_by`                    | `String`        | Last person to modify the entity. Value is null upon creation, and gets initially populated upon the first edit.                                                                | `TamakiMES`                         |
| `notes`                          | `Blob`          | Notes about the entity.                                                                                                                                                         | `This entity has these extra notes` |
| `spare1`                         | `String`        | The first spare column that can be used for additional context on the entity.                                                                                                   | `some extra context 1`              |
| `spare2`                         | `String`        | The second spare column that can be used for additional context on the entity.                                                                                                  | `some extra context 2`              |
| `spare3`                         | `String`        | The third spare column that can be used for additional context on the entity.                                                                                                   | `some extra context 3`              |
| `duration_expected`              | `Integer`       | Expected duration of the scheduled activity in minutes.                                                                                                                         | `240`                               |
| `end_date`                       | `DateTime`      | Planned end date and time for the schedule.                                                                                                                                     | `2025-01-01T19:48:44Z`              |
| `quantity`                       | `Double`        | Planned quantity to be during this schedule.                                                                                                                                    | `500.0`                             |
| `start_date`                     | `DateTime`      | Planned start date and time for the schedule.                                                                                                                                   | `2024-12-31T19:48:44Z`              |
| `status`                         | `String` (Enum) | Current status of the schedule. Possible values: `IDLE`, `RUNNING`, `COMPLETED`, `FAULTED`, `CANCELLED`, `UNKNOWN`, `PAUSED`, as defined by the **Status** enum.                | `RUNNING`                           |
| `status_erp`                     | `String`        | Status reported to or synchronized with the ERP system.                                                                                                                         | `PLANNED`                           |
| `equipment_maintenance_order_id` | `String` (ULID) | Reference to an equipment maintenance order if this schedule is for maintenance activities. See [equipment_maintenance_orders](../equipment-model/equipment-maintenance-order). | `01JAP8RJBN-9ZTPXSGY-K9GSDPE2`      |
| `location_id`                    | `String` (ULID) | Reference to the location where this schedule will take place. See [locations](../location-model/location).                                                                     | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `operation_id`                   | `String` (ULID) | Reference to the operation that is being scheduled. See [operations](../operation-model/operation).                                                                             | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `operation_record_id`            | `String` (ULID) | Reference to the operation record that tracks the actual execution of this schedule. See [operation_records](../operation-model/operation-record).                              | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `production_order_id`            | `String` (ULID) | Reference to the production order that this schedule fulfills. See [production_orders](../production-order-model/production-order).                                             | `01JAP8R5RT-3FPXQABY-7KQZT6VF`      |

## Field Details

### `duration_expected`

Represents the expected duration of the scheduled activity in minutes. This is used for planning purposes and can be compared to the actual duration for performance analysis.

### `end_date` and `start_date`

These fields define the time window during which the scheduled activity is planned to occur. The difference between these times should typically align with the `duration_expected` value.

### `quantity`

Specifies the planned quantity to be produced or processed during this schedule. This is used for production planning and material requirements planning.

### `status`

Indicates the current state of the schedule in the manufacturing process, as defined by the **Status** enum, with the following possible values:

- `IDLE`: The schedule is created but waiting to be started
- `RUNNING`: The schedule is currently being executed
- `COMPLETED`: The schedule has been finished successfully
- `FAULTED`: The schedule has encountered an error or issue
- `CANCELLED`: The schedule was cancelled before completion
- `UNKNOWN`: The schedule status cannot be determined
- `PAUSED`: The schedule has been temporarily paused

### `status_erp`

This field contains the status representation that is synchronized with the ERP system, which may use different terminology or status codes than the MES.
