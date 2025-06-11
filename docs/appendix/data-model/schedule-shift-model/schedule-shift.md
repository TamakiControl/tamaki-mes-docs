---
sidebar_position: 1
title: "schedule_shifts"
description: "Documentation for the schedule_shifts table, detailing columns and constraints in the database schema."
---

# Schedule Shift

## Overview

The `ScheduleShift` entity defines a shift pattern or schedule template within the manufacturing environment. It establishes rules for when shifts begin and end, how conflicts are handled, and where the shift takes place. This entity serves as the foundation for scheduling production activities across different time periods.

## Table Structure

The following table outlines the SQL columns for the `schedule_shifts` table, providing a brief description of
each, along with sample data where applicable.

| Column                       | Type            | Description                                                                                                                                        | Example                             |
|------------------------------|-----------------|----------------------------------------------------------------------------------------------------------------------------------------------------|-------------------------------------|
| `id`                         | `String` (ULID) | Unique identifier for the entity.                                                                                                                  | `01JAP8RJBN-8ZTPXSGY-J9GSDPE1`      |
| `enabled`                    | `Boolean`       | If the entity is enabled or not.                                                                                                                   | `true`                              |
| `created_date`               | `DateTime`      | Date the entity was created.                                                                                                                       | `2024-12-31T19:48:44Z`              |
| `created_by`                 | `String`        | Person who created the entity.                                                                                                                     | `TamakiMES`                         |
| `modified_date`              | `DateTime`      | Date the entity was modified. Value is null upon creation, and gets initially populated upon the first edit.                                       | `2024-12-31T19:48:44Z`              |
| `modified_by`                | `String`        | Last person to modify the entity. Value is null upon creation, and gets initially populated upon the first edit.                                   | `TamakiMES`                         |
| `notes`                      | `Blob`          | Notes about the entity.                                                                                                                            | `This entity has these extra notes` |
| `spare1`                     | `String`        | The first spare column that can be used for additional context on the entity.                                                                      | `some extra context 1`              |
| `spare2`                     | `String`        | The second spare column that can be used for additional context on the entity.                                                                     | `some extra context 2`              |
| `spare3`                     | `String`        | The third spare column that can be used for additional context on the entity.                                                                      | `some extra context 3`              |
| `description`                | `String`        | Detailed description of the shift pattern or schedule.                                                                                             | `Morning shift Monday-Friday`       |
| `name`                       | `String`        | Name identifier for the schedule shift.                                                                                                            | `Morning Shift`                     |
| `running_conflict_strategy`  | `String` (Enum) | Strategy for handling conflicts when a new shift starts while another is still running.                                                            | `END_CURRENT`                       |
| `schedule_name`              | `String`        | Name of schedule that defines this shift's timings.                                                                                                | `Weekday Schedule`                  |
| `schedule_source`            | `String`        | Source of the schedule that defines this shift's timings.                                                                                          | `MES_INTERNAL`                      |
| `start_trigger_expression`   | `String`        | Expression used to determine when the shift should start.                                                                                          | `0 0 6 * * 1-5`                     |
| `start_trigger_type`         | `String` (Enum) | Type of trigger mechanism used to start the shift (e.g., CRON, MANUAL, EVENT).                                                                     | `CRON`                              |
| `stop_trigger_expression`    | `String`        | Expression used to determine when the shift should end.                                                                                            | `0 0 14 * * 1-5`                    |
| `stop_trigger_type`          | `String` (Enum) | Type of trigger mechanism used to end the shift (e.g., CRON, MANUAL, EVENT, DURATION).                                                             | `CRON`                              |
| `current_shift_record_id`    | `String` (ULID) | Reference to the current active shift record for this schedule shift. See [schedule_shift_records](../schedule-shift-model/schedule-shift-record). | `01G8V9S9B9-3QWXS4VC`               |
| `location_id`                | `String` (ULID) | Reference to the location where this schedule shift runs. See [locations](../location-model/location).                                             | `01FZ8P9BJN-4VYZUKE1`               |

## Field Details

### `description` and `name`

These fields provide human-readable identifiers for the shift pattern. The `name` is typically a short identifier, while the `description` provides more detailed information about when and how the shift operates.

### `running_conflict_strategy`

Specifies how the system should handle situations where a new shift is triggered to start while another shift is still active. possible values include:

- `THROW_EXCEPTION`: Throws an exception if a shift is already running.
- `STOP_PREVIOUS`: Stops the previous shift and starts a new one.

### `schedule_name` and `schedule_source`

These fields identify the template or pattern that the shift follows and the source system or methodology used to generate the shift schedule.

### `start_trigger_expression` and `start_trigger_type`

These fields define when and how a shift should start. The `start_trigger_type` specifies the mechanism (such as `RISING_EDGE`, `FALLING_EDGE`, and `CHANGE`), while the `start_trigger_expression` provides the specific configuration for that mechanism.

### `stop_trigger_expression` and `stop_trigger_type`

Similar to the start trigger fields, these define when and how a shift should end. Possible values for `stop_trigger_type` are `RISING_EDGE`, `FALLING_EDGE`, and `CHANGE`.

### `current_shift_record_id`

References the currently active shift record associated with this schedule shift, if one exists. This allows for quick access to the current instance of this shift pattern.

### `location_id`

References the location where this shift schedule applies, linking the shift to a specific area of the manufacturing facility.
