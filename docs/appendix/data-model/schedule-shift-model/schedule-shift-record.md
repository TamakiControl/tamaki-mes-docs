---
sidebar_position: 2
title: "schedule_shift_records"
description: "Documentation for the schedule_shift_records table, detailing columns and constraints in the database schema."
---

# Schedule Shift Record

## Overview

The `ScheduleShiftRecord` entity represents individual instances of shifts within the manufacturing environment. While the `ScheduleShift` entity defines shift patterns and rules, this entity tracks actual shift occurrences, including their real start and end times, current status, and location.

## Table Structure

The following table outlines the SQL columns for the `schedule_shift_records` table, providing a brief description of
each, along with sample data where applicable.

| Column              | Type            | Description                                                                                                                                                   | Example                             |
|---------------------|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| `id`                | `String` (ULID) | Unique identifier for the entity.                                                                                                                             | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `enabled`           | `Boolean`       | If the entity is enabled or not.                                                                                                                              | `true`                              |
| `created_date`      | `DateTime`      | Date the entity was created.                                                                                                                                  | `2024-12-31T19:48:44Z`              |
| `created_by`        | `String`        | Person who created the entity.                                                                                                                                | `TamakiMES`                         |
| `modified_date`     | `DateTime`      | Date the entity was modified. Value is null upon creation, and gets initially populated upon the first edit.                                                  | `2024-12-31T19:48:44Z`              |
| `modified_by`       | `String`        | Last person to modify the entity. Value is null upon creation, and gets initially populated upon the first edit.                                              | `TamakiMES`                         |
| `notes`             | `Blob`          | Notes about the entity.                                                                                                                                       | `This entity has these extra notes` |
| `spare1`            | `String`        | The first spare column that can be used for additional context on the entity.                                                                                 | `some extra context 1`              |
| `spare2`            | `String`        | The second spare column that can be used for additional context on the entity.                                                                                | `some extra context 2`              |
| `spare3`            | `String`        | The third spare column that can be used for additional context on the entity.                                                                                 | `some extra context 3`              |
| `end_date`          | `DateTime`      | Actual end date and time when the shift ended or is expected to end.                                                                                          | `2025-01-01T14:00:00Z`              |
| `start_date`        | `DateTime`      | Actual start date and time when the shift began.                                                                                                              | `2024-12-31T06:00:00Z`              |
| `status`            | `String` (Enum) | Current status of the shift. Possible values: `IDLE`, `RUNNING`, `COMPLETED`, `FAULTED`, `CANCELLED`, `UNKNOWN`, `PAUSED`, as defined by the **Status** enum. | `IDLE`                              |
| `location_id`       | `String` (ULID) | Reference to the location where this shift runs. See [locations](../location-model/location).                                                                 | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `schedule_shift_id` | `String` (ULID) | Reference to the schedule shift that defines the pattern for this shift instance. See [schedule_shifts](../schedule-shift-model/schedule-shift).              | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |

## Field Details

### `end_date` and `start_date`

These fields record the actual start and end times of the shift. The `start_date` is set when the shift begins, while the `end_date` may be projected initially and then updated with the actual end time when the shift concludes.

### `status`

Indicates the current state of the shift record, as defined by the **Status** enum, with the following possible values:

- `IDLE`: The shift is scheduled but hasn't started yet
- `RUNNING`: The shift is currently in progress
- `COMPLETED`: The shift has concluded
- `FAULTED`: The shift has encountered an error or issue
- `CANCELLED`: The shift was cancelled before completion
- `UNKNOWN`: The shift status cannot be determined
- `PAUSED`: The shift has been temporarily paused

### `location_id`

References the specific location where the shift takes place. This might correspond to a production area, plant, or other defined location within the manufacturing facility.

### `schedule_shift_id`

References the `ScheduleShift` entity that defines the pattern or template for this shift instance. This relationship connects the specific shift occurrence to its general definition, rules, and configurations.